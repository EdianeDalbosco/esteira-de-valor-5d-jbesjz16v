import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ArrowLeft, RotateCcw, Trophy, TrendingUp, Sprout } from 'lucide-react'

interface QuizOption {
  text: string
  score: number
}

interface QuizQuestion {
  question: string
  options: QuizOption[]
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: 'Qual é o seu momento profissional atual?',
    options: [
      { text: 'Tenho emprego e busco transição de carreira', score: 1 },
      { text: 'Sou freelancer ou consultor independente', score: 2 },
      { text: 'Tenho negócio estabelecido e quero escalar', score: 3 },
      { text: 'Sou especialista mas ainda não vendi meu conhecimento', score: 1 },
    ],
  },
  {
    question: 'Qual é o seu maior desafio hoje?',
    options: [
      { text: 'Não sei precificar meu conhecimento', score: 1 },
      { text: 'Vendo horas e não consigo escalar', score: 2 },
      { text: 'Tenho método mas falta estrutura de vendas', score: 3 },
      { text: 'Preciso de autoridade e posicionamento', score: 2 },
    ],
  },
  {
    question: 'Qual sua meta de faturamento mensal com seu conhecimento?',
    options: [
      { text: 'R$ 5 mil a R$ 10 mil', score: 1 },
      { text: 'R$ 10 mil a R$ 30 mil', score: 2 },
      { text: 'R$ 30 mil a R$ 50 mil', score: 3 },
      { text: 'Acima de R$ 50 mil', score: 3 },
    ],
  },
  {
    question: 'Como você entrega seu conhecimento hoje?',
    options: [
      { text: 'Troco horas por dinheiro', score: 1 },
      { text: 'Tenho alguns serviços empacotados', score: 2 },
      { text: 'Já tenho um produto mas quero otimizar', score: 3 },
      { text: 'Ainda não comercializo meu conhecimento', score: 1 },
    ],
  },
]

interface QuizResult {
  title: string
  description: string
  interest: string
  icon: 'trophy' | 'trending' | 'sprout'
}

function calculateResult(score: number): QuizResult {
  if (score >= 9) {
    return {
      title: 'Perfil Premium — Pronto para Escala',
      description:
        'A Mentoria Trajetória de Valor 5D é perfeita para você! Você já tem a base, a experiência e o momentum certo. O que falta é o método estruturado para transformar tudo isso em uma oferta exclusiva de alto valor e alcançar 5 dígitos mensais com previsibilidade.',
      interest: 'Diagnóstico: Perfil Premium — Pronto para Escala',
      icon: 'trophy',
    }
  } else if (score >= 6) {
    return {
      title: 'Perfil em Ascensão — Alto Potencial',
      description:
        'Sua trajetória tem grande potencial! Você já deu os primeiros passos e tem conhecimento valioso. A Mentoria 5D vai te ajudar a estruturar, posicionar e escalar seu conhecimento para transformá-lo em um negócio rentável e previsível.',
      interest: 'Diagnóstico: Perfil em Ascensão — Alto Potencial',
      icon: 'trending',
    }
  }
  return {
    title: 'Perfil em Construção — Jornada Promissora',
    description:
      'Você está no início de uma transformação poderosa! A Mentoria 5D vai te dar a estrutura, o método e o direcionamento necessários para construir do zero um negócio de alto valor baseado no seu conhecimento.',
    interest: 'Diagnóstico: Perfil em Construção — Jornada Promissora',
    icon: 'sprout',
  }
}

const ICONS = { trophy: Trophy, trending: TrendingUp, sprout: Sprout }

export function DiagnosticQuiz({ onComplete }: { onComplete: (result: string) => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<QuizResult | null>(null)

  const progress = result ? 100 : ((currentStep + 1) / QUESTIONS.length) * 100

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const total = newAnswers.reduce((a, b) => a + b, 0)
      setResult(calculateResult(total))
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([])
    setResult(null)
  }

  const handleGoToForm = () => {
    if (result) {
      onComplete(result.interest)
      const el = document.getElementById('contato')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }

  if (result) {
    const Icon = ICONS[result.icon]
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-accent/20 bg-white animate-fade-in-up">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
            <Icon className="w-10 h-10 text-accent" />
          </div>
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Resultado do Diagnóstico
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            {result.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            {result.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoToForm}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-base font-bold py-6 px-8"
            >
              Quero começar minha transformação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleRestart}
              variant="outline"
              size="lg"
              className="text-base font-semibold py-6 px-8"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Refazer
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = QUESTIONS[currentStep]

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-gray-200 bg-white animate-fade-in">
      <CardContent className="p-8 md:p-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-accent tracking-widest uppercase">
            Pergunta {currentStep + 1} de {QUESTIONS.length}
          </span>
          <span className="text-sm text-gray-400 font-medium">
            {Math.round(progress)}% completo
          </span>
        </div>
        <Progress value={progress} className="h-2 mb-8 [&>div]:bg-accent" />

        <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 leading-tight">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.score)}
              className="w-full text-left p-4 md:p-5 rounded-xl border-2 border-gray-100 hover:border-accent hover:bg-accent/5 transition-all duration-200 group flex items-center justify-between"
            >
              <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-primary pr-4">
                {option.text}
              </span>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="mt-6 text-sm text-gray-400 hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        )}
      </CardContent>
    </Card>
  )
}
