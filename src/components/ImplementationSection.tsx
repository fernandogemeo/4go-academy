import { useInView } from "@/hooks/useInView"
import { Target, Zap, FileText, Bot, DollarSign } from "lucide-react"

const weeks = [
  {
    number: "01",
    label: "Semana 1",
    title: "Estrategia de Marketing",
    desc: "Auditamos tu negocio y diseñamos una estrategia de marketing con IA totalmente personalizada. Saldrás con un plan accionable listo para ejecutar.",
    icon: Target,
    color: "#fc6c04",
  },
  {
    number: "02",
    label: "Semana 2",
    title: "Automatizaciones",
    desc: "Implementamos los primeros flujos automáticos en tu operación diaria. Menos trabajo manual, más tiempo dedicado a lo que realmente genera ingresos.",
    icon: Zap,
    color: "#fc6c04",
  },
  {
    number: "03",
    label: "Semana 3",
    title: "Creación de Contenido",
    desc: "Construimos tu sistema de producción de contenido con IA. Genera más, en menos tiempo y con mayor calidad que tu competencia.",
    icon: FileText,
    color: "#fc6c04",
  },
  {
    number: "04",
    label: "Semana 4",
    title: "Agentes IA",
    desc: "Creamos agentes de inteligencia artificial personalizados para tu negocio. Tu equipo virtual trabajando de forma autónoma las 24 horas.",
    icon: Bot,
    color: "#fc6c04",
  },
  {
    number: "05",
    label: "Semana 5",
    title: "Monetización con IA",
    desc: "Cerramos el ciclo convirtiendo todo lo implementado en nuevas fuentes de ingresos reales y sostenibles para tu negocio.",
    icon: DollarSign,
    color: "#fc6c04",
  },
]

const ImplementationSection = () => {
  const { ref, isInView } = useInView(0.08)

  return (
    <section className="py-20 md:py-28 bg-[#080808] relative overflow-hidden">

      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-outfit font-black text-white/[0.02] uppercase leading-none"
          style={{ fontSize: "clamp(120px, 25vw, 320px)" }}
        >
          LIVE
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Implementación en vivo · 5 semanas
          </span>
          <h2
            className="font-outfit font-black text-white uppercase tracking-fire leading-none mt-3 max-w-4xl mx-auto"
            style={{ fontSize: "clamp(26px, 4vw, 56px)" }}
          >
            Te acompañamos semana a semana{" "}
            <span className="text-[#fc6c04]">en tu negocio.</span>
          </h2>
          <p
            className="font-outfit text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
          >
            Cada semana trabajamos contigo, mano a mano, para implementar una nueva pieza de IA
            directamente en tu empresa. Solo este acompañamiento ya vale todo el curso.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {weeks.map((week, i) => {
            const Icon = week.icon
            return (
              <div
                key={i}
                className={`relative flex gap-6 md:gap-10 ${i < weeks.length - 1 ? "pb-0" : ""} ${
                  isInView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.13}s`, animationFillMode: "both" }}
              >
                {/* Left: number + line */}
                <div className="flex flex-col items-center shrink-0" style={{ width: "56px" }}>
                  {/* Circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={{
                      background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
                      boxShadow: "0 0 0 4px rgba(252,108,4,0.15), 0 8px 24px rgba(252,108,4,0.35)",
                    }}
                  >
                    <span className="font-outfit font-black text-white" style={{ fontSize: "16px" }}>
                      {week.number}
                    </span>
                  </div>
                  {/* Connector line */}
                  {i < weeks.length - 1 && (
                    <div
                      className="w-px flex-1 mt-0"
                      style={{
                        minHeight: "60px",
                        background: "linear-gradient(to bottom, rgba(252,108,4,0.5) 0%, rgba(252,108,4,0.1) 100%)",
                      }}
                    />
                  )}
                </div>

                {/* Right: card */}
                <div
                  className={`flex-1 rounded-2xl p-6 md:p-8 mb-5 md:mb-6 group cursor-default transition-all duration-300 hover:-translate-y-0.5`}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(252,108,4,0.20)",
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(252,108,4,0.07)"
                    ;(e.currentTarget as HTMLElement).style.border = "1px solid rgba(252,108,4,0.45)"
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"
                    ;(e.currentTarget as HTMLElement).style.border = "1px solid rgba(252,108,4,0.20)"
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04]/70">
                        {week.label}
                      </span>
                      <h3
                        className="font-outfit font-black text-white uppercase tracking-fire leading-tight mt-1"
                        style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
                      >
                        {week.title}
                      </h3>
                    </div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-1"
                      style={{ background: "rgba(252,108,4,0.12)" }}
                    >
                      <Icon className="w-5 h-5 text-[#fc6c04]" />
                    </div>
                  </div>
                  <p className="font-outfit text-white/55 leading-relaxed" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
                    {week.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00983A] shrink-0" />
                    <span className="font-outfit text-xs font-semibold uppercase tracking-fire text-white/40">
                      Sesión en vivo · Mano a mano
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom premium callout */}
        <div
          className={`max-w-3xl mx-auto mt-4 rounded-2xl p-7 md:p-9 text-center ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            animationDelay: "0.7s",
            animationFillMode: "both",
            background: "linear-gradient(135deg, rgba(252,108,4,0.12) 0%, rgba(252,108,4,0.04) 100%)",
            border: "1.5px solid rgba(252,108,4,0.35)",
          }}
        >
          <span className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04]">
            Resultado final
          </span>
          <p
            className="font-outfit font-black text-white uppercase tracking-fire leading-tight mt-2"
            style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
          >
            Al terminar las 5 semanas, tu negocio opera con IA.
          </p>
          <p className="font-outfit text-white/55 mt-3 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "14px" }}>
            No solo aprendes — implementas. Cada sesión deja una solución real funcionando en tu empresa.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ImplementationSection
