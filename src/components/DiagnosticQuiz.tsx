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
    question: 'Como você comercializa seus serviços e conhecimento hoje?',
    options: [
      { text: 'Vendo serviços pontuais ou cobro por horas/execução', score: 1 },
      { text: 'Crio produtos e soluções conforme surgem oportunidades', score: 2 },
      { text: 'Tenho várias ofertas, mas elas não conversam entre si', score: 2 },
      { text: 'Tenho clientes que compram, mas não sei qual deve ser a próxima oferta', score: 3 },
    ],
  },
  {
    question: 'Qual é o maior gargalo comercial do seu negócio atualmente?',
    options: [
      { text: 'Preciso conquistar um novo cliente a cada venda (ciclo do zero)', score: 1 },
      { text: 'Dificuldade para estruturar método, escopo e entregáveis claros', score: 2 },
      { text: 'Falta uma oferta premium de maior profundidade e proximidade', score: 3 },
      {
        text: 'Entrego muito valor, mas capturo pouco e dependo da minha presença física',
        score: 2,
      },
    ],
  },
  {
    question: 'Como está desenhada a jornada do seu cliente hoje?',
    options: [
      { text: 'Não existe jornada: o cliente compra uma vez e a relação acaba', score: 1 },
      {
        text: 'Tenho uma solução principal, mas nenhuma oferta de entrada ou continuidade',
        score: 2,
      },
      { text: 'Gostaria de ter esteira com entrada, principal, recorrência e premium', score: 3 },
      {
        text: 'Já tenho catálogo amplo de produtos, mas falta arquitetura estratégica de valor',
        score: 3,
      },
    ],
  },
  {
    question: 'Qual é o seu objetivo prioritário nos próximos meses?',
    options: [
      {
        text: 'Parar de vender serviço solto e organizar minha expertise em ofertas claras',
        score: 1,
      },
      {
        text: 'Criar uma jornada lógica que conduza da primeira compra à oferta premium',
        score: 3,
      },
      { text: 'Aumentar recorrência, previsibilidade e recompra no meu ecossistema', score: 2 },
      { text: 'Implementar a metodologia 5D e colocar minha esteira no mercado', score: 3 },
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
      title: 'Pronto para a Arquitetura da Esteira Completa',
      description:
        'Você já tem ativos valiosos, serviços consolidados e capacidade de entrega. O seu grande salto está na arquitetura estratégica: conectar suas soluções em uma esteira lógica (Entrada → Solução Principal → Recorrência → Premium → Continuidade), gerando maior LTV e retenção.',
      interest: 'Diagnóstico: Pronto para Esteira Completa (Entrada à Premium)',
      icon: 'trophy',
    }
  } else if (score >= 6) {
    return {
      title: 'Momento de Transição: Do Serviço Solto à Esteira',
      description:
        'Você gera valor e tem expertise real, mas ainda opera no ciclo cansativo de vender e recomeçar do zero. O Esteira de Valor 5D vai desenhar a jornada ideal para que cada cliente avance naturalmente pelas suas soluções.',
      interest: 'Diagnóstico: Transição do Serviço Solto à Esteira Estruturada',
      icon: 'trending',
    }
  }
  return {
    title: 'Fase de Diagnóstico e Estruturação de Ativos',
    description:
      'Você tem conhecimento e capacidade de entrega, mas precisa mapear seus ativos de valor e empacotar soluções claras antes de tentar vender mais. O Método 5D vai guiar você passo a passo na estruturação da sua primeira esteira.',
    interest: 'Diagnóstico: Estruturação Inicial de Ativos de Valor',
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
              Quero construir minha Esteira de Valor
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
