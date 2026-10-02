import { Link } from 'react-router-dom'
import { CheckCircle2, Home, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const WHATSAPP_URL = 'https://wa.me/5565981003969'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-lg shadow-xl border-gray-200 bg-white">
        <CardContent className="pt-10 pb-10 px-8 text-center">
          <div className="mx-auto mb-6 w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 text-sm font-semibold text-accent">
            <Sparkles size={16} />
            <span>Trajetória de Valor 5D</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 leading-tight tracking-tight">
            Conhecimento não solto{' '}
            <span className="text-accent relative inline-block">
              gera caixa.
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/30 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Recebemos suas informações e entraremos em contato em breve para iniciar sua
            transformação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 h-14 rounded-md text-base font-bold hover:bg-accent/90 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Falar agora pelo WhatsApp
            </a>
            <Link to="/" className="w-full sm:flex-1">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/5 px-6 h-14 text-base font-bold"
              >
                <Home className="mr-2 w-5 h-5" />
                Voltar ao início
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
