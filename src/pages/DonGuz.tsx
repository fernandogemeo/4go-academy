import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import {
  Target,
  TrendingUp,
  Users,
  Calendar,
  Zap,
  BarChart3,
  MessageCircle,
  Video,
  Gift,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Brain,
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

function SectionTitle({ subtitle, title, light = false }: { subtitle: string; title: string; light?: boolean }) {
  const [ref, inView] = useInView(0.15)
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-[#fc6c04]/10 text-[#fc6c04] text-sm font-semibold tracking-wide uppercase mb-4">
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-[#0a0a0a]"}`}>
        {title}
      </h2>
    </motion.div>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
      <Icon className="w-8 h-8 text-[#fc6c04] mx-auto mb-3" />
      <p className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</p>
      <p className="text-white/60 text-sm">{label}</p>
    </motion.div>
  )
}

function TimelineItem({ phase, title, description, items, color }: { phase: string; title: string; description: string; items: string[]; color: string }) {
  const [ref, inView] = useInView(0.15)
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="relative pl-8 pb-12 last:pb-0 border-l-2 border-[#fc6c04]/30 last:border-transparent"
    >
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${color}`} />
      <span className="text-xs font-bold text-[#fc6c04] uppercase tracking-widest">{phase}</span>
      <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a] mt-1 mb-2">{title}</h3>
      <p className="text-[#555] mb-3">{description}</p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#333]">
            <CheckCircle className="w-4 h-4 text-[#00983A] mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function DonGuz() {
  const [heroRef, heroInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.1)
  const [analysisRef, analysisInView] = useInView(0.1)
  const [stratRef, stratInView] = useInView(0.1)
  const [contentRef, contentInView] = useInView(0.1)
  const [resultsRef, resultsInView] = useInView(0.1)
  const [ctaRef, ctaInView] = useInView(0.1)

  return (
    <div className="font-outfit antialiased bg-white text-[#0a0a0a] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fc6c04] to-[#e05a00] flex items-center justify-center">
              <span className="text-white font-bold text-sm">4GO</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">4GO Academy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white/70 text-sm">
            <a href="#nosotros" className="hover:text-[#fc6c04] transition">Nosotros</a>
            <a href="#analisis" className="hover:text-[#fc6c04] transition">Analisis</a>
            <a href="#estrategia" className="hover:text-[#fc6c04] transition">Estrategia</a>
            <a href="#timeline" className="hover:text-[#fc6c04] transition">Timeline</a>
            <a href="#resultados" className="hover:text-[#fc6c04] transition">Resultados</a>
            <a href="#contacto" className="hover:text-[#fc6c04] transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fc6c04]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#fc6c04]/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
        </div>
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={stagger}
          className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#fc6c04]/10 border border-[#fc6c04]/20 text-[#fc6c04] text-xs font-semibold uppercase tracking-widest">
              Presentacion Exclusiva
            </span>
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            4GO Academy &middot; Agencia Digital &middot; America Latina
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
            Plan de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc6c04] to-[#F4B503]">
              Black Friday
            </span>
            <br />
            para Don Guz
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Estrategia integral para convertir 462K seguidores en una maquina de ventas
            durante la mayor temporada comercial del ano.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#estrategia"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fc6c04] to-[#e05a00] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(252,108,4,0.3)] transition-all duration-300"
            >
              Ver la estrategia <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
            >
              Contactar <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 4GO Academy Stats */}
      <section id="nosotros" className="bg-[#0a0a0a] py-20 md:py-28 border-t border-white/5">
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fc6c04]/10 text-[#fc6c04] text-sm font-semibold tracking-wide uppercase mb-4">
              Quienes somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Una de las mayores agencias digitales<br className="hidden md:block" /> de America Latina
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Daniel y Fernando Gemeo fundaron un ecosistema educativo digital que ha transformado
              la vida de miles de emprendedores desde 2018.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            <StatCard icon={Users} value="100K+" label="Estudiantes impactados" />
            <StatCard icon={TrendingUp} value="$5M+" label="En ventas digitales" />
            <StatCard icon={Star} value="1M+" label="Seguidores en redes" />
            <StatCard icon={Zap} value="100+" label="Eventos realizados" />
          </div>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Estrategia comprobada", desc: "Metodologias validadas con mas de 100 clientes en 12 paises de LATAM." },
              { icon: BarChart3, title: "Data-driven", desc: "Decisiones basadas en datos reales, metricas de conversion y ROI medible." },
              { icon: Heart, title: "Enfoque humano", desc: "Entendemos la marca personal y la conexion emocional con la audiencia." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <item.icon className="w-8 h-8 text-[#fc6c04] mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Analysis of Don Guz */}
      <section id="analisis" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Analisis del creador" title="Don Guz (@donguz17)" />
          <motion.div
            ref={analysisRef}
            initial="hidden"
            animate={analysisInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Left - Profile */}
            <motion.div variants={fadeUp}>
              <div className="bg-gradient-to-br from-[#f8f4f0] to-[#f0ebe5] rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#fc6c04] to-[#F4B503] flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">DG</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a0a0a]">Don Guz</h3>
                    <p className="text-[#666]">@donguz17</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-2xl font-bold text-[#0a0a0a]">462K</p>
                    <p className="text-xs text-[#888]">Seguidores</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-2xl font-bold text-[#0a0a0a]">2.1K+</p>
                    <p className="text-xs text-[#888]">Publicaciones</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-2xl font-bold text-[#0a0a0a]">Alta</p>
                    <p className="text-xs text-[#888]">Interaccion</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3">Posicionamiento actual</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Sanacion emocional", "Meditacion", "Biohacking", "Desarrollo personal", "Conciencia", "Bienestar integral"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#f5f0eb] text-[#555] rounded-full text-sm">{tag}</span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-3">Fortalezas</h3>
              <ul className="space-y-2">
                {[
                  "Marca personal muy clara y definida",
                  "Excelente conexion emocional con su audiencia",
                  "Alta frecuencia de publicacion consistente",
                  "Comunidad altamente comprometida",
                  "Mensaje transformacional poderoso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#444]">
                    <CheckCircle className="w-4 h-4 text-[#00983A] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Content Analysis */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-bold mb-4">Tipo de contenido actual</h3>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Video, label: "Reels cortos y reflexiones frente a camara" },
                  { icon: MessageCircle, label: "Storytelling personal y testimonios" },
                  { icon: Brain, label: "Explicaciones sobre mente, emociones y cuerpo" },
                  { icon: Heart, label: "Fragmentos de meditaciones guiadas" },
                  { icon: Sparkles, label: "Invitaciones a cursos y programas" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#fafafa] rounded-xl">
                    <item.icon className="w-5 h-5 text-[#fc6c04]" />
                    <span className="text-sm text-[#333]">{item.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-4">Gatillos psicologicos activos</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Autoridad", "Transformacion", "Curiosidad", "Esperanza", "Identificacion", "Prueba social", "Comunidad", "Dolor > Solucion"].map((g) => (
                  <div key={g} className="flex items-center gap-2 text-sm text-[#444]">
                    <div className="w-2 h-2 rounded-full bg-[#fc6c04]" />
                    {g}
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-4">Estilo de comunicacion</h3>
              <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-6 text-white">
                <p className="text-white/60 text-sm mb-4">Ganchos que ya utiliza con exito:</p>
                <div className="space-y-2">
                  {[
                    '"Sabias que...?"',
                    '"La mayoria de las personas..."',
                    '"Lo que nadie te explico..."',
                    '"Si quieres cambiar tu vida..."',
                    '"Esto esta enfermando tu cuerpo..."',
                  ].map((hook, i) => (
                    <p key={i} className="text-[#fc6c04] font-medium text-sm italic">{hook}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Black Friday Strategy */}
      <section id="estrategia" className="bg-[#fafafa] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Estrategia Black Friday"
            title="El plan para tu mayor Black Friday"
          />
          <motion.div
            ref={stratRef}
            initial="hidden"
            animate={stratInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: Target,
                title: "Fase 1: Pre-lanzamiento",
                period: "4 semanas antes",
                desc: "Construir anticipacion y desire. Contenido de alto valor que prepara la audiencia para la oferta.",
                color: "from-[#fc6c04] to-[#F4B503]",
              },
              {
                icon: Zap,
                title: "Fase 2: Lanzamiento",
                period: "Semana de Black Friday",
                desc: "Activacion masiva con urgencia, escasez y prueba social. Conversion maxima en 7 dias.",
                color: "from-[#e05a00] to-[#fc6c04]",
              },
              {
                icon: Gift,
                title: "Fase 3: Post-venta",
                period: "2 semanas despues",
                desc: "Recuperar carritos abandonados, upsell y crear embajadores de marca con la experiencia.",
                color: "from-[#00983A] to-[#04FB04]",
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-[#eee]"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-5`}>
                  <phase.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-[#fc6c04] uppercase tracking-widest">{phase.period}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{phase.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Strategy pillars */}
          <motion.div
            initial="hidden"
            animate={stratInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-[#eee]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fc6c04]/10 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-[#fc6c04]" />
                </div>
                Oferta Black Friday propuesta
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#fafafa] rounded-xl">
                  <p className="font-bold text-[#0a0a0a] mb-1">Programa principal con descuento exclusivo</p>
                  <p className="text-sm text-[#666]">Precio especial unico disponible solo durante Black Friday. Crear percepcion de oportunidad irrepetible.</p>
                </div>
                <div className="p-4 bg-[#fafafa] rounded-xl">
                  <p className="font-bold text-[#0a0a0a] mb-1">Bonos de tiempo limitado</p>
                  <p className="text-sm text-[#666]">Meditaciones exclusivas, sesion grupal en vivo, comunidad VIP por 90 dias, material complementario.</p>
                </div>
                <div className="p-4 bg-[#fafafa] rounded-xl">
                  <p className="font-bold text-[#0a0a0a] mb-1">Escasez real</p>
                  <p className="text-sm text-[#666]">Cupos limitados para sesion en vivo. Countdown timer en pagina de ventas. Cierre automatico de oferta.</p>
                </div>
                <div className="p-4 bg-[#fafafa] rounded-xl">
                  <p className="font-bold text-[#0a0a0a] mb-1">Garantia de transformacion</p>
                  <p className="text-sm text-[#666]">30 dias de garantia incondicional. Elimina la friccion de compra y aumenta confianza.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-[#eee]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#fc6c04]/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#fc6c04]" />
                </div>
                Canales de conversion
              </h3>
              <div className="space-y-4">
                {[
                  { channel: "Instagram Reels", pct: "40%", desc: "Contenido viral de alto impacto emocional con CTA directo" },
                  { channel: "Stories + Stickers", pct: "25%", desc: "Urgencia diaria, countdown, encuestas, testimonios en tiempo real" },
                  { channel: "Email Marketing", pct: "20%", desc: "Secuencia de 7 emails: anticipacion, apertura, recordatorios, cierre" },
                  { channel: "WhatsApp Broadcast", pct: "10%", desc: "Mensajes directos a lista segmentada de leads calificados" },
                  { channel: "Lives / Webinar", pct: "5%", desc: "Masterclass gratuita pre-BF con pitch al final" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm">{item.channel}</span>
                        <span className="text-[#fc6c04] font-bold text-sm">{item.pct}</span>
                      </div>
                      <div className="w-full bg-[#f0f0f0] rounded-full h-2 mb-1">
                        <div
                          className="bg-gradient-to-r from-[#fc6c04] to-[#F4B503] h-2 rounded-full transition-all duration-1000"
                          style={{ width: item.pct }}
                        />
                      </div>
                      <p className="text-xs text-[#888]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Strategy Timeline */}
      <section id="timeline" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Timeline de contenido" title="Semana a semana hacia el Black Friday" />
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <TimelineItem
              phase="Semana 1-2 | Consciencia"
              title="Despertar el dolor y el deseo"
              description="Contenido enfocado en hacer que la audiencia identifique sus problemas emocionales y fisicos."
              items={[
                'Reels: "5 senales de que tu cuerpo te esta pidiendo ayuda"',
                'Stories: Encuestas sobre habitos de bienestar y meditacion',
                "Carruseles educativos sobre neurociencia y emociones",
                "Testimonios de alumnos transformados (video corto)",
                "Live semanal: Q&A sobre sanacion emocional",
              ]}
              color="bg-[#fc6c04]"
            />
            <TimelineItem
              phase="Semana 3 | Anticipacion"
              title="Anunciar que algo grande viene"
              description="Crear curiosidad y registros para lista VIP con acceso anticipado."
              items={[
                '"Algo grande esta por llegar..." - teaser en reels y stories',
                "Formulario de registro para lista de espera VIP",
                "Countdown en stories (faltan X dias)",
                "Behind the scenes: preparando el programa especial",
                "Email de anticipacion a base de datos existente",
              ]}
              color="bg-[#F4B503]"
            />
            <TimelineItem
              phase="Semana 4 | Pre-lanzamiento"
              title="Abrir carrito para VIPs"
              description="Acceso anticipado exclusivo para la lista VIP con bonus extra."
              items={[
                "Apertura exclusiva 24h antes para lista VIP",
                "Bonus adicional solo para primeros 50 compradores",
                "Email secuencia de apertura: historia + oferta + urgencia",
                "Stories: capturas de ventas en tiempo real (prueba social)",
                "Reel emotivo: Por que cree este programa especial",
              ]}
              color="bg-[#e05a00]"
            />
            <TimelineItem
              phase="Semana 5 | Black Friday"
              title="Lanzamiento publico masivo"
              description="Maxima presion de ventas con urgencia real y cierre automatico."
              items={[
                "Apertura general con countdown de 7 dias",
                "1 reel diario con angulos diferentes (dolor, transformacion, testimonios, urgencia)",
                "3-5 stories diarios: FAQ, objeciones, prueba social, countdown",
                "Email diario: recordatorio + nuevo angulo + cierre",
                "Live de cierre: ultimas horas con Q&A en vivo",
                "WhatsApp broadcast a leads calificados",
              ]}
              color="bg-[#fc6c04]"
            />
            <TimelineItem
              phase="Semana 6 | Post-venta"
              title="Recuperacion y fidelizacion"
              description="Maximizar ingresos con carritos abandonados y crear embajadores."
              items={[
                "Secuencia de recuperacion de carritos abandonados (email + DM)",
                'Oferta "Last Chance" de 48h para indecisos',
                "Onboarding excepcional para nuevos alumnos",
                "Solicitar testimonios y reviews tempranos",
                "Planificar upsell para Enero (siguiente programa)",
              ]}
              color="bg-[#00983A]"
            />
          </motion.div>
        </div>
      </section>

      {/* Expected Results */}
      <section id="resultados" className="bg-[#0a0a0a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={resultsRef}
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fc6c04]/10 text-[#fc6c04] text-sm font-semibold tracking-wide uppercase mb-4">
                Proyeccion de resultados
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Lo que puedes esperar
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Basado en nuestra experiencia con mas de 100 creadores y las metricas actuales de tu perfil.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { value: "462K", label: "Seguidores actuales", sub: "Base de audiencia calida" },
                { value: "2-4%", label: "Tasa de conversion estimada", sub: "De leads a compradores" },
                { value: "3-5x", label: "ROI esperado", sub: "Retorno sobre inversion" },
                { value: "7 dias", label: "Ventana de ventas", sub: "Black Friday + Cyber Monday" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fc6c04] to-[#F4B503] mb-2">
                    {item.value}
                  </p>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#fc6c04]/10 to-transparent border border-[#fc6c04]/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Por que trabajar con 4GO Academy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Experiencia comprobada lanzando Black Fridays para creadores de contenido en LATAM",
                  "Equipo dedicado de estrategia, copywriting, diseno y media buying",
                  "Metodologia de lanzamiento validada con mas de $5M en ventas digitales",
                  "Entendemos el nicho de bienestar, desarrollo personal y educacion online",
                  "Soporte en tiempo real durante toda la campana de Black Friday",
                  "Analisis post-campana con insights accionables para futuras ventas",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00983A] mt-0.5 flex-shrink-0" />
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contacto" className="bg-white py-20 md:py-28">
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={stagger}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fc6c04]/10 text-[#fc6c04] text-sm font-semibold tracking-wide uppercase mb-4">
              Siguiente paso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-tight mb-6">
              Hagamos tu mayor<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc6c04] to-[#F4B503]">
                Black Friday
              </span>{" "}
              de todos los tiempos
            </h2>
            <p className="text-[#666] max-w-xl mx-auto mb-10 text-lg">
              Agenda una reunion con nuestro equipo para personalizar esta estrategia
              y comenzar a preparar tu campana.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:plataformas@4goacademy.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fc6c04] to-[#e05a00] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(252,108,4,0.3)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              plataformas@4goacademy.com
            </a>
            <a
              href="https://wa.me/5511998210067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#00983A] text-[#00983A] font-semibold rounded-xl hover:bg-[#00983A] hover:text-white transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 text-sm text-[#999]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Respuesta en 24h</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#ccc]" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Presentacion confidencial</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fc6c04] to-[#e05a00] flex items-center justify-center">
              <span className="text-white font-bold text-xs">4GO</span>
            </div>
            <span className="text-white/50 text-sm">4GO Academy &middot; Agencia Digital</span>
          </div>
          <p className="text-white/30 text-xs">
            &copy; 2026 4GO Academy. Presentacion exclusiva y confidencial para Don Guz.
          </p>
        </div>
      </footer>
    </div>
  )
}
