import { useInView } from "@/hooks/useInView"
import { BookOpen, Briefcase, Globe } from "lucide-react"

const reasons = [
  {
    icon: BookOpen,
    title: "Didáctica y CERO prerrequisitos",
    desc: "Aprende desde cero, sin conocimientos previos en tecnología. Todo explicado paso a paso con lenguaje claro y directo.",
  },
  {
    icon: Briefcase,
    title: "Ejemplos reales y prácticos desde el principio",
    desc: "Cada módulo incluye casos de uso reales aplicados a negocios como el tuyo. Sin teoría innecesaria, solo práctica aplicable.",
  },
  {
    icon: Globe,
    title: "Se puede aplicar en cualquier zona",
    desc: "Las herramientas y estrategias funcionan independientemente de tu país, industria o tamaño de negocio.",
  },
]

const WhyDifferentSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section id="diferente" className="py-20 md:py-28 bg-[#fc6c04]">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-white/70">
            Nuestra diferencia
          </span>
          <h2
            className="font-outfit font-black text-[#080808] uppercase tracking-fire leading-tight mt-3 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
          >
            ¿Por qué la Formación IA para Negocios es realmente diferente?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`p-5 md:p-7 rounded-2xl bg-white border border-white/20 hover:shadow-card transition-all duration-300 ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#fc6c04]/15 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-[#fc6c04]" />
              </div>
              <h3
                className="font-outfit font-bold text-[#080808] mb-2"
                style={{ fontSize: "18px" }}
              >
                {r.title}
              </h3>
              <p className="font-outfit text-sm text-[#080808]/65 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyDifferentSection
