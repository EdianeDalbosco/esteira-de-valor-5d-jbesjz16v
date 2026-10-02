import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Home,
  CheckSquare,
  Square,
  Search,
  Compass,
  Layers,
  Boxes,
  Rocket,
  ShieldCheck,
  Video,
  FileText,
  BadgeCheck,
  Info,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import logoImage from '@/assets/logo-edvanced-17-7aa6b.png'

/**
 * =============================================================================
 * CONFIGURAÇÃO DE LINKS
 * Substitua os valores abaixo pelos links reais da sua operação quando disponíveis.
 * =============================================================================
 */
// URL do calendário de agendamento (ex.: Calendly, Cal.com, Google Calendar ou formulário de triagem).
// Para alterar, insira o link real (ex.: 'https://calendly.com/sua-empresa/chamada-estrategica')
export const AGENDA_URL = 'https://calendly.com/'

import { WHATSAPP_NUMBER, WHATSAPP_LINK, WHATSAPP_MESSAGES } from '@/lib/constants'

// Exportações mantidas para retrocompatibilidade
export const WHATSAPP_URL = WHATSAPP_LINK(WHATSAPP_MESSAGES.confirmarHorario)
export { WHATSAPP_NUMBER as WHATSAPP_PHONE }

// Duração média da chamada estratégica
const CALL_DURATION = '45 minutos'

// Checklist dos itens preparatórios baseados no documento oficial do Método 5D
interface PrepItem {
  id: string
  title: string
  subtitle: string
  hint: string
  badge: string
}

const PREP_ITEMS: PrepItem[] = [
  {
    id: 'produtos-servicos',
    title: 'Lista de produtos e serviços que você já vende hoje',
    subtitle: 'Tudo o que gera receita atualmente ou foi vendido no último ano.',
    hint: 'Ex.: consultorias individuais, treinamentos, serviços pontuais por hora, contratos mensais ou infoprodutos.',
    badge: 'Ativos Atuais',
  },
  {
    id: 'historico-clientes',
    title: 'Histórico resumido de clientes e principais resultados gerados',
    subtitle: 'Quem mais teve sucesso com a sua expertise e qual transformação você entregou.',
    hint: 'Pense nos seus 3 a 5 melhores clientes: por que eles compraram e qual foi o impacto real?',
    badge: 'Casos Reais',
  },
  {
    id: 'gargalos-margem',
    title: 'O que consome mais tempo / tem baixa margem hoje',
    subtitle:
      'Identificar onde está o desgaste operacional e a dependência da sua presença física.',
    hint: 'Aqueles serviços que exigem muito esforço seu para entregar, mas capturam pouco valor financeiro.',
    badge: 'Gargalos Operacionais',
  },
  {
    id: 'conhecimentos-nao-monetizados',
    title: 'Conhecimentos e experiências ainda não monetizados',
    subtitle: 'Metodologias próprias, bastidores, ferramentas e expertise guardada na gaveta.',
    hint: 'O que você sabe fazer com excelência, mas ainda não empacotou como uma oferta estruturada.',
    badge: 'Oportunidades Ocultas',
  },
  {
    id: 'objetivo-esteira',
    title: 'Objetivo principal com a Esteira de Valor',
    subtitle: 'O que você quer que a jornada resolva no seu negócio nos próximos meses.',
    hint: 'Ex.: parar de vender serviço solto, criar oferta premium de alto valor, ter recorrência previsível ou aumentar o LTV.',
    badge: 'Visão de Futuro',
  },
]

// As 5 etapas encadeadas do Método 5D (resumo de reforço)
const METHOD_STEPS = [
  {
    step: '1º D',
    name: 'DIAGNÓSTICO',
    question: 'Descobrir o valor',
    deliverable: 'Raio-X + Mapa de Ativos de Valor',
    icon: Search,
    highlight: true, // Alinhado diretamente com a chamada estratégica
  },
  {
    step: '2º D',
    name: 'DIRECIONAMENTO',
    question: 'Definir onde gerar valor',
    deliverable: 'Mapa do Cliente + Posicionamento',
    icon: Compass,
    highlight: false,
  },
  {
    step: '3º D',
    name: 'DESENHO',
    question: 'Arquitetar a Esteira',
    deliverable: 'Mapa da Esteira de Valor (6 camadas)',
    icon: Layers,
    highlight: false,
  },
  {
    step: '4º D',
    name: 'DESENVOLVIMENTO',
    question: 'Transformar valor em ofertas',
    deliverable: 'Ficha das Ofertas + Matriz & Preço',
    icon: Boxes,
    highlight: false,
  },
  {
    step: '5º D',
    name: 'DECOLAGEM',
    question: 'Colocar a Esteira em movimento',
    deliverable: 'Plano de Decolagem + Roadmap 30-60-90',
    icon: Rocket,
    highlight: false,
  },
]

