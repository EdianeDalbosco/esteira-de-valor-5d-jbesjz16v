import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { createLead } from '@/services/leads'
import { extractFieldErrors, type FieldErrors } from '@/lib/pocketbase/errors'

const WHATSAPP_URL = 'https://wa.me/5565981003969'

export function LeadForm({ diagnosticResult }: { diagnosticResult?: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const { toast } = useToast()
  const navigate = useNavigate()

  const validate = (): boolean => {
    const errors: FieldErrors = {}
    if (!name.trim() || name.trim().length < 2) {
      errors.name = 'Por favor, informe seu nome completo.'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      errors.email = 'Por favor, informe seu e-mail.'
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Por favor, informe um e-mail válido.'
    }
    if (!whatsapp.trim() || whatsapp.trim().length < 8) {
      errors.whatsapp = 'Por favor, informe seu WhatsApp.'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFieldErrors({})
    if (!validate()) return

    setLoading(true)
    try {
      await createLead({
        name: name.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
        message: message.trim(),
        interest: diagnosticResult || 'Programa Esteira de Valor 5D',
      })
      setName('')
      setEmail('')
      setWhatsapp('')
      setMessage('')
      navigate('/thank-you')
    } catch (err) {
      try {
        const errors = extractFieldErrors(err)
        if (Object.keys(errors).length > 0) {
          setFieldErrors(errors)
        }
      } catch {
        /* intentionally ignored */
      }
      try {
        toast({
          title: 'Erro ao enviar',
          description:
            'Não foi possível enviar seus dados. Tente novamente ou fale conosco pelo WhatsApp.',
          variant: 'destructive',
        })
      } catch {
        /* intentionally ignored */
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto shadow-xl border-gray-200 bg-white">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
          Construa sua Esteira de Valor 5D
        </CardTitle>
        <CardDescription className="text-gray-600 text-base">
          Preencha seus dados para receber o contato da nossa equipe estratégica e dar o próximo
          passo no seu negócio.
        </CardDescription>
        {diagnosticResult && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
            <CheckCircle2 className="w-4 h-4" />
            {diagnosticResult.replace('Diagnóstico: ', '')}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-2">
            <Label htmlFor="lead-name" className="text-sm font-semibold text-gray-700">
              Nome Completo
            </Label>
            <Input
              id="lead-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              disabled={loading}
              aria-invalid={!!fieldErrors.name}
            />
            {fieldErrors.name && <p className="text-sm text-red-500">{fieldErrors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-email" className="text-sm font-semibold text-gray-700">
              E-mail
            </Label>
            <Input
              id="lead-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              disabled={loading}
              aria-invalid={!!fieldErrors.email}
            />
            {fieldErrors.email && <p className="text-sm text-red-500">{fieldErrors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-whatsapp" className="text-sm font-semibold text-gray-700">
              WhatsApp
            </Label>
            <Input
              id="lead-whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="(00) 00000-0000"
              disabled={loading}
              aria-invalid={!!fieldErrors.whatsapp}
            />
            {fieldErrors.whatsapp && <p className="text-sm text-red-500">{fieldErrors.whatsapp}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-message" className="text-sm font-semibold text-gray-700">
              Mensagem <span className="text-gray-400 font-normal">(opcional)</span>
            </Label>
            <Textarea
              id="lead-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Como podemos ajudar?"
              disabled={loading}
              rows={4}
              maxLength={2000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 h-14 bg-primary text-white hover:bg-primary/90 text-base font-bold w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Contato
                </>
              )}
            </Button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-14 inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 rounded-md text-base font-bold hover:bg-accent/90 transition-all hover:scale-[1.02] w-full sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
