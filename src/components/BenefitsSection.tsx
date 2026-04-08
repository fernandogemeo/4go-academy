import { useInView } from "@/hooks/useInView"
import { TrendingUp, DollarSign, Globe, Clock, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Impulsa tu negocio en 2026",
    desc: "Dominar la IA es uno de los puntos principales para optimizar costos, aumentar rentabilidad y escalar tu operación.",
  },
  {
    icon: DollarSign,
    title: "Reduce costos operativos",
    desc: "Automatiza tareas repetitivas y libera tu tiempo para actividades de alto impacto que generan ingresos reales.",
  },
  {
    icon: Globe,
    title: "Aplica en cualquier industria",
    desc: "No importa tu sector: las herramientas de IA que aprenderás funcionan para negocios de todo tipo y tamaño.",
  },
  {
    icon: Clock,
    title: "Resultados desde el primer módulo",
    desc: "El enfoque es 100% práctico. En las primeras horas ya tendrás procesos automatizados en tu negocio.",
  },
  {
    icon: Users,
    title: "Comunidad activa de emprendedores",
    desc: "Conéctate con una red de más de 10.000 alumnos que comparten estrategias y oportunidades de negocio.",
  },
  {
    icon: Zap,
    title: "Ventaja competitiva real",
    desc: "Quien domina la IA hoy tiene una ventaja decisiva sobre la competencia que aún no adoptó estas herramientas.",
  },
]

const BenefitsSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section className="py-20 md:py-28 bg-[#080808]">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Por qué aprender IA ahora
          </span>
          <h2
            className="font-outfit font-black text-white uppercase tracking-fire leading-tight mt-3 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
          >
            Dominar la IA es el punto clave para tu negocio en 2026.
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`p-7 rounded-2xl bg-white border border-white/20 hover:shadow-card transition-all duration-300 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#fc6c04]/15 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-[#fc6c04]" />
              </div>
              <h3
                className="font-outfit font-bold text-[#080808] mb-2"
                style={{ fontSize: "18px" }}
              >
                {b.title}
              </h3>
              <p className="font-outfit text-sm text-[#080808]/65 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