export default function ThankYou() {
  // Estado local para permitir que o lead interaja marcando os itens que já preparou
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const completedCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 flex flex-col justify-between">
      {/* Barra de Topo com Logo e Voltar */}
      <header className="w-full bg-[#0B1120] border-b border-white/10 py-4 px-4 sticky top-0 z-40 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={logoImage}
              alt="Esteira de Valor 5D"
              className="h-7 sm:h-8 w-auto object-contain"
            />
            <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-accent border-l border-white/20 pl-3">
              Esteira de Valor 5D
            </span>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-medium"
            >
              <Home className="w-4 h-4 mr-1.5" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-10 md:py-16 max-w-5xl space-y-12">
        {/* =========================================================================
            1. CONFIRMAÇÃO CLARA NO TOPO COM A PROMESSA DA MARCA
        ========================================================================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 shadow-sm mb-2">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-xs font-bold text-accent uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Inscrição Confirmada com Sucesso</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Do serviço solto à{' '}
            <span className="text-accent relative inline-block">
              Esteira de Valor.
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-accent/40 rounded-full"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Recebemos a sua solicitação. O primeiro passo para transformar sua expertise em uma
            arquitetura estratégica de ofertas começa agora. Siga as orientações abaixo para
            garantir sua sessão e chegar preparado.
          </p>
        </section>

        {/* =========================================================================
            2. AGENDA DE CHAMADA — CARD DESTACADO COM CTA
        ========================================================================= */}
        <section className="animate-fade-in-up">
          <Card className="border-2 border-accent/40 shadow-2xl bg-gradient-to-br from-[#0B1120] via-[#141D30] to-[#1E293B] text-white rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <CardContent className="p-6 sm:p-10 md:p-12 relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-primary text-xs font-black uppercase tracking-wider shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      Próximo Passo Fundamental
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-gray-200">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      Duração: {CALL_DURATION}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-gray-200">
                      <Video className="w-3.5 h-3.5 text-accent" />
                      Online via Zoom / Google Meet
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Agende sua <span className="text-accent">Chamada Estratégica</span>
                  </h2>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Uma sessão individual e confidencial que serve como o ponto de partida do{' '}
                    <strong className="text-accent font-semibold">
                      1º D (Diagnóstico — Descobrir o valor)
                    </strong>{' '}
                    da metodologia oficial, dando início ao seu <em>Raio-X do Negócio</em> e ao{' '}
                    <em>Mapa de Ativos de Valor</em> para desenhar a arquitetura ideal de ofertas
                    para o seu momento.
                  </p>

                  {/* O que acontece na chamada */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        01
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Raio-X do Negócio & Ativos
                        </h4>
                        <p className="text-xs text-gray-300 leading-snug">
                          Ponto de partida do 1º D: inventário de expertise, diferenciais e
                          oportunidades ocultas.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        02
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Arquitetura Inicial da Esteira
                        </h4>
                        <p className="text-xs text-gray-300 leading-snug">
                          Primeiro alinhamento da jornada lógica (Entrada → Principal → Recorrência
                          → Premium).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bloco de Ações / CTA */}
                <div className="w-full lg:w-80 shrink-0 bg-white/5 border border-white/15 rounded-2xl p-6 backdrop-blur-sm space-y-4 text-center">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-accent tracking-widest">
                      Vagas Limitadas por Semana
                    </span>
                    <p className="text-xs text-gray-300">
                      Escolha o melhor dia e horário na agenda oficial:
                    </p>
                  </div>

                  <a
                    href={AGENDA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 h-14 rounded-xl text-base font-extrabold hover:bg-accent/90 transition-all hover:scale-[1.02] shadow-xl shadow-accent/20 text-center"
                  >
                    <Calendar className="w-5 h-5 shrink-0" />
                    <span>Agendar minha chamada</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>

                  <div className="relative py-1">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-[#141D30] px-2 text-gray-400">
                        ou prefere falar agora?
                      </span>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_LINK(WHATSAPP_MESSAGES.confirmarHorario)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 h-12 rounded-xl text-sm font-semibold transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Confirmar horário no WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-gray-400 leading-tight pt-1">
                    🔒 Sessão 100% individual e alinhada ao seu mercado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* =========================================================================
            3. MATERIAL PREPARATÓRIO — CHECKLIST ELEGANTE
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-2">
                <FileText className="w-4 h-4" />
                <span>Roteiro de Alinhamento Prévio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                Prepare-se para a Chamada Estratégica
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
                Quanto mais completo o seu material, mais profundo será o diagnóstico da sua
                chamada. Reúna estes 5 pontos antes da nossa conversa:
              </p>
            </div>

            {/* Contador de progresso interativo */}
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shrink-0 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center font-black text-sm">
                {completedCount}/{PREP_ITEMS.length}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-primary uppercase tracking-wide">
                  Seu Checklist
                </p>
                <p className="text-xs text-gray-500">
                  {completedCount === PREP_ITEMS.length
                    ? '🎉 Material 100% pronto!'
                    : 'Clique nos itens conforme organizar'}
                </p>
              </div>
            </div>
          </div>

          {/* Cards da Checklist */}
          <div className="grid gap-4">
            {PREP_ITEMS.map((item, index) => {
              const isChecked = !!checkedItems[item.id]
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleItem(item.id)
                    }
                  }}
                  className={`p-5 sm:p-6 rounded-2xl border-2 transition-all cursor-pointer select-none text-left flex items-start gap-4 ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 shadow-sm'
                      : 'bg-white border-gray-200/90 hover:border-accent/60 hover:shadow-md'
                  }`}
                >
                  {/* Botão de Toggle Visual */}
                  <div className="mt-1 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-6 h-6 text-emerald-600 transition-transform scale-110" />
                    ) : (
                      <Square className="w-6 h-6 text-gray-300 hover:text-accent transition-colors" />
                    )}
                  </div>

                  {/* Detalhes do item */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black tracking-wider text-gray-400 uppercase">
                        Item 0{index + 1}
                      </span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isChecked
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-primary/5 text-primary border border-primary/10'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isChecked ? 'text-emerald-900 line-through' : 'text-primary'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.subtitle}
                    </p>

                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-start gap-1.5 text-xs text-gray-500 italic">
                      <Info className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{item.hint}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dica de Apoio */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-center gap-3">
            <span className="text-xl">💡</span>
            <p className="leading-relaxed">
              <strong>Dica importante:</strong> Não se preocupe em trazer apresentações formais ou
              documentos rebuscados. Anotações simples em tópicos ou um rascunho rápido já são
              suficientes para nossa equipe conduzir a modelagem da sua esteira.
            </p>
          </div>
        </section>

        {/* =========================================================================
            4. REFORÇO DE VALOR: O MÉTODO 5D EM MINIATURA & FRASE-CHAVE
        ========================================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Metodologia Proprietária
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              O que acontece nas 5 etapas do Método 5D
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Cada etapa responde a uma pergunta central e entrega uma peça definitiva para o seu
              ecossistema de ofertas:
            </p>
          </div>

          {/* Grid com as 5 etapas em miniatura */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {METHOD_STEPS.map((m) => {
              const StepIcon = m.icon
              return (
                <div
                  key={m.step}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    m.highlight
                      ? 'bg-gradient-to-b from-accent/10 to-transparent border-accent shadow-md'
                      : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded-full ${
                          m.highlight
                            ? 'bg-accent text-primary font-bold'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {m.step}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          m.highlight ? 'bg-accent/20 text-accent' : 'bg-primary/5 text-primary'
                        }`}
                      >
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="font-extrabold text-sm text-primary mb-1">{m.name}</h4>
                    <p className="text-xs text-accent font-semibold mb-2 italic">"{m.question}"</p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                      Entrega:
                    </span>
                    <span className="text-xs font-bold text-gray-800 leading-snug block">
                      {m.deliverable}
                    </span>
                    {m.highlight && (
                      <span className="inline-block mt-1.5 text-[10px] font-extrabold text-accent bg-accent/15 px-2 py-0.5 rounded">
                        ★ Foco da sua chamada
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Banner de Frase-chave Oficial do Produto */}
          <div className="bg-[#0B1120] text-white rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs uppercase font-bold text-accent tracking-widest block">
                  Princípio Central da Esteira de Valor
                </span>
                <p className="text-base sm:text-xl font-bold italic text-gray-100">
                  "O próximo nível do seu negócio pode já estar dentro do conhecimento que você
                  possui — mas ainda não estruturou."
                </p>
                <p className="text-xs text-gray-400">
                  Mais produtos não significam necessariamente mais resultados. O que importa são{' '}
                  <strong className="text-accent">
                    as ofertas certas, para as pessoas certas, na sequência certa.
                  </strong>
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-5 h-12 rounded-xl text-sm font-extrabold hover:bg-accent/90 transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  Garantir Horário
                </a>
                <a
                  href={WHATSAPP_LINK(WHATSAPP_MESSAGES.confirmarHorario)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-5 h-12 rounded-xl text-sm font-semibold transition-all border border-white/20 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. RODAPÉ DE APOIO E LINK DE VOLTA PARA A HOME
        ========================================================================= */}
        <section className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Seus dados estão protegidos e seguros conosco.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link to="/" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-gray-300 text-primary hover:bg-gray-100 font-semibold text-sm h-11"
              >
                <Home className="w-4 h-4 mr-2" />
                Voltar para o início
              </Button>
            </Link>
            <a
              href={AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-bold text-sm h-11">
                Agendar Chamada
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer simples de encerramento */}
      <footer className="w-full bg-white border-t border-gray-200 py-6 px-4 text-center text-xs text-gray-500">
        <p className="font-semibold text-gray-600 mb-0.5">
          EDVANCED CONSULTORIA & DESENVOLVIMENTO | Esteira de Valor 5D
        </p>
        <p>
          © {new Date().getFullYear()} EDVANCED • Ediane Dalbosco. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}
