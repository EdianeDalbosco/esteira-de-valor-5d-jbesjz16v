import { useState, useEffect } from 'react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { LeadForm } from '@/components/LeadForm'
import { DiagnosticQuiz } from '@/components/DiagnosticQuiz'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Search,
  Target,
  Compass,
  Boxes,
  Rocket,
  Sparkles,
  AlertTriangle,
  ArrowDown,
  Layers,
  TrendingUp,
  FileCheck2,
  ShieldAlert,
  Check,
  Quote,
  Lightbulb,
  ArrowRightLeft,
  ChevronRight,
  ChevronDown,
  ClipboardCheck,
} from 'lucide-react'
import mentorImage from '@/assets/as-portas-estao-1-21a63.png'
import heroPhoto from '@/assets/img7990-74f78.jpg'

import { WHATSAPP_LINK, WHATSAPP_MESSAGES } from '@/lib/constants'

const SITE_TITLE =
  'EDVANCED | Esteira de Valor 5D — Do serviço solto à jornada estratégica de valor'

const MAIN_PAINS = [
  {
    title: 'Vende serviços isolados',
    desc: 'Comercializa apenas o que o cliente pede, sem uma continuidade formatada.',
  },
  {
    title: 'Novo cliente a cada venda',
    desc: 'Todo mês precisa começar do zero para fechar a conta do faturamento.',
  },
  {
    title: 'Ofertas sem conexão lógica',
    desc: 'Várias opções no portfólio, mas nenhuma conduz naturalmente à próxima compra.',
  },
  {
    title: 'Preço ancorado em horas',
    desc: 'Entrega muito resultado, mas fatura com base no tempo e na presença física.',
  },
]

const OTHER_PAINS = [
  {
    title: 'Cria produtos por oportunidade',
    desc: 'Lança ofertas conforme surgem ideias, sem alinhamento com a arquitetura do negócio.',
  },
  {
    title: 'Não sabe qual é o produto principal',
    desc: 'Falta definição clara do que é carro-chefe e qual oferta gera maior impacto.',
  },
  {
    title: 'Sem jornada clara para o cliente',
    desc: 'Não existe um caminho lógico para o cliente subir de nível dentro da empresa.',
  },
  {
    title: 'Perde oportunidades de recorrência',
    desc: 'Clientes satisfeitos vão embora porque não encontram uma oferta de continuidade.',
  },
  {
    title: 'Dificuldade em ofertas premium',
    desc: 'Insegurança para desenhar e precificar soluções exclusivas de alto valor agregado.',
  },
  {
    title: 'Conhecimento não empacotado',
    desc: 'Muita experiência acumulada na mente, mas dificuldade de formatar em método.',
  },
  {
    title: 'Escopo e entregáveis confusos',
    desc: 'Falta clareza nos limites do escopo, gerando desgaste na entrega ao cliente.',
  },
  {
    title: 'Entrega muito e captura pouco valor',
    desc: 'Gera transformações gigantescas para o comprador com remuneração desproporcional.',
  },
  {
    title: 'Dependência da própria presença',
    desc: 'O faturamento trava porque tudo exige a presença física e o tempo direto do especialista.',
  },
  {
    title: 'Crescer sem dobrar carga horária',
    desc: 'Sensação de que aumentar o faturamento exigirá trabalhar até a exaustão.',
  },
  {
    title: 'Recompra travada',
    desc: 'Clientes que poderiam comprar novamente saem sem a próxima oferta estruturada.',
  },
]

