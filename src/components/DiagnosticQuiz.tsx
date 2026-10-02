import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
  TrendingUp,
  Sprout,
  Gift,
  Magnet,
  ShoppingBag,
  Target,
  Repeat,
  Crown,
  FastForward,
  Sparkles,
} from 'lucide-react'

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

const VALUE_LAYERS = [
  {
    step: '01',
    name: 'ATRAÇÃO',
    role: 'Porta de Entrada Gratuita',
    desc: 'Conteúdo estratégico, diagnóstico ou material de alto valor que atrai o público certo.',
    icon: Magnet,
    badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
  },
  {
    step: '02',
    name: 'ENTRADA',
    role: 'Primeira Experiência Paga',
    desc: 'Solução de baixo risco financeiro que quebra a barreira da compra e transforma leads em clientes.',
    icon: ShoppingBag,
    badgeBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  },
  {
    step: '03',
    name: 'SOLUÇÃO PRINCIPAL',
    role: 'Carro-Chefe de Transformação',
    desc: 'O produto ou serviço responsável pela principal transformação e pelo coração financeiro do negócio.',
    icon: Target,
    badgeBg: 'bg-accent/10 text-accent border-accent/20',
  },
  {
    step: '04',
    name: 'RECORRÊNCIA',
    role: 'Acompanhamento & Manutenção',
    desc: 'Acompanhamento contínuo que assegura previsibilidade mensal de receita e evolução do cliente.',
    icon: Repeat,
    badgeBg: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
  },
  {
    step: '05',
    name: 'PREMIUM',
    role: 'Alta Margem & Proximidade',
    desc: 'Oferta com profundidade máxima, proximidade ou mentoria exclusiva para os clientes mais qualificados.',
    icon: Crown,
    badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
  },
  {
    step: '06',
    name: 'CONTINUIDADE',
    role: 'Próximo Ciclo de Crescimento',
    desc: 'O próximo estágio de evolução para clientes que concluíram fases anteriores e continuam com você.',
    icon: FastForward,
    badgeBg: 'bg-purple-500/10 text-purple-600 border-purple-200',
  },
]

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
      <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in-up">
        <Card className="shadow-2xl border-accent/20 bg-white">
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

            {/* BLOCO DE PRESENTE: ARQUITETURA DA ESTEIRA DE VALOR */}
            <div className="mt-8 pt-8 border-t border-gray-100 text-left bg-gradient-to-b from-amber-50/60 via-amber-50/30 to-transparent rounded-2xl p-6 md:p-8 border border-amber-200/70">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider">
                  <Gift className="w-3.5 h-3.5" />
                  Seu Presente Exclusivo
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Por responder ao diagnóstico
                </span>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-primary mb-2">
                A Estratégia da Arquitetura de Valor
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Como agradecimento pelo seu tempo, liberamos o mapa estratégico das{' '}
                <strong className="text-primary font-semibold">6 camadas essenciais</strong> da
                Esteira de Valor 5D — a mesma lógica que estrutura negócios para parar de vender
                serviço avulso e construir um ecossistema com múltiplos pontos de monetização:
              </p>

              {/* Grid compacto das 6 camadas */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {VALUE_LAYERS.map((layer) => {
                  const LayerIcon = layer.icon
                  return (
                    <div
                      key={layer.step}
                      className="bg-white rounded-xl p-4 border border-gray-200/90 shadow-sm hover:border-accent/60 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black tracking-wider text-gray-400">
                            CAMADA {layer.step}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                            <LayerIcon className="w-4 h-4 text-accent" />
                          </div>
                        </div>
                        <h5 className="text-sm font-bold text-primary mb-1">{layer.name}</h5>
                        <span className="text-[11px] font-semibold text-accent block mb-2 leading-snug">
                          {layer.role}
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white border border-amber-200/80 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-gray-600">
                  💡 <strong className="text-primary">Próximo passo:</strong> Podemos aplicar essa
                  arquitetura de forma personalizada ao seu negócio e às suas ofertas.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={handleGoToForm}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-base font-bold py-6 px-8 shadow-lg shadow-primary/20"
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
                Refazer diagnóstico
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
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
