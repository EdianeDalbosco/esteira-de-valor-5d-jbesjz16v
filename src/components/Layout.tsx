import { Outlet, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import logoImage from '@/assets/logo-edvanced-17-7aa6b.png'
import { useAuth } from '@/hooks/use-auth'

const WHATSAPP_URL = 'https://wa.me/5565981003969'
const PHONE_DISPLAY = '(65) 98100 3969'
const ADDRESS_TEXT = 'Rua Deputado Roberto Cruz, 246, Bairro Alvorada, Cuiabá/MT'

export default function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex justify-center items-center">
          <nav className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollTo('metodo')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              Método 5D
            </button>
            <button
              onClick={() => scrollTo('dinamica')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              Dinâmica & Lab
            </button>
            <button
              onClick={() => scrollTo('entregaveis')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              14 Entregáveis
            </button>
            <button
              onClick={() => scrollTo('publico')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              Para Quem É
            </button>
            <button
              onClick={() => scrollTo('principios')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              Princípios
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className={cn(
                'text-sm font-semibold hover:text-accent transition-colors',
                scrolled ? 'text-gray-700' : 'text-white/90',
              )}
            >
              Contato
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-accent text-primary text-sm font-bold rounded hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/40 transform hover:-translate-y-0.5"
            >
              Garantir Vaga
            </a>
            {isAuthenticated && (
              <Link
                to="/admin/leads"
                className={cn(
                  'text-sm font-semibold hover:text-accent transition-colors ml-2',
                  scrolled ? 'text-gray-700' : 'text-white/90',
                )}
              >
                Dashboard
              </Link>
            )}
          </nav>

          <button
            className={cn('md:hidden', scrolled ? 'text-primary' : 'text-white')}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col py-2 border-t z-50 animate-fade-in-down">
            <button
              onClick={() => scrollTo('metodo')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              Método 5D
            </button>
            <button
              onClick={() => scrollTo('dinamica')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              Dinâmica & Formato (16 contatos)
            </button>
            <button
              onClick={() => scrollTo('entregaveis')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              14 Entregáveis Oficiais
            </button>
            <button
              onClick={() => scrollTo('principios')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              6 Princípios do 5D
            </button>
            <button
              onClick={() => scrollTo('publico')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              Para Quem É / Não É
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50"
            >
              Entre em Contato
            </button>
            {isAuthenticated && (
              <Link
                to="/admin/leads"
                className="px-6 py-4 text-left font-semibold text-primary hover:bg-gray-50 border-b border-gray-100"
              >
                Dashboard
              </Link>
            )}
            <div className="px-6 pt-4 pb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-accent text-primary font-bold rounded shadow-md"
              >
                Garantir Vaga
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <img
              src={logoImage}
              alt="EDVANCED Consultoria & Desenvolvimento"
              className="h-auto w-32 md:w-36 mb-4 object-contain"
            />
            <p className="text-xs uppercase tracking-wider font-bold text-accent mb-2">
              EDVANCED | Esteira de Valor 5D
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
              Programa de construção e implementação desenvolvido para transformar conhecimentos,
              experiências e soluções em uma esteira estratégica de produtos e serviços.
            </p>
            <p className="text-xs text-gray-500 italic max-w-sm border-l-2 border-accent/40 pl-3">
              "EDVANCED CONSULTORIA & DESENVOLVIMENTO — Da expertise à construção de uma jornada
              estratégica de valor."
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-bold mb-5 text-gray-200">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollTo('metodo')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  O Método 5D
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('dinamica')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Dinâmica & Formato
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('entregaveis')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  14 Entregáveis Oficiais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('principios')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Princípios do 5D
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('publico')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Para Quem É / Não É
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contato')}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Entre em Contato
                </button>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-bold text-gray-200 mb-2">Contato</h4>
            <a
              href={`tel:+5565981003969`}
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Phone size={18} className="text-accent shrink-0" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle size={18} className="text-accent shrink-0" />
              <span>WhatsApp</span>
            </a>
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>{ADDRESS_TEXT}</span>
            </div>
            <div className="pt-4">
              <h4 className="font-bold text-gray-200 mb-2 text-sm">Aviso Legal</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Os resultados compartilhados ou projetados dependem da execução individual,
                dedicação e diversos fatores externos. A Esteira de Valor 5D fornece a metodologia,
                arquitetura estratégica e direcionamento, mas não garante ganhos financeiros
                automáticos sem execução.
              </p>
            </div>
            <div className="flex gap-4 pt-3">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <p className="font-semibold text-gray-400">EDVANCED CONSULTORIA & DESENVOLVIMENTO</p>
            <p className="text-[11px] text-gray-500">
              EDVANCED | Esteira de Valor 5D — Do serviço solto à jornada estratégica de valor.
            </p>
          </div>
          <span>
            © {new Date().getFullYear()} EDVANCED • Esteira de Valor 5D • Ediane Dalbosco. Todos os
            direitos reservados.
          </span>
        </div>
      </footer>
    </div>
  )
}
