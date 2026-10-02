import { useState, useEffect } from 'react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { LeadForm } from '@/components/LeadForm'
import { DiagnosticQuiz } from '@/components/DiagnosticQuiz'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Target,
  Search,
  Mic,
  Rocket,
  Map,
  Sparkles,
  AlertTriangle,
  ArrowDown,
  Phone,
  MapPin,
  Lightbulb,
  Users,
} from 'lucide-react'
import mentorImage from '@/assets/as-portas-estao-1-21a63.png'
import heroPhoto from '@/assets/img7990-74f78.jpg'

const WHATSAPP_URL = 'https://wa.me/5565981003969'

const SITE_TITLE = 'Trajetória de Valor 5D | Mentoria Premium com Ediane Dalbosco'

export default function Index() {
  const [diagnosticResult, setDiagnosticResult] = useState<string | null>(null)

  useEffect(() => {
    document.title = SITE_TITLE
  }, [])

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.usecurling.com/p/1920/1080?q=modern%20corporate%20office%20business&color=black&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10" />
        </div>

        <div className="container mx-auto px-4 z-20 relative text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 max-w-4xl w-full">
              <ScrollReveal animation="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 text-sm font-semibold backdrop-blur-md text-accent shadow-sm">
                  <Sparkles size={16} />
                  <span>Mentoria Premium Trajetória de Valor 5D</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="animate-fade-in-up" delay={150}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
                  Transforme sua trajetória em uma{' '}
                  <span className="text-accent relative inline-block">
                    oferta exclusiva
                    <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent/30 rounded-full"></span>
                  </span>{' '}
                  e sua oferta em um movimento de{' '}
                  <span className="text-accent font-bold">5 dígitos mensais</span>.
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="animate-fade-in-up" delay={300}>
                <p className="text-base md:text-lg text-accent/90 mb-10 leading-relaxed max-w-2xl font-medium italic">
                  "Você já tem conhecimento, experiência e repertório."
                </p>
              </ScrollReveal>

              <ScrollReveal animation="animate-fade-in-up" delay={450}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-8 py-5 rounded-md text-lg font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] group w-full sm:w-auto"
                >
                  QUERO TRANSFORMAR MINHA TRAJETÓRIA EM VALOR
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>
            </div>
            <div className="flex justify-center lg:justify-end items-center lg:w-2/5 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 opacity-30 blur-sm"></div>
                <img
                  src={heroPhoto}
                  alt="Ediane Dalbosco, Mentora Trajetória de Valor"
                  className="relative z-10 w-56 md:w-72 lg:w-80 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce">
          <ArrowDown size={32} />
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-xl text-gray-600 leading-relaxed">
                Você tem anos de prática, sabe entregar resultados excepcionais, mas ainda enfrenta
                as mesmas barreiras no seu negócio:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: 'Agenda Lotada, Bolso Vazio',
                desc: 'Preso no modelo de cobrar por hora, trabalhando exaustivamente sem conseguir escalar seus ganhos financeiros.',
              },
              {
                title: 'Dificuldade de Precificação',
                desc: 'Insegurança na hora de cobrar mais caro por achar que os clientes não vão valorizar ou não estão dispostos a pagar.',
              },
              {
                title: 'Falta de Estrutura',
                desc: 'Muito conhecimento acumulado na cabeça, mas nenhuma metodologia clara e empacotada para vender repetidamente.',
              },
            ].map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 150}
                className="bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <XCircle className="text-red-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section
        id="method"
        className="py-24 md:py-32 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=abstract%20texture&color=black')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                A Metodologia
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O Método <span className="text-accent">5D</span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Um passo a passo lógico e validado para empacotar e vender o seu conhecimento com
                previsibilidade e alto valor.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                id: '1',
                title: 'Descobrir',
                icon: <Search className="w-8 h-8" />,
                desc: 'Reconhecendo o real valor da sua experiência e o problema específico que você resolve.',
              },
              {
                id: '2',
                title: 'Diferenciar',
                icon: <Target className="w-8 h-8" />,
                desc: 'Definindo seu cliente ideal e estabelecendo um posicionamento único e magnético no mercado.',
              },
              {
                id: '3',
                title: 'Desenhar',
                icon: <Map className="w-8 h-8" />,
                desc: 'Design do produto e estruturação do seu próprio método de forma altamente entregável.',
              },
              {
                id: '4',
                title: 'Divulgar',
                icon: <Mic className="w-8 h-8" />,
                desc: 'Comunicação clara e intencional, gerando autoridade inquestionável e desejo no público.',
              },
              {
                id: '5',
                title: 'Dinamizar',
                icon: <Rocket className="w-8 h-8" />,
                desc: 'Estratégias de vendas ativas, otimização de conversão e escala para atingir múltiplos 5 dígitos.',
              },
            ].map((step, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 100}
                className="group relative bg-[#1A233A] border border-white/5 p-8 rounded-2xl hover:bg-[#1E2943] transition-all hover:border-accent/50 hover:-translate-y-2"
              >
                <div className="text-accent mb-8 w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                <div className="text-7xl font-black text-white/[0.03] absolute top-4 right-6 pointer-events-none group-hover:text-white/[0.06] transition-colors">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <ScrollReveal animation="animate-fade-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gray-100 rounded-3xl transform rotate-3"></div>
                  <img
                    src="https://img.usecurling.com/p/800/800?q=meeting%20professionals&color=gray&dpr=2"
                    alt="Profissionais e Especialistas"
                    className="relative rounded-2xl shadow-2xl z-10 w-full object-cover aspect-square"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 animate-float hidden md:block border border-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent/20 p-3 rounded-full text-accent">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Escala Financeira</p>
                        <p className="text-xl font-bold text-primary">5 Dígitos/mês</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/2 w-full">
              <ScrollReveal animation="animate-fade-in-left">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  Público-Alvo
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10 leading-tight">
                  Para quem é a Mentoria <span className="text-accent">5D</span>?
                </h2>
                <div className="space-y-6">
                  {[
                    'Tem conhecimento, experiência ou repertório em uma área específica, mas ainda não conseguiu transformar isso em um produto de alto valor.',
                    'Quer criar uma mentoria, consultoria ou programa estruturado e não sabe por onde começar.',
                    'Já vende horas e serviços, mas deseja escalar para um modelo de negócio mais rentável e previsível.',
                    'Busca um método validado para empacotar seu conhecimento e cobrar o que realmente vale.',
                    'Quer construir uma marca de autoridade e atrair clientes premium que pagam por transformação.',
                    'Está em fase de transição de carreira e quer transformar sua experiência em um negócio rentável.',
                    'Deseja uma fonte de renda extra estruturada, usando seu conhecimento para gerar receita previsível.',
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-5">
                      <div className="bg-primary/5 p-3 rounded-xl mt-1 shrink-0">
                        <CheckCircle2 className="text-primary w-6 h-6" />
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium pt-1">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  A Transformação
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  O que muda na sua trajetória?
                </h2>
                <p className="text-xl text-gray-600">
                  A ponte entre o amadorismo e a alta rentabilidade.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
              {/* Before */}
              <ScrollReveal
                animation="animate-fade-in-right"
                className="p-10 md:p-14 lg:p-16 border-b md:border-b-0 md:border-r border-gray-200 bg-white"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-4">
                  <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-md text-sm font-black tracking-wider">
                    VOCÊ SAI DE:
                  </span>
                </h3>
                <ul className="space-y-6">
                  {[
                    'Conhecimento solto e desorganizado',
                    'Experiência dispersa, sem método',
                    'Venda exaustiva de horas avulsas',
                    'Insegurança para cobrar alto',
                    'Atraindo clientes desqualificados',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-gray-600">
                      <XCircle className="text-red-400 shrink-0 w-6 h-6" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              {/* After */}
              <ScrollReveal
                animation="animate-fade-in-left"
                className="bg-primary text-white p-10 md:p-14 lg:p-16"
              >
                <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                  <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-md text-sm font-black tracking-wider">
                    E COMEÇA A CONSTRUIR:
                  </span>
                </h3>
                <ul className="space-y-6">
                  {[
                    'Oferta exclusiva e posicionada',
                    'Método próprio estruturado',
                    'Produto premium de alto valor',
                    'Confiança e posicionamento de autoridade',
                    'Potencial previsível de 5 dígitos/mês',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-gray-200">
                      <CheckCircle2 className="text-accent shrink-0 w-6 h-6" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                A Entrega
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Como funciona a Mentoria
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Encontros Ao Vivo',
                desc: 'Sessões estratégicas em grupo para direcionamento direto e feedback sobre o seu negócio.',
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: 'Grupo de Suporte',
                desc: 'Networking altamente qualificado e suporte diário para tirar dúvidas direto com a comunidade.',
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                title: 'Materiais Práticos',
                desc: 'Acesso a templates, scripts e ferramentas prontas para acelerar a execução do seu projeto.',
                icon: <Lightbulb className="w-6 h-6" />,
              },
              {
                title: 'Ecossistema Edvanced',
                desc: 'Acesso a conteúdos exclusivos e bônus focados na aceleração massiva de resultados.',
                icon: <Rocket className="w-6 h-6" />,
              },
            ].map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 150}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-1 bg-accent mb-8 group-hover:w-full transition-all duration-500"></div>
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Bio */}
      <section id="mentor" className="py-24 md:py-32 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <ScrollReveal animation="animate-fade-in-right">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                  Quem será sua mentora
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="text-accent">Ediane Dalbosco</span>
                </h2>
                <div className="w-24 h-1.5 bg-accent mb-10"></div>
                <div className="space-y-6 text-gray-300 text-xl font-light leading-relaxed">
                  <p>
                    <strong className="text-white font-medium">
                      Empresária, consultora e estrategista de negócios
                    </strong>{' '}
                    com mais de 10 anos de experiência transformando conhecimento técnico em
                    produtos altamente lucrativos e escaláveis.
                  </p>
                  <p className="bg-white/5 border-l-4 border-accent p-6 rounded-r-lg my-8 text-white font-medium">
                    Apenas em 2025, suas estratégias já foram responsáveis por gerar mais de{' '}
                    <span className="text-accent text-2xl font-bold block mt-2">
                      R$ 20 milhões em resultados
                    </span>{' '}
                    para seus clientes e parceiros.
                  </p>
                  <p>
                    Seu foco não é apenas na teoria superficial, mas na construção de negócios
                    sólidos, posicionamento inabalável e ofertas que o mercado não consegue ignorar.
                    Na <strong className="text-white font-medium">Trajetória de Valor 5D</strong>,
                    ela entrega o exato método que utiliza nos bastidores de grandes players.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/2 w-full">
              <ScrollReveal animation="animate-fade-in-left">
                <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  <div className="absolute inset-0 bg-accent translate-x-6 translate-y-6 rounded-3xl z-0"></div>
                  <img
                    src={mentorImage}
                    alt="Ediane Dalbosco"
                    className="relative z-10 w-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl object-cover aspect-[4/5] border-4 border-[#0B1120]"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="checkout" className="py-32 bg-gray-50 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #0F172A 2px, transparent 2px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 max-w-4xl mx-auto leading-tight tracking-tight">
              Chegou a hora de transformar sua experiência em um{' '}
              <span className="text-accent">negócio de alto valor</span>.
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
              Aplicações estão abertas. Reserve sua vaga e comece a construir sua nova fonte de
              receita previsível.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-6 rounded-lg text-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl hover:shadow-primary/30 group w-full sm:w-auto"
            >
              QUERO TRANSFORMAR MINHA TRAJETÓRIA EM VALOR
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={300} animation="animate-fade-in-up">
            <div className="mt-24 max-w-4xl mx-auto bg-white border border-gray-200 p-8 rounded-2xl text-left shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-amber-50 p-4 rounded-xl shrink-0">
                <AlertTriangle className="text-amber-500 w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Importante</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Os resultados compartilhados ou projetados dependem exclusivamente da execução
                  individual, nível de dedicação e diversos fatores externos e de mercado. A{' '}
                  <strong className="font-semibold">Trajetória de Valor 5D</strong> fornece o método
                  validado, as ferramentas e o direcionamento estratégico, mas não garante, em
                  hipótese alguma, ganhos financeiros específicos.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Diagnostic Quiz Section */}
      <section id="diagnostic" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                Diagnóstico Rápido
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Descubra se a Mentoria 5D é <span className="text-accent">para você</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Responda 4 perguntas rápidas e receba uma análise personalizada do seu perfil em
                segundos.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <DiagnosticQuiz onComplete={setDiagnosticResult} />
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  const el = document.getElementById('contato')
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80
                    window.scrollTo({ top: y, behavior: 'smooth' })
                  }
                }}
                className="text-sm text-gray-400 hover:text-primary transition-colors font-medium"
              >
                Pular diagnóstico e ir direto para o formulário →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Capture Section */}
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
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                Entre em Contato
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Pronto para começar sua <span className="text-accent">trajetória de valor</span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Preencha o formulário abaixo e dê o primeiro passo para transformar sua experiência
                em um negócio de alto valor.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <LeadForm diagnosticResult={diagnosticResult || undefined} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