export default function Index() {
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null)
  const [showAllPains, setShowAllPains] = useState(false)

  useEffect(() => {
    document.title = SITE_TITLE
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="overflow-hidden bg-background">
      {/* 1. HERO SECTION — LEVE, ESCANEÁVEL E FOCADO EM CONVERSÃO */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24"
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.usecurling.com/p/1920/1080?q=modern%20corporate%20boardroom%20strategy&color=black&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85 z-10" />
        </div>

        <div className="container mx-auto px-4 z-20 relative text-white">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="flex-1 max-w-3xl w-full">
              {/* Promessa Curta / Chip */}
              <ScrollReveal animation="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-xs md:text-sm tracking-wide uppercase mb-5 backdrop-blur-md">
                  <Sparkles size={14} className="shrink-0" />
                  <span>Do serviço solto à Esteira de Valor</span>
                </div>
              </ScrollReveal>

              {/* Headline Provocativa & Direta */}
              <ScrollReveal animation="animate-fade-in-up" delay={100}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] mb-5 tracking-tight text-white">
                  Seu problema não é ter poucos produtos.{' '}
                  <span className="text-accent">
                    É não ter uma esteira que conecte o que você vende.
                  </span>
                </h1>
              </ScrollReveal>

              {/* Frase Curta de Apoio */}
              <ScrollReveal animation="animate-fade-in-up" delay={150}>
                <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed max-w-2xl font-normal">
                  Através do <strong className="text-white font-semibold">Método 5D</strong>,
                  transforme sua expertise em ofertas organizadas e conectadas que conduzem seu
                  cliente da primeira compra à solução premium.
                </p>
              </ScrollReveal>

              {/* 3 Bullets / Chips Resumindo o Benefício */}
              <ScrollReveal animation="animate-fade-in-up" delay={200}>
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-gray-100 backdrop-blur-sm">
                    <CheckCircle2 size={15} className="text-accent shrink-0" />
                    Ecossistema conectado
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-gray-100 backdrop-blur-sm">
                    <CheckCircle2 size={15} className="text-accent shrink-0" />
                    Fim do ciclo do zero
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-gray-100 backdrop-blur-sm">
                    <CheckCircle2 size={15} className="text-accent shrink-0" />
                    Ofertas de alta margem
                  </span>
                </div>
              </ScrollReveal>

              {/* CTAs Principais */}
              <ScrollReveal animation="animate-fade-in-up" delay={250}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => scrollTo('contato')}
                    className="inline-flex items-center justify-center gap-2.5 bg-accent text-primary px-7 py-4 rounded-xl text-base font-bold hover:bg-accent/90 transition-all hover:scale-[1.02] shadow-[0_0_35px_-8px_rgba(212,175,55,0.45)] group w-full sm:w-auto text-center"
                  >
                    Construir Minha Esteira de Valor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                  <button
                    onClick={() => scrollTo('diagnostico')}
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-5 py-4 rounded-xl text-base font-semibold transition-all w-full sm:w-auto"
                  >
                    <ClipboardCheck size={18} className="text-accent shrink-0" />
                    Fazer Diagnóstico Gratuito
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Imagem / Card Visual */}
            <div className="flex justify-center lg:justify-end items-center lg:w-2/5 mt-4 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-3 translate-y-3 opacity-30 blur-sm"></div>
                <img
                  src={heroPhoto}
                  alt="Ediane Dalbosco, Estrategista de Negócios e Criadora do Método Esteira de Valor 5D"
                  className="relative z-10 w-60 md:w-72 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                />
                <div className="absolute -bottom-4 -left-4 z-20 bg-primary/95 border border-accent/40 text-white p-3.5 rounded-xl shadow-xl backdrop-blur-md max-w-[240px]">
                  <p className="text-[11px] text-accent font-bold uppercase tracking-wider mb-0.5">
                    Resultado Central
                  </p>
                  <p className="text-xs font-medium leading-snug text-gray-200">
                    Transforme conhecimentos soltos em um ecossistema inteligente de ofertas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-accent transition-colors animate-bounce cursor-pointer"
          onClick={() => scrollTo('conceito')}
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={24} />
        </div>
      </section>

      {/* 2. CONCEITO DO PROGRAMA — CONDENSADO E DIRETO */}
      <section id="conceito" className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
                  EDVANCED | Programa Oficial de Construção e Implementação
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                  Mais do que criar novos produtos: organizar sua expertise em uma{' '}
                  <span className="text-accent">arquitetura de valor</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  O <strong>Esteira de Valor 5D</strong> é um programa de construção e implementação
                  desenvolvido para{' '}
                  <strong>
                    empreendedores, especialistas, consultores, mentores, profissionais liberais e
                    prestadores de serviços
                  </strong>{' '}
                  que desejam transformar seus conhecimentos, experiências e soluções em uma esteira
                  estratégica de produtos e serviços.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mx-auto mb-3 font-bold text-base">
                    1
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-1.5">
                    Organizar o Conhecimento
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Mapeie competências e serviços existentes em ativos comerciais claros.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mx-auto mb-3 font-bold text-base">
                    2
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-1.5">Conectar as Ofertas</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Crie uma jornada lógica onde cada solução conduz naturalmente à próxima.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 text-center">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mx-auto mb-3 font-bold text-base">
                    3
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-1.5">Destravar a Recorrência</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    O cliente deixa de comprar pontualmente e entra em um ecossistema contínuo.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-accent p-5 rounded-r-2xl">
                <p className="text-primary font-semibold text-sm sm:text-base leading-relaxed">
                  "O cliente deixa de comprar apenas uma solução pontual e passa a percorrer uma
                  jornada lógica dentro do ecossistema do seu negócio."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. A DOR — CONDENSADA: SINTOMAS PRINCIPAIS + DOR CENTRAL + EXPANSÃO OPCIONAL */}
      <section id="dores" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
                O Cenário Real
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                Você entrega excelentes resultados, mas suas ofertas estão{' '}
                <span className="text-red-500">soltas</span> no mercado?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Ter alto conhecimento técnico sem uma arquitetura comercial gera desgaste
                operacional e faturamento imprevisível.
              </p>
            </div>
          </ScrollReveal>

          {/* Dores Principais em 4 Cards Compactos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6">
            {MAIN_PAINS.map((pain, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm hover:border-red-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-3">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-1.5">{pain.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{pain.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Dores Complementares (Colapsáveis para não poluir o topo) */}
          <div className="max-w-5xl mx-auto text-center mb-10">
            {showAllPains && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-left animate-fade-in">
                {OTHER_PAINS.map((pain, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-700 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <strong className="text-primary text-sm">{pain.title}</strong>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-5">{pain.desc}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => setShowAllPains(!showAllPains)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors px-4 py-2 rounded-lg border border-gray-300 hover:border-accent bg-white shadow-xs"
            >
              <span>{showAllPains ? 'Ocultar outros sintomas' : 'Ver outros sintomas comuns'}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showAllPains ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Dor Central Highlight Box — Compacta e de Forte Impacto */}
          <ScrollReveal delay={150} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-[#18233C] text-white p-6 sm:p-8 rounded-2xl border border-accent/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-2.5 rounded-xl text-accent shrink-0">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-accent text-[11px] sm:text-xs font-bold tracking-widest uppercase block mb-1">
                    A Dor Central Resumida
                  </span>
                  <blockquote className="text-base sm:text-xl font-semibold leading-snug italic text-white mb-2">
                    "Tenho conhecimento, produtos e serviços, mas ainda não transformei tudo isso em
                    uma estrutura comercial estratégica."
                  </blockquote>
                  <p className="text-xs sm:text-sm text-gray-300 italic">
                    "Meu negócio possui várias ofertas, mas não existe uma estratégia que faça o
                    cliente continuar comprando."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. A TRANSFORMAÇÃO (ANTES X DEPOIS) — CONDENSADA */}
      <section id="transformacao" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
                  A Virada de Chave
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3">
                  A Grande Transformação: do ciclo cansativo ao{' '}
                  <span className="text-accent">ecossistema de valor</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  A diferença radical de operar com uma arquitetura comercial estruturada:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* ANTES */}
              <ScrollReveal
                animation="animate-fade-in-right"
                className="bg-gray-50 border-2 border-red-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[11px] font-bold uppercase tracking-wider mb-4">
                    <XCircle className="w-3.5 h-3.5" />
                    Como funciona hoje (Antes)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                    O ciclo recomeça do zero a cada cliente
                  </h3>

                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 mb-5 font-mono text-xs text-gray-700 leading-relaxed shadow-inner">
                    Conhecimento <span className="text-red-500 font-bold">→</span> Criação de um
                    serviço <span className="text-red-500 font-bold">→</span> Venda{' '}
                    <span className="text-red-500 font-bold">→</span> Entrega{' '}
                    <span className="text-red-500 font-bold">→</span> Encerramento{' '}
                    <span className="text-red-500 font-bold">→</span> Busca por outro cliente
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2.5 text-gray-600 text-xs sm:text-sm">
                    {[
                      'serviços desconectados',
                      'excesso de personalização',
                      'várias ideias sem direção',
                      'dificuldade para definir prioridades',
                      'dependência da própria hora',
                      'baixa recorrência',
                      'clientes que finalizam e saem',
                      'dificuldade para desenvolver uma oferta premium',
                      'pouca clareza de posicionamento',
                      'precificação baseada predominantemente em execução',
                      'necessidade constante de conquistar novos clientes',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="capitalize">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 italic">
                  O empreendedor pensa apenas: <em>"O que mais eu posso vender?"</em> gerando
                  constante recomeço do zero.
                </div>
              </ScrollReveal>

              {/* DEPOIS */}
              <ScrollReveal
                animation="animate-fade-in-left"
                className="bg-primary text-white border-2 border-accent/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-primary text-[11px] font-bold uppercase tracking-wider mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Com o Esteira de Valor 5D (Depois)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Uma jornada estratégica de valor
                  </h3>

                  <div className="bg-[#18233C] p-3.5 rounded-xl border border-accent/30 mb-5 font-mono text-xs text-accent leading-relaxed shadow-inner font-semibold">
                    Posicionamento → Atração → Oferta de Entrada → Solução Principal → Recorrência →
                    Premium → Continuidade
                  </div>

                  <div className="bg-accent/10 border border-accent/30 p-3.5 rounded-xl mb-4 text-xs font-semibold text-accent leading-relaxed">
                    Posicionamento claro + Proposta de valor + Portfólio estratégico + Produtos
                    estruturados + Jornada do cliente + Recorrência + Oferta premium + Plano de
                    execução ={' '}
                    <span className="underline uppercase font-extrabold text-white">
                      ESTEIRA DE VALOR
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 font-normal">
                    O empreendedor deixa de pensar "o que mais vender" e passa a conduzir
                    estrategicamente:
                    <strong className="text-white block mt-1">
                      "Qual é a próxima transformação que o meu cliente precisa?"
                    </strong>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-accent font-medium">
                  Frase central: "A principal transformação é sair de serviços soltos para uma
                  jornada estratégica de soluções."
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESULTADO FINAL */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                  Clareza Total
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  O que você terá ao final do processo
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Você sai com o negócio destravado comercialmente e pronto para operar:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Clareza absoluta sobre o que vende e para quem vende',
                'Definição da transformação exata que entrega em cada etapa',
                'Proposta de valor diferenciada no mercado',
                'Oferta de entrada de baixo risco para atrair clientes qualificados',
                'Solução principal estruturada como carro-chefe',
                'Soluções inteligentes de acompanhamento e recorrência',
                'Oferta premium com alta margem e personalização',
                'Conexão lógica entre todas as suas soluções',
                'Jornada clara de evolução do cliente dentro do negócio',
                'Comunicação e pitch comercial de cada oferta',
                'Estratégia de precificação com ancoragem e pacotes',
                'Apresentação comercial e argumentos de venda',
                'Decisão de quais produtos permanecem, são reposicionados, criados ou eliminados',
                'Plano prático para colocar a nova esteira no mercado',
                'Segurança para escalar sem depender só da sua hora',
              ].map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  delay={(idx % 3) * 80}
                  className="bg-white p-5 rounded-xl border border-gray-200/70 shadow-sm flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MÉTODO 5D — AS 5 ETAPAS EM SEQUÊNCIA COM PERGUNTAS E ENTREGAS */}
      <section
        id="metodo"
        className="py-24 md:py-32 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=architectural%20blueprint%20dark&color=black')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Metodologia Proprietária
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                O Método <span className="text-accent">5D</span>
              </h2>
              <div className="bg-accent/15 border border-accent/40 rounded-2xl p-4 my-4 max-w-2xl mx-auto backdrop-blur-sm">
                <span className="text-[11px] uppercase tracking-wider font-bold text-accent block mb-1">
                  Frase Oficial do Método
                </span>
                <p className="text-base sm:text-lg md:text-xl text-white font-extrabold leading-snug">
                  "Diagnostique o potencial. Direcione o valor. Desenhe a estratégia. Desenvolva as
                  ofertas. Decole para o mercado."
                </p>
              </div>
              <p className="text-base text-gray-300 font-light max-w-2xl mx-auto">
                Cinco grandes decisões encadeadas onde cada uma responde a uma pergunta central e
                gera entregas práticas para a arquitetura comercial do seu negócio.
              </p>
            </div>
          </ScrollReveal>

          {/* 8. Resumo Visual (Fluxo com setas) */}
          <ScrollReveal delay={150}>
            <div className="mb-16 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-5xl mx-auto overflow-x-auto">
              <div className="flex items-center justify-between min-w-[700px] gap-2">
                {[
                  { step: '1º D', name: 'DIAGNÓSTICO', sub: 'Descubra o que tem' },
                  { step: '2º D', name: 'DIRECIONAMENTO', sub: 'Defina para quem' },
                  { step: '3º D', name: 'DESENHO', sub: 'Construa a esteira' },
                  { step: '4º D', name: 'DESENVOLVIMENTO', sub: 'Transforme em ofertas' },
                  { step: '5º D', name: 'DECOLAGEM', sub: 'Coloque em movimento' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 flex-1">
                    <div className="flex-1 bg-[#1A233A] p-3 rounded-xl border border-accent/20 text-center">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                        {item.step}
                      </span>
                      <p className="font-bold text-sm text-white">{item.name}</p>
                      <p className="text-[11px] text-gray-300 truncate">{item.sub}</p>
                    </div>
                    {idx < 4 && <ChevronRight className="w-5 h-5 text-accent/60 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* As 5 Etapas Detalhadas */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* 1º D — DIAGNÓSTICO */}
            <ScrollReveal className="bg-[#141D30] border-2 border-white/10 rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex lg:flex-col items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-black text-2xl shadow-lg">
                    1D
                  </div>
                  <div className="text-accent/60 group-hover:text-accent transition-colors">
                    <Search className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      1º D — DIAGNÓSTICO
                    </span>
                    <span className="text-base font-semibold text-gray-300">
                      "Descobrir o valor"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Investigação profunda dos ativos, da expertise e das oportunidades
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                    Antes de criar novas soluções, o empreendedor precisa compreender os ativos que
                    já possui. O Diagnóstico investiga o negócio atual, a expertise acumulada e as
                    oportunidades ainda não transformadas em produtos ou receita.
                  </p>

                  {/* Itens investigados */}
                  <div className="mb-6 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2.5">
                      Itens investigados nesta etapa:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Conhecimentos,
                        experiências, competências e formações
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Vivências,
                        metodologias e processos
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Produtos e
                        serviços atuais
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Materiais já
                        produzidos e resultados já gerados
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Principais
                        solicitações dos clientes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Problemas que
                        o profissional sabe resolver
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Soluções com
                        maior demanda ou melhor margem
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Serviços com
                        alto esforço e baixa rentabilidade
                      </span>
                      <span className="flex items-center gap-1.5 sm:col-span-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Oportunidades
                        ainda não exploradas
                      </span>
                    </div>
                  </div>

                  {/* As Quatro Lentes de Análise */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                      Quatro Lentes de Análise do 1º D:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="bg-[#1B2640] p-3.5 rounded-xl border border-white/5">
                        <span className="text-xs font-bold text-white block mb-0.5">🔍 Valor</span>
                        <p className="text-xs text-gray-300">
                          Quanto valor essa solução gera ou pode gerar?
                        </p>
                      </div>
                      <div className="bg-[#1B2640] p-3.5 rounded-xl border border-white/5">
                        <span className="text-xs font-bold text-white block mb-0.5">
                          ⚡ Esforço
                        </span>
                        <p className="text-xs text-gray-300">
                          Quanto tempo, energia e estrutura ela exige?
                        </p>
                      </div>
                      <div className="bg-[#1B2640] p-3.5 rounded-xl border border-white/5">
                        <span className="text-xs font-bold text-white block mb-0.5">
                          💰 Rentabilidade
                        </span>
                        <p className="text-xs text-gray-300">Ela possui viabilidade financeira?</p>
                      </div>
                      <div className="bg-[#1B2640] p-3.5 rounded-xl border border-white/5">
                        <span className="text-xs font-bold text-white block mb-0.5">
                          📈 Potencial
                        </span>
                        <p className="text-xs text-gray-300">
                          Existe possibilidade de recorrência, escala, reposicionamento ou evolução?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl mb-6 text-xs text-accent">
                    <strong>Decisões ao final do 1º D:</strong> Clareza absoluta sobre o que manter,
                    reposicionar, potencializar, transformar, eliminar e criar.
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "O que existe hoje no meu conhecimento e no meu negócio que pode ser
                        transformado em valor?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Principal Entrega:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Mapa de Ativos de Valor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2º D — DIRECIONAMENTO */}
            <ScrollReveal className="bg-[#141D30] border-2 border-white/10 rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex lg:flex-col items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-black text-2xl shadow-lg">
                    2D
                  </div>
                  <div className="text-accent/60 group-hover:text-accent transition-colors">
                    <Compass className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      2º D — DIRECIONAMENTO
                    </span>
                    <span className="text-base font-semibold text-gray-300">
                      "Definir onde gerar valor"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Conhecimento sem direcionamento tende a gerar produtos genéricos
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                    Nesta etapa, definimos o território estratégico do negócio para evitar a
                    armadilha de criar soluções genéricas que competem por preço.
                  </p>

                  <div className="mb-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2.5">
                      Território estratégico definido:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Público
                        prioritário e cliente ideal
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Situação
                        atual, dores, necessidades e desejos
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Problema
                        central e transformação desejada
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Resultado
                        esperado e diferenciais
                      </span>
                      <span className="flex items-center gap-1.5 sm:col-span-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" /> Posicionamento
                        e proposta central de valor
                      </span>
                    </div>
                  </div>

                  {/* Fórmula Destacável */}
                  <div className="mb-6 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border-l-4 border-accent p-4 rounded-r-2xl">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-accent block mb-1">
                      Fórmula Estratégica Oficial:
                    </span>
                    <p className="text-sm md:text-base font-mono font-bold text-white">
                      PÚBLICO + PROBLEMA + TRANSFORMAÇÃO + DIFERENCIAL = PROPOSTA DE VALOR
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Para quem eu gero mais valor e por que essa pessoa deveria escolher minha
                        solução?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entregas da Etapa:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Mapa do Cliente Estratégico + Posicionamento + Proposta Central de Valor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3º D — DESENHO */}
            <ScrollReveal className="bg-[#141D30] border-2 border-white/10 rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex lg:flex-col items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-black text-2xl shadow-lg">
                    3D
                  </div>
                  <div className="text-accent/60 group-hover:text-accent transition-colors">
                    <Layers className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      3º D — DESENHO
                    </span>
                    <span className="text-base font-semibold text-gray-300">
                      "Arquitetar a Esteira de Valor"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Deixar de olhar cada produto isoladamente para observar o papel de cada um na
                    jornada
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                    Depois de compreender o valor existente e definir onde queremos gerar
                    transformação, construímos a arquitetura das ofertas. Nesta etapa, deixamos de
                    olhar para cada produto isoladamente e passamos a observar qual papel cada
                    solução exerce dentro da jornada.
                  </p>

                  {/* As 6 Camadas da Esteira em lista limpa e discreta */}
                  <div className="mb-6 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                      As 6 Camadas da Esteira de Valor:
                    </p>
                    <div className="space-y-2.5 text-xs text-gray-200">
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">1. Atração:</strong> Primeiro contato com o
                        universo da marca por conteúdo, diagnóstico, evento, ferramenta ou
                        experiência.
                      </div>
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">2. Entrada:</strong> Primeira experiência
                        comercial, reduzindo a barreira para conhecer a solução.
                      </div>
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">3. Solução Principal:</strong> Oferta
                        responsável pela principal transformação do negócio; o core da esteira.
                      </div>
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">4. Recorrência:</strong> Acompanhamento,
                        manutenção, suporte, desenvolvimento ou evolução continuada.
                      </div>
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">5. Premium:</strong> Oferta de maior
                        profundidade, personalização, proximidade ou impacto estratégico.
                      </div>
                      <div className="border-l-2 border-accent/60 pl-3">
                        <strong className="text-white">6. Continuidade:</strong> Próximo ciclo da
                        jornada para que o cliente continue evoluindo dentro do ecossistema.
                      </div>
                    </div>
                  </div>

                  <blockquote className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-2xl text-xs md:text-sm text-gray-200 italic mb-5">
                    "Não criamos produtos para preencher espaços. Criamos soluções quando existe uma
                    necessidade legítima na jornada do cliente."
                  </blockquote>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    <strong className="text-white">Para cada oferta são definidos:</strong> função
                    estratégica, público, problema atendido, transformação, momento da jornada,
                    ticket, forma de entrega, relação com o produto anterior e próxima solução
                    possível.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Qual é a jornada mais inteligente para conduzir meu cliente dentro do meu
                        negócio?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Principal Entrega:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Mapa da Esteira de Valor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 4º D — DESENVOLVIMENTO */}
            <ScrollReveal className="bg-[#141D30] border-2 border-white/10 rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex lg:flex-col items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-black text-2xl shadow-lg">
                    4D
                  </div>
                  <div className="text-accent/60 group-hover:text-accent transition-colors">
                    <Boxes className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      4º D — DESENVOLVIMENTO
                    </span>
                    <span className="text-base font-semibold text-gray-300">
                      "Transformar valor em ofertas"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Transformar o que foi desenhado em soluções claras, desejáveis e
                    comercializáveis
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                    O Desenvolvimento organiza o conteúdo, a entrega e a proposta comercial de cada
                    solução prioritária (Oferta de Entrada, Solução Principal, Oferta Premium,
                    Recorrência e Continuidade, quando aplicável).
                  </p>

                  {/* Campos Oficiais da Ficha Estratégica */}
                  <div className="mb-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2.5">
                      Campos Estruturais de Cada Solução:
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-300">
                      {[
                        'Nome',
                        'Público',
                        'Dor',
                        'Promessa',
                        'Transformação',
                        'Mecanismo',
                        'Método',
                        'Formato',
                        'Duração',
                        'Escopo',
                        'Entregáveis',
                        'Experiência',
                        'Diferenciais',
                        'Preço',
                        'Ancoragem',
                        'Posicionamento',
                      ].map((field, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-[#1B2640] rounded-md border border-white/10 text-white font-medium"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Matriz Valor x Esforço x Escala */}
                  <div className="mb-6 bg-[#1B2640] p-4 rounded-xl border border-white/5 text-xs text-gray-200">
                    <span className="text-xs uppercase font-bold text-accent tracking-wider block mb-1">
                      Matriz Valor × Esforço × Escala:
                    </span>
                    <p className="text-gray-300 leading-relaxed">
                      Cada solução é rigorosamente analisada considerando{' '}
                      <strong>
                        valor percebido, esforço de entrega, margem, dependência do fundador,
                        potencial de recorrência, potencial de escala e importância estratégica
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Como transformar aquilo que eu sei fazer em uma oferta clara, desejável e
                        comprável?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entregas da Etapa:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Ficha Estratégica das Ofertas + Matriz de Portfólio + Arquitetura de
                        Precificação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 5º D — DECOLAGEM */}
            <ScrollReveal className="bg-[#141D30] border-2 border-white/10 rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all shadow-xl relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex lg:flex-col items-center gap-4 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center font-black text-2xl shadow-lg">
                    5D
                  </div>
                  <div className="text-accent/60 group-hover:text-accent transition-colors">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      5º D — DECOLAGEM
                    </span>
                    <span className="text-base font-semibold text-gray-300">
                      "Colocar a Esteira de Valor em movimento"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    A Esteira não termina quando os produtos ficam prontos: conexão com mercado e
                    vendas
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                    A Decolagem conecta estratégia, oferta, comunicação e vendas contínuas: mensagem
                    comercial e apresentação; pitch e argumentos de valor; canais e CTAs; estratégia
                    de entrada e base atual de clientes; jornada de compra, upsell, cross-sell,
                    continuidade e ativação.
                  </p>

                  {/* Perguntas da Jornada Comercial */}
                  <div className="mb-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      Perguntas Fundamentais da Jornada Comercial:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      <span>• Como o cliente descobre a marca?</span>
                      <span>• Qual é o primeiro movimento esperado?</span>
                      <span>• Qual solução ele compra primeiro?</span>
                      <span>• Como identificamos a necessidade seguinte?</span>
                      <span>• Qual é a próxima oferta?</span>
                      <span>• Quando apresentar a oferta premium?</span>
                      <span className="sm:col-span-2">
                        • Como gerar continuidade dentro do ecossistema?
                      </span>
                    </div>
                  </div>

                  {/* Plano de Decolagem 30-60-90 */}
                  <div className="mb-6 bg-[#1B2640] p-4 rounded-xl border border-white/5">
                    <span className="text-xs uppercase font-bold text-accent tracking-wider block mb-2.5">
                      Plano de Decolagem 30-60-90:
                    </span>
                    <div className="space-y-2 text-xs text-gray-200">
                      <div>
                        <strong className="text-accent">30 dias — Organizar e ativar:</strong>{' '}
                        Finalizar materiais, organizar comunicação, preparar canais, apresentar a
                        nova estrutura à base existente e iniciar ativação.
                      </div>
                      <div>
                        <strong className="text-accent">60 dias — Vender e validar:</strong>{' '}
                        Realizar ofertas, observar comportamento, identificar objeções, validar
                        comunicação e acompanhar conversão.
                      </div>
                      <div>
                        <strong className="text-accent">90 dias — Medir e otimizar:</strong>{' '}
                        Analisar resultados, rever ofertas, ajustar preços, aprimorar a jornada,
                        identificar gargalos e priorizar melhorias.
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Como colocar minha Esteira de Valor no mercado e fazer o cliente avançar
                        por ela?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entregas da Etapa:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Plano de Decolagem + Roadmap 30-60-90
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO NOVA A & B: DINÂMICA DE IMPLEMENTAÇÃO & FORMATO DO PROGRAMA */}
      <section id="dinamica" className="py-24 md:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                  Construção Guiada Passo a Passo
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                  A Dinâmica de <span className="text-accent">Implementação</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  O Esteira de Valor 5D{' '}
                  <strong className="text-primary font-semibold">
                    não será conduzido como uma sequência de aulas
                  </strong>
                  . A metodologia funciona em ciclos contínuos de execução:
                </p>
              </div>
            </ScrollReveal>

            {/* Ciclo Oficial */}
            <ScrollReveal delay={100} className="mb-14">
              <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-accent/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="text-center mb-6">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    O Ciclo de Ação Contínua
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-extrabold font-mono text-white">
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">APRENDER</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">DECIDIR</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">CONSTRUIR</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">IMPLEMENTAR</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">VALIDAR</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-white/10 rounded-lg">AJUSTAR</span>
                    <span className="text-accent">→</span>
                    <span className="px-3 py-1.5 bg-accent text-primary rounded-lg">AVANÇAR</span>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-white/10 max-w-2xl mx-auto">
                  <p className="text-xs sm:text-sm text-gray-300 italic">
                    Fluxo oficial do programa:{' '}
                    <strong className="text-accent font-semibold">
                      "Aprender no encontro → construir durante o Sprint → revisar no Lab → chegar
                      preparado ao próximo D."
                    </strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* As 5 Fases de Cada Ciclo */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-8">
                Como Funciona Cada Ciclo
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  {
                    num: '1',
                    title: 'Encontro Estratégico',
                    desc: 'Conteúdo, análise, direcionamento e tomada de decisão estratégica.',
                  },
                  {
                    num: '2',
                    title: 'Sprint de Implementação',
                    desc: 'O participante aplica o que foi construído diretamente ao próprio negócio.',
                  },
                  {
                    num: '3',
                    title: '5D Lab',
                    desc: 'Oficina ao vivo de revisão, tira-dúvidas, construção orientada e desbloqueio.',
                  },
                  {
                    num: '4',
                    title: 'Ajustes Finos',
                    desc: 'O participante finaliza e lapida o ativo estratégico daquela etapa.',
                  },
                  {
                    num: '5',
                    title: 'Próximo Encontro',
                    desc: 'Avançamos com consistência para a próxima grande decisão da esteira.',
                  },
                ].map((item, idx) => (
                  <ScrollReveal
                    key={idx}
                    delay={idx * 80}
                    className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent font-black text-sm flex items-center justify-center mb-3">
                        {item.num}
                      </div>
                      <h4 className="font-bold text-primary text-sm mb-1.5">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Formato Oficial do Programa: 16 Pontos de Contato ao Vivo */}
            <ScrollReveal className="mb-16">
              <div className="bg-white border-2 border-accent/40 rounded-3xl p-8 md:p-10 shadow-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      Formato Oficial do Programa
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
                      16 Pontos de Contato ao Vivo ao longo de 4 Meses
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Uma estrutura desenhada para garantir que você não pare no meio do caminho e
                      construa ativos comerciais definitivos com acompanhamento próximo.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 pt-2">
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
                        <span className="text-2xl font-black text-primary block">8</span>
                        <span className="text-xs font-bold text-gray-700 block">
                          Encontros Estratégicos
                        </span>
                        <span className="text-[11px] text-gray-500">Quinzenais ao vivo</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
                        <span className="text-2xl font-black text-accent block">7</span>
                        <span className="text-xs font-bold text-gray-700 block">
                          Oficinas 5D Lab
                        </span>
                        <span className="text-[11px] text-gray-500">
                          Mão na massa e tira-dúvidas
                        </span>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center">
                        <span className="text-2xl font-black text-primary block">1</span>
                        <span className="text-xs font-bold text-gray-700 block">
                          Banca Final 5D
                        </span>
                        <span className="text-[11px] text-gray-500">Apresentação e validação</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-72 bg-primary text-white p-6 rounded-2xl text-center shrink-0 border border-accent/30 shadow-md">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-accent mb-1">
                      Carga Total
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                      16 Pontos de Contato ao Vivo
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Duração aproximada de <strong>4 meses</strong> de mentoria e implementação
                      ativa.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* O Que É o 5D Lab — Oficina de Implementação */}
            <ScrollReveal className="mb-16">
              <div className="bg-[#141D30] text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl">
                <div className="max-w-3xl mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    5D Lab — Onde o Trabalho Acontece
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Não é uma aula adicional. É um espaço de construção orientada.
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    A oficina intermediária de aplicação do método serve para colocar materiais na
                    tela, destrinchar dúvidas e sair com a oferta pronta:
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Apresentar materiais e rascunhos',
                    'Esclarecer dúvidas pontuais da entrega',
                    'Revisar decisões tomadas nos encontros',
                    'Receber direcionamento direto da mentora',
                    'Ajustar produtos e escopos de serviço',
                    'Validar propostas e tickets de venda',
                    'Comparar alternativas de entrega',
                    'Resolver bloqueios e indecisões',
                    'Aprimorar entregáveis finais da etapa',
                  ].map((labItem, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2.5 text-xs text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{labItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* SEÇÃO C & D: BANCA FINAL & DOSSIÊ */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Banca Final */}
              <ScrollReveal className="bg-white border-2 border-gray-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:border-accent transition-all">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <Target className="w-3.5 h-3.5 text-accent" />
                    Encerramento com Chave de Ouro
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Banca Final — Esteira de Valor 5D
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    A jornada é encerrada com uma apresentação estruturada. Cada participante
                    apresenta sua Esteira de Valor completa:
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-5 text-xs text-gray-700 space-y-1.5">
                    <p>
                      • <strong>Posicionamento:</strong> quem atende e qual transformação lidera.
                    </p>
                    <p>
                      • <strong>Proposta de Valor:</strong> por que o mercado deveria escolher
                      aquela solução.
                    </p>
                    <p>
                      • <strong>Esteira:</strong> como os produtos se conectam de ponta a ponta.
                    </p>
                    <p>
                      • <strong>Oferta de Entrada:</strong> como o cliente inicia a jornada.
                    </p>
                    <p>
                      • <strong>Solução Principal:</strong> onde acontece a transformação central.
                    </p>
                    <p>
                      • <strong>Recorrência:</strong> como gerar continuidade e LTV.
                    </p>
                    <p>
                      • <strong>Premium:</strong> qual é a oferta de maior profundidade.
                    </p>
                    <p>
                      • <strong>Decolagem:</strong> como a esteira será colocada no mercado.
                    </p>
                  </div>

                  <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Critérios avaliados pela Banca:
                  </p>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                    Clareza, coerência, conexão entre ofertas, aderência ao cliente, proposta de
                    valor, capacidade de execução, lógica de monetização, sustentabilidade,
                    posicionamento e potencial de continuidade.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 bg-primary/5 p-3.5 rounded-xl text-center">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Direcionamentos Finais da Banca
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-primary tracking-wide">
                    MANTER • AJUSTAR • SIMPLIFICAR • PRIORIZAR
                  </p>
                </div>
              </ScrollReveal>

              {/* Dossiê Esteira de Valor 5D */}
              <ScrollReveal className="bg-white border-2 border-accent/40 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    O Ativo Mais Valioso do Programa
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Dossiê Esteira de Valor 5D
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    Todos os principais entregáveis formam, ao final, o{' '}
                    <strong>Dossiê Esteira de Valor 5D</strong>.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-5 text-xs text-gray-700 leading-relaxed space-y-2.5">
                    <p>
                      Esse documento reúne <strong>toda a nova arquitetura comercial</strong> do
                      participante e funciona como mapa estratégico permanente para decisões futuras
                      sobre:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 font-medium text-primary">
                      <span>✓ Criação de produtos</span>
                      <span>✓ Vendas & Metas</span>
                      <span>✓ Comunicação & Pitch</span>
                      <span>✓ Investimentos</span>
                      <span>✓ Prioridades do negócio</span>
                      <span>✓ Posicionamento & Expansão</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/20 to-accent/5 p-4 rounded-xl border-l-4 border-accent">
                    <p className="text-xs sm:text-sm font-bold text-primary leading-snug">
                      "O participante não termina apenas com conhecimento. Termina com ativos
                      estratégicos construídos para o próprio negócio."
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 italic">
                  Seu mapa de navegação empresarial para os próximos anos de faturamento.
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 10. OS 14 ENTREGÁVEIS OFICIAIS DO PROGRAMA */}
      <section id="entregaveis" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                O que você leva em mãos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Os <span className="text-accent">14 Entregáveis Oficiais</span> da Jornada
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Cada etapa gera ativos práticos e definitivos que compõem o seu{' '}
                <strong>Dossiê Esteira de Valor 5D</strong>:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              {
                num: '01',
                title: 'Raio-X do Negócio',
                desc: 'Diagnóstico inicial detalhado do momento atual, produtos, receita, gargalos operacionais e visão de futuro.',
              },
              {
                num: '02',
                title: 'Mapa de Ativos de Valor',
                desc: 'Inventário completo dos seus conhecimentos, métodos, competências, formações e oportunidades monetizáveis.',
              },
              {
                num: '03',
                title: 'Mapa do Cliente Estratégico',
                desc: 'Perfil aprofundado do público prioritário, dores, desejos, necessidades e transformação desejada.',
              },
              {
                num: '04',
                title: 'Posicionamento',
                desc: 'Território estratégico e diferencial autêntico da sua marca para escapar da guerra por preço.',
              },
              {
                num: '05',
                title: 'Proposta Central de Valor',
                desc: 'Fórmula PÚBLICO + PROBLEMA + TRANSFORMAÇÃO + DIFERENCIAL consolidada para o mercado.',
              },
              {
                num: '06',
                title: 'Mapa da Esteira de Valor',
                desc: 'Arquitetura com as 6 camadas conectadas (Atração, Entrada, Solução Principal, Recorrência, Premium, Continuidade).',
              },
              {
                num: '07',
                title: 'Ficha das Ofertas Prioritárias',
                desc: 'Estruturação dos 16 campos comerciais de cada oferta (nome, método, escopo, promessa, entrega etc.).',
              },
              {
                num: '08',
                title: 'Matriz Valor × Esforço × Escala',
                desc: 'Análise de viabilidade: margem, dependência do fundador, potencial de escala e importância estratégica.',
              },
              {
                num: '09',
                title: 'Arquitetura de Precificação',
                desc: 'Precificação estratégica por valor gerado, ancoragem, pacotes e relação entre tickets da esteira.',
              },
              {
                num: '10',
                title: 'Jornada do Cliente',
                desc: 'Mapeamento do caminho de avanço do comprador de uma solução para a seguinte.',
              },
              {
                num: '11',
                title: 'Pitch das Ofertas',
                desc: 'Comunicação comercial afiada com scripts, argumentos de valor e apresentação assertiva de cada solução.',
              },
              {
                num: '12',
                title: 'Estratégia de Upsell e Cross-sell',
                desc: 'Processo comercial e momento exato de apresentar a próxima solução ou a oferta premium.',
              },
              {
                num: '13',
                title: 'Plano de Decolagem',
                desc: 'Estratégia de ativação imediata, canais de venda, CTAs e apresentação à base existente.',
              },
              {
                num: '14',
                title: 'Roadmap 30-60-90',
                desc: 'Cronograma tático de 30 dias (organizar e ativar), 60 dias (vender e validar) e 90 dias (medir e otimizar).',
              },
            ].map((deliv, idx) => (
              <ScrollReveal
                key={idx}
                delay={(idx % 4) * 60}
                className="bg-gray-50 border border-gray-200/80 p-5 rounded-2xl hover:border-accent hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-accent bg-accent/15 px-2.5 py-1 rounded-lg">
                      {deliv.num}
                    </span>
                    <FileCheck2 className="w-4 h-4 text-accent/60" />
                  </div>
                  <h3 className="font-bold text-primary text-sm sm:text-base mb-2">
                    {deliv.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{deliv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Todos os 14 entregáveis são compilados no final no{' '}
              <strong>Dossiê Esteira de Valor 5D</strong> do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO NOVA E: OS 6 PRINCÍPIOS DO ESTEIRA DE VALOR 5D */}
      <section id="principios" className="py-24 md:py-32 bg-[#0B1120] text-white relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Fundamentos Sólidos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Os 6 Princípios do <span className="text-accent">Esteira de Valor 5D</span>
              </h2>
              <p className="text-gray-300 text-base max-w-2xl mx-auto">
                Critérios inegociáveis que garantem que sua esteira seja lucrativa, sustentável e
                centrada no cliente:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                num: '1',
                title: 'Todo produto precisa ter uma função',
                desc: 'Se não sabemos qual papel a oferta exerce dentro da jornada, ela provavelmente precisa ser revista ou eliminada.',
              },
              {
                num: '2',
                title: 'O cliente é o centro da esteira',
                desc: 'A arquitetura é construída a partir das transformações reais que o cliente precisa viver, e não do que queremos desovar.',
              },
              {
                num: '3',
                title: 'Mais produtos não significam mais valor',
                desc: 'Uma esteira enxuta, clara e coerente é infinitamente mais eficiente do que um portfólio extenso, disperso e confuso.',
              },
              {
                num: '4',
                title: 'O próximo produto nasce da próxima necessidade',
                desc: 'O cliente avança porque surge uma nova necessidade natural na jornada, não porque precisamos vender novamente para ele.',
              },
              {
                num: '5',
                title: 'Valor e viabilidade precisam caminhar juntos',
                desc: 'A solução deve gerar resultado incontestável para o cliente e, ao mesmo tempo, ser altamente rentável e sustentável para quem entrega.',
              },
              {
                num: '6',
                title: 'Implementação faz parte do método',
                desc: 'Conhecimento sem execução não completa o ciclo do 5D. Você só avança quando o ativo da etapa estiver construído e validado.',
              },
            ].map((princ, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                className="bg-[#141D30] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/50 transition-all shadow-md group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-accent text-primary flex items-center justify-center font-black text-sm mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    {princ.num}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {princ.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                    {princ.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* O que a metodologia não faz — Bloco Oficial de Integridade */}
          <ScrollReveal delay={200} className="mt-14 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-3 text-center sm:text-left">
                Compromisso com o Negócio Real • O Que a Metodologia Não Faz
              </span>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
                <span className="flex items-center gap-2">
                  • Não cria dezenas de produtos desnecessários
                </span>
                <span className="flex items-center gap-2">
                  • Não ensina fórmulas genéricas de infoprodutos
                </span>
                <span className="flex items-center gap-2">
                  • Não faz simplesmente rebatizar serviços velhos
                </span>
                <span className="flex items-center gap-2">
                  • Não monta um catálogo maior e confuso
                </span>
                <span className="flex items-center gap-2">
                  • Não entrega uma receita igual para todos
                </span>
                <span className="flex items-center gap-2">
                  • Não transforma todo conhecimento em produto
                </span>
                <span className="flex items-center gap-2 sm:col-span-2">
                  • Não incentiva ofertas sem demanda ou função estratégica
                </span>
              </div>
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-xs sm:text-sm md:text-base font-semibold text-accent leading-relaxed">
                  "Menos dispersão. Mais clareza. Menos produtos aleatórios. Mais arquitetura. Menos
                  venda isolada. Mais jornada. Menos dependência de oportunidade. Mais
                  intencionalidade comercial."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 14. MUDANÇA DE MENTALIDADE (PARES DE → PARA) */}
      <section id="mentalidade" className="py-24 md:py-32 bg-[#0B1120] text-white relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Mudança de Paradigma
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Mudança de <span className="text-accent">Mentalidade</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Para construir um negócio sustentável e de alto valor, você precisa virar essas 4
                chaves:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                de: 'Quais serviços eu consigo oferecer?',
                para: 'Qual jornada meu cliente precisa percorrer?',
                desc: 'Você deixa de focar apenas no que você executa e passa a construir a transformação completa do comprador.',
              },
              {
                de: 'Como consigo mais clientes?',
                para: 'Como gero mais valor para cada cliente que chega?',
                desc: 'Em vez de viver no desgaste de caçar novos clientes todo mês, você multiplica o valor de cada relacionamento.',
              },
              {
                de: 'Preciso criar outro produto.',
                para: 'Qual é a próxima necessidade natural do meu cliente?',
                desc: 'Acaba a corrida por produtos soltos: novas ofertas nascem como evolução direta da solução anterior.',
              },
              {
                de: 'Eu vendo serviços.',
                para: 'Eu construí um ecossistema de soluções.',
                desc: 'Você para de ser um prestador de horas e assume a postura de arquiteto de valor e autoridade.',
              },
            ].map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 120}
                className="bg-[#141D30] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-accent/40 transition-all shadow-lg"
              >
                <div className="space-y-4">
                  {/* DE */}
                  <div className="bg-red-950/30 border border-red-500/20 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
                      DE (Mentalidade Limitante):
                    </span>
                    <p className="text-base text-gray-300 font-medium line-through decoration-red-400/60">
                      "{item.de}"
                    </p>
                  </div>

                  <div className="flex justify-center text-accent">
                    <ArrowRightLeft className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>

                  {/* PARA */}
                  <div className="bg-accent/10 border border-accent/30 p-4 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      PARA (Mentalidade Estratégica):
                    </span>
                    <p className="text-lg text-white font-bold">"{item.para}"</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-white/5 leading-relaxed">
                  {item.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11, 12, 13. PARA QUEM É / PARA QUEM NÃO É / O QUE NÃO É */}
      <section id="publico" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                  Alinhamento de Expectativas
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Para quem é, e para quem <span className="text-accent">não é</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A Esteira de Valor 5D é um processo sério de arquitetura de negócios. Queremos
                  garantir que estamos com as pessoas certas na mesa.
                </p>
              </div>
            </ScrollReveal>

            {/* O Que Não É Card */}
            <ScrollReveal delay={100} className="mb-12">
              <div className="bg-amber-50 border-2 border-amber-200/80 rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-700 p-3 rounded-2xl shrink-0">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      O que o Esteira de Valor 5D NÃO É:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3 text-sm md:text-base text-gray-700">
                      <p className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        Não é formação para criar dezenas de infoprodutos aleatórios
                      </p>
                      <p className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        Não é simplesmente um curso superficial de marketing
                      </p>
                      <p className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        Não é apenas uma formação pontual de técnicas de vendas
                      </p>
                      <p className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        Não é metodologia para colocar nomes bonitos em serviços velhos
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-200 text-primary font-semibold text-base">
                      É um processo de <strong>arquitetura estratégica do negócio</strong>, focado
                      em transformar conhecimento em um portfólio inteligente de soluções.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Para Quem É x Para Quem Não É */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Para Quem É */}
              <ScrollReveal
                animation="animate-fade-in-right"
                className="bg-gray-50 border-2 border-green-200/60 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider mb-6">
                    <CheckCircle2 className="w-4 h-4" />
                    Para Quem É
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Profissionais e negócios com conhecimento real
                  </h3>
                  <ul className="space-y-3.5 text-gray-700 text-sm md:text-base">
                    {[
                      'Empreendedores e empresários que comercializam conhecimento',
                      'Consultores, mentores e especialistas',
                      'Profissionais liberais e prestadores de serviços qualificados',
                      'Infoprodutores que querem estruturar portfólio maduro',
                      'Negócios com serviços consolidados, mas sem jornada organizada',
                      'Quem deseja criar ou validar uma oferta premium de alto valor',
                      'Quem precisa aumentar recorrência, continuidade e LTV de clientes',
                      'Quem deseja reduzir a dependência cansativa da venda por hora',
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 italic">
                  Se você já entrega valor e quer estrutura comercial para crescer com
                  previsibilidade.
                </div>
              </ScrollReveal>

              {/* Para Quem Não É */}
              <ScrollReveal
                animation="animate-fade-in-left"
                className="bg-gray-50 border-2 border-red-200/60 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-6">
                    <XCircle className="w-4 h-4" />
                    Para Quem NÃO É
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Atalhos fáceis e fórmulas mágicas
                  </h3>
                  <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        Quem procura ideia rápida de dinheiro sem disposição para estruturar
                        estratégia, posicionamento e execução.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        Quem acredita que criar dezenas de produtos sem critério vai resolver o
                        faturamento.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        Quem não possui conhecimento ou capacidade real de entrega para o cliente.
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-200 shadow-inner">
                    <p className="text-xs uppercase font-bold text-primary tracking-wider mb-2">
                      Premissa Fundamental:
                    </p>
                    <p className="text-sm font-semibold text-gray-800 italic mb-2">
                      "Mais produtos não significam necessariamente mais resultados."
                    </p>
                    <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                      O que realmente importa:
                    </p>
                    <p className="text-sm font-bold text-primary">
                      "As ofertas certas, para as pessoas certas, na sequência certa."
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 italic">
                  Nosso foco é profundidade estratégica e solidez comercial.
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 16. FRASES-CHAVE DE COMUNICAÇÃO (BANNERS DE DESTAQUE) */}
      <section className="py-20 bg-primary text-white border-y border-accent/20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Princípios Norteadores
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Verdades que guiam a <span className="text-accent">Esteira de Valor 5D</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              'Pare de vender serviços soltos. Construa uma jornada de valor.',
              'Seu conhecimento pode valer mais quando suas ofertas trabalham juntas.',
              'Não construa apenas produtos. Construa o caminho que o cliente percorre dentro do seu negócio.',
              'O cliente não precisa terminar a jornada depois da primeira compra.',
              'Uma esteira bem construída transforma uma venda em relacionamento, continuidade e novas oportunidades.',
              'Você não precisa necessariamente de mais produtos. Precisa conectar estrategicamente aquilo que já vende.',
            ].map((quote, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 hover:border-accent/40 transition-all group"
              >
                <Quote className="w-8 h-8 text-accent/40 group-hover:text-accent transition-colors mb-4" />
                <p className="text-base md:text-lg font-medium text-gray-100 leading-snug italic">
                  "{quote}"
                </p>
                <div className="w-10 h-0.5 bg-accent/40 mt-6 group-hover:w-full transition-all duration-300"></div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-accent/15 border border-accent/30 p-6 rounded-2xl">
              <p className="text-lg md:text-xl font-bold text-accent italic">
                "O próximo nível do seu negócio pode já estar dentro do conhecimento que você possui
                — mas ainda não estruturou."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* A MENTORA / QUEM CONDUZ */}
      <section id="mentora" className="py-24 md:py-32 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <ScrollReveal animation="animate-fade-in-right">
                <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                  Quem lidera sua estruturação
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-accent">Ediane Dalbosco</span>
                </h2>
                <div className="w-24 h-1.5 bg-accent mb-8"></div>
                <div className="space-y-5 text-gray-300 text-lg font-light leading-relaxed">
                  <p>
                    <strong className="text-white font-medium">
                      Empresária, estrategista de negócios e mentora executiva
                    </strong>{' '}
                    com mais de uma década de experiência no desenvolvimento e escala de negócios
                    baseados em conhecimento e serviços de alto nível.
                  </p>
                  <p className="bg-white/5 border-l-4 border-accent p-6 rounded-r-lg my-6 text-white font-medium">
                    Apenas em 2025, suas metodologias e estruturas estratégicas de ofertas foram
                    responsáveis por destravar mais de{' '}
                    <span className="text-accent text-2xl font-bold block mt-2">
                      R$ 20 milhões em resultados
                    </span>{' '}
                    para seus clientes, mentorados e parceiros de negócio.
                  </p>
                  <p>
                    Sua abordagem descarta teorias rasas de internet: ela atua diretamente na
                    engenharia comercial, no desenho de arquiteturas de produtos e no posicionamento
                    assertivo que transforma expertise em negócios altamente rentáveis.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <ScrollReveal animation="animate-fade-in-left">
                <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  <div className="absolute inset-0 bg-accent translate-x-5 translate-y-5 rounded-3xl z-0"></div>
                  <img
                    src={mentorImage}
                    alt="Ediane Dalbosco, Criadora do Esteira de Valor 5D"
                    className="relative z-10 w-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl object-cover aspect-[4/5] border-4 border-[#0B1120]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 17. POSICIONAMENTO FINAL & ASSINATURA OFICIAL DO PRODUTO */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 text-xs sm:text-sm font-bold text-primary">
                <Sparkles size={16} className="text-accent" />
                <span>EDVANCED CONSULTORIA & DESENVOLVIMENTO</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                ESTEIRA DE VALOR 5D
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-semibold mb-6 leading-snug">
                "Programa de Construção e Implementação de Produtos e Serviços. Da expertise à
                construção de uma jornada estratégica de valor."
              </p>

              {/* Assinatura Oficial Completa do Produto */}
              <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl border-2 border-accent/40 shadow-xl my-8">
                <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                  Assinatura Oficial do Produto
                </span>
                <p className="text-lg sm:text-2xl font-black text-white mb-4 leading-tight">
                  ESTEIRA DE VALOR 5D<div>Do serviço solto à jornada estratégica de valor.</div>
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-200 font-semibold">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    8 encontros estratégicos
                  </span>
                  <span className="text-accent">•</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    7 oficinas de implementação
                  </span>
                  <span className="text-accent">•</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    5 decisões fundamentais
                  </span>
                  <span className="text-accent">•</span>
                  <span className="px-3 py-1.5 rounded-lg bg-accent text-primary font-bold">
                    1 Esteira de Valor construída
                  </span>
                </div>
              </div>

              {/* Promessa Metodológica */}
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-primary block mb-1">Promessa Metodológica:</strong>
                "Em aproximadamente quatro meses, através do Método 5D, de encontros estratégicos e
                oficinas de implementação, o participante constrói a arquitetura da sua Esteira de
                Valor, estrutura suas ofertas prioritárias e define um plano claro para colocá-las
                no mercado."
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left my-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    5 Decisões Estratégicas
                  </span>
                  <p className="font-bold text-primary text-sm sm:text-base">
                    1. Diagnóstico → 2. Direcionamento → 3. Desenho → 4. Desenvolvimento → 5.
                    Decolagem
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    Transformação Real
                  </span>
                  <p className="font-bold text-primary text-sm sm:text-base">
                    "Do serviço solto para uma jornada estratégica de soluções de alto valor."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    Resultado Concreto
                  </span>
                  <p className="font-bold text-primary text-sm sm:text-base">
                    "Dossiê Esteira de Valor 5D completo com 14 entregáveis prontos para execução."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUIZ DIAGNÓSTICO RÁPIDO */}
      <section id="diagnostico" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Avaliação Rápida
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Diagnóstico de <span className="text-accent">Maturidade da Sua Esteira</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Responda 4 perguntas e descubra em qual fase de estruturação o seu negócio se
                encontra.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <DiagnosticQuiz onComplete={setDiagnosticResult} />
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => scrollTo('contato')}
                  className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-2"
                >
                  Ir para o formulário de contato
                </button>
                <span className="hidden sm:inline text-gray-600">•</span>
                <a
                  href={WHATSAPP_LINK(WHATSAPP_MESSAGES.garantirVaga)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  Atendimento direto no WhatsApp →
                </a>
              </div>{' '}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 18. ESSÊNCIA DA MARCA (FECHO ANTES DO FORM) */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-16 h-16 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">A Essência da Metodologia</h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 font-light max-w-3xl mx-auto">
                O Esteira de Valor 5D não ensina o empreendedor apenas a criar produtos. Ensina a
                olhar para o próprio negócio como uma jornada. Porque uma oferta pode resolver o
                problema atual. Mas uma esteira bem construída consegue acompanhar a evolução
                continuada do cliente.
              </p>
              <blockquote className="text-lg sm:text-2xl md:text-3xl font-extrabold text-accent italic max-w-3xl mx-auto leading-snug bg-white/5 border border-white/10 p-6 rounded-2xl mb-4">
                "Não construa apenas produtos. Construa o caminho que o seu cliente percorre dentro
                do seu negócio."
              </blockquote>
              <p className="text-xs text-gray-400">
                EDVANCED | Esteira de Valor 5D • Da expertise à construção de uma jornada
                estratégica de valor.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CAPTURA DE LEADS / FORMULÁRIO */}
      <section id="contato" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #0F172A 2px, transparent 2px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                Dê o Próximo Passo
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Pronto para construir sua <span className="text-accent">Esteira de Valor</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transforme sua expertise em ofertas conectadas e conduza seus clientes da primeira
                compra à solução premium.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <LeadForm diagnosticResult={diagnosticResult || undefined} />
          </ScrollReveal>

          {/* Aviso Legal */}
          <ScrollReveal delay={300}>
            <div className="mt-16 max-w-xl mx-auto bg-gray-50 border border-gray-200 p-6 rounded-2xl flex items-start gap-4 text-left">
              <AlertTriangle className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Aviso Importante</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Os resultados compartilhados dependem da aplicação individual, do mercado de
                  atuação e da dedicação do empreendedor. O programa{' '}
                  <strong className="font-semibold text-primary">Esteira de Valor 5D</strong>{' '}
                  fornece a metodologia, as ferramentas e a arquitetura estratégica, mas o sucesso
                  comercial está diretamente atrelado à execução do negócio.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
