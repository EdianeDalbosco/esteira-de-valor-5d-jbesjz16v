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

const WHATSAPP_URL = 'https://wa.me/5565981003969'
const SITE_TITLE = 'Esteira de Valor 5D | Arquitetura Estratégica de Produtos e Serviços'

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
                  O Conceito do Programa
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                  Mais do que criar novos produtos: organizar sua expertise em uma{' '}
                  <span className="text-accent">arquitetura de valor</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Para especialistas e empreendedores que já entregam resultados de alto nível, mas
                  ainda comercializam soluções isoladas, sem conexão estratégica.
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
                    Conhecimento <span className="text-red-500 font-bold">→</span> Serviço{' '}
                    <span className="text-red-500 font-bold">→</span> Venda{' '}
                    <span className="text-red-500 font-bold">→</span> Execução{' '}
                    <span className="text-red-500 font-bold">→</span> Recomeço do zero
                  </div>

                  <ul className="space-y-3 text-gray-600 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Vende o que aparece, reagindo à demanda externa</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Opera com catálogo disperso de produtos desconectados</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Dependência constante de novos clientes todo mês</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 italic">
                  Resultado: alto desgaste operacional e faturamento imprevisível.
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
                    Com a Esteira de Valor 5D (Depois)
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Uma jornada estruturada que conduz o cliente
                  </h3>

                  <div className="bg-[#18233C] p-3.5 rounded-xl border border-accent/30 mb-5 font-mono text-xs text-accent leading-relaxed shadow-inner font-semibold">
                    Posicionamento → Entrada → Solução Principal → Recorrência → Premium →
                    Continuidade
                  </div>

                  <ul className="space-y-3 text-gray-200 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>Condução estratégica do cliente da primeira compra ao premium</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>Arquitetura de valor em vez de catálogo desconectado</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>Previsibilidade de faturamento com recompra e continuidade</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-accent font-medium">
                  Em essência: Você deixa de vender o que aparece e passa a conduzir
                  estrategicamente o cliente.
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
              <p className="text-lg md:text-xl text-accent font-medium mb-3">
                "Diagnosticar o potencial. Direcionar o valor. Desenhar a estratégia. Desenvolver as
                ofertas. Decolar para o mercado."
              </p>
              <p className="text-base text-gray-300 font-light">
                Cinco etapas encadeadas onde cada uma responde a uma pergunta central e gera
                entregas práticas para o seu negócio.
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
                      "Descubra o que você tem"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Investigação profunda do negócio, do conhecimento e dos ativos
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Identifica conhecimentos, experiências, competências, especializações, métodos,
                    soluções já oferecidas, produtos existentes, serviços atuais, histórico de
                    clientes, problemas que resolve, diferenciais e oportunidades não monetizadas.
                    Analisa o que consome tempo, tem baixa margem ou não faz sentido continuar
                    oferecendo.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "O que existe hoje no seu conhecimento e no seu negócio que pode ser
                        transformado em valor?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entrega da Etapa:
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
                      "Defina para quem e onde gerar valor"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Público estratégico, território de atuação e proposta central
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Define o público prioritário, cliente ideal, dores centrais, necessidades,
                    desejos, transformação principal, território de atuação, diferenciais,
                    posicionamento e proposta de valor. O objetivo é evitar produtos genéricos para
                    públicos amplos e construir foco cirúrgico no mercado.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Para quem você gera mais valor e por que esse cliente deveria escolher
                        você?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entregas da Etapa:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Definição do Público Estratégico, Posicionamento e Proposta Central de Valor
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
                      "Construa a arquitetura da sua esteira"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Transforme produtos isolados em uma jornada estruturada
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Aplica a lógica sequencial:{' '}
                    <strong>
                      Atração → Oferta de Entrada → Solução Principal → Recorrência → Oferta Premium
                      → Continuidade
                    </strong>
                    . Nem todo negócio precisa de todas as ofertas; o objetivo é a sequência mais
                    inteligente para o seu modelo de negócio, garantindo que cada solução responda a
                    uma nova necessidade natural do cliente.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Pergunta Central:
                      </p>
                      <p className="text-sm md:text-base font-semibold text-white italic">
                        "Qual é a jornada mais lógica para conduzir esse cliente dentro do meu
                        negócio?"
                      </p>
                    </div>
                    <div className="bg-[#1B2640] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
                      <p className="text-xs uppercase font-bold text-accent tracking-wider mb-1">
                        Entrega da Etapa:
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
                      "Transforme conhecimento em ofertas"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Uma ideia não é um produto: estruturação comercial completa
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Estrutura cada solução nos mínimos detalhes comerciais: nome, conceito, público,
                    dor resolvida, promessa, transformação, método, formato, duração, etapas,
                    escopo, entregáveis, experiência do cliente, diferenciais, preço, pacotes,
                    ancoragem e posicionamento comercial. A transformação prática:{' '}
                    <strong>Conhecimento → Solução → Produto → Oferta</strong>.
                  </p>

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
                        Entrega da Etapa:
                      </p>
                      <p className="text-sm md:text-base font-bold text-accent">
                        Estrutura Estratégica das Ofertas
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
                      "Coloque sua esteira em movimento"
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Estratégia de entrada no mercado, comunicação e vendas contínuas
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Define a comunicação das ofertas, mensagem principal, pitch, argumentos
                    comerciais, canais de aquisição, CTAs, jornada de compra e estratégia de venda.
                    Estabelece a passagem de uma oferta para outra, upsell, cross-sell, continuidade
                    e recompra, além de plano de lançamento/ativação, prioridades, cronograma
                    inicial e indicadores.
                  </p>

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
                        Plano de Decolagem da Esteira e Roadmap de Implementação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10. PRINCIPAIS ENTREGÁVEIS DO PROGRAMA */}
      <section id="entregaveis" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                O que você leva
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Principais <span className="text-accent">Entregáveis</span> do Programa
              </h2>
              <p className="text-lg text-gray-600">
                Tudo o que é desenhado, construído e validado com você durante a formação da sua
                esteira:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mapa de Ativos de Valor',
                desc: 'Inventário completo dos seus conhecimentos, métodos, competências e oportunidades monetizáveis.',
              },
              {
                title: 'Definição do Público Estratégico',
                desc: 'Filtro qualificado de clientes prioritários com perfil para comprar suas ofertas de maior margem.',
              },
              {
                title: 'Proposta Central de Valor',
                desc: 'Posicionamento claro, autêntico e diferenciado frente à concorrência genérica.',
              },
              {
                title: 'Mapa da Esteira de Valor',
                desc: 'Arquitetura visual com a conexão exata entre todas as ofertas do negócio.',
              },
              {
                title: 'Estrutura dos Produtos',
                desc: 'Promessa, método, formato, duração, escopo e entregáveis fechados para cada solução.',
              },
              {
                title: 'Estratégia de Precificação',
                desc: 'Precificação por valor entregue, ancoragem inteligente e formatação de pacotes atrativos.',
              },
              {
                title: 'Jornada do Cliente',
                desc: 'Caminho planejado de evolução para que cada compra estimule a continuidade na próxima.',
              },
              {
                title: 'Pitch das Ofertas',
                desc: 'Comunicação comercial afiada com scripts e mensagens de impacto para converter com autoridade.',
              },
              {
                title: 'Estratégia de Upsell e Cross-sell',
                desc: 'Processos comerciais para oferecer o próximo nível no momento ideal da entrega.',
              },
              {
                title: 'Plano de Decolagem',
                desc: 'Plano de ativação comercial imediata para colocar a nova esteira no ar com segurança.',
              },
              {
                title: 'Roadmap de Implementação',
                desc: 'Cronograma com prioridades, etapas e indicadores para guiar a operação passo a passo.',
              },
            ].map((deliverable, idx) => (
              <ScrollReveal
                key={idx}
                delay={(idx % 3) * 80}
                className="bg-gray-50 border border-gray-200/70 p-6 rounded-2xl hover:border-accent hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base mb-2">{deliverable.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{deliverable.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                  Para quem é — e para quem <span className="text-accent">não é</span>
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

      {/* 17. POSICIONAMENTO FINAL */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6 text-sm font-bold text-primary">
                <Sparkles size={16} className="text-accent" />
                <span>Posicionamento Oficial</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
                ESTEIRA DE VALOR 5D
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-8 leading-snug">
                "Uma metodologia para transformar expertise em uma arquitetura estratégica de
                produtos e serviços."
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-left my-10">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    Método
                  </span>
                  <p className="font-bold text-primary text-base">
                    Diagnóstico → Direcionamento → Desenho → Desenvolvimento → Decolagem
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    Transformação
                  </span>
                  <p className="font-bold text-primary text-base">
                    "Do serviço isolado para uma jornada estratégica de valor."
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <span className="text-xs uppercase font-bold text-accent tracking-widest block mb-2">
                    Resultado
                  </span>
                  <p className="font-bold text-primary text-base">
                    "Uma esteira de ofertas estruturada, conectada e pronta para entrar em
                    operação."
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
              <button
                onClick={() => scrollTo('contato')}
                className="text-sm text-gray-500 hover:text-primary transition-colors font-medium underline underline-offset-4"
              >
                Pular diagnóstico e ir direto para o formulário de contato →
              </button>
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
              <h2 className="text-2xl md:text-4xl font-bold mb-6">A Essência da Marca</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                Cada produto ocupa uma função estratégica: a primeira solução abre a porta; a
                próxima aprofunda a transformação; outra gera continuidade; a premium potencializa
                resultado e proximidade; todas dentro de uma mesma arquitetura.
              </p>
              <blockquote className="text-xl md:text-3xl font-extrabold text-accent italic max-w-3xl mx-auto leading-snug">
                "Porque um negócio de valor não é construído apenas pelo que vende. É construído
                pela jornada que consegue proporcionar ao cliente."
              </blockquote>
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
