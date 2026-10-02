import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, LogOut, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import { useToast } from '@/hooks/use-toast'
import { getLeads, deleteLead, type Lead } from '@/services/leads'
import logoImage from '@/assets/logo-edvanced-19-4dc8d.png'

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)
  const { signOut } = useAuth()
  const { toast } = useToast()

  const loadLeads = async () => {
    try {
      const data = await getLeads()
      setLeads(data as Lead[])
    } catch {
      toast({ title: 'Erro ao carregar leads', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadLeads()
  }, [])
  useRealtime('leads', () => {
    loadLeads()
  })

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      await deleteLead(deleteId)
      toast({ title: 'Lead excluido com sucesso.' })
      setLeads((prev) => prev.filter((l) => l.id !== deleteId))
    } catch {
      toast({ title: 'Erro ao excluir lead.', variant: 'destructive' })
    } finally {
      setDeleting(false)
      setDeleteId(null)
    }
  }

  const filtered = leads.filter(
    (l) =>
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()),
  )

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="Logo" className="h-10 object-contain" />
            <h1 className="text-xl font-bold hidden sm:block">Dashboard de Leads</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/10"
              >
                <ArrowLeft size={16} className="mr-1" /> Site
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/10"
              onClick={signOut}
            >
              <LogOut size={16} className="mr-1" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="text-2xl">Leads Capturados ({filtered.length})</CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nome ou e-mail..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-center text-gray-500 py-8">Carregando leads...</p>
            ) : filtered.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Nenhum lead encontrado.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>WhatsApp</TableHead>
                      <TableHead>Interesse</TableHead>
                      <TableHead>Criado em</TableHead>
                      <TableHead className="text-right">Acoes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{lead.whatsapp}</TableCell>
                        <TableCell>{lead.interest || '-'}</TableCell>
                        <TableCell className="text-sm text-gray-500">
                          {formatDate(lead.created)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setDeleteId(lead.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <AlertDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && !deleting && setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusao</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este lead? Esta acao nao pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault()
                handleDelete()
              }}
              disabled={deleting}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {deleting ? 'Excluindo...' : 'Excluir'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
