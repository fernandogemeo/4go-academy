import { useInView } from "@/hooks/useInView"
import { Video, Radio, Rocket, Award, MessageCircle, Sparkles } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "18 horas de formación estructurada",
    desc: "Contenido completo dividido en módulos progresivos para que aprendas a tu ritmo, cuando y donde quieras.",
  },
  {
    icon: Radio,
    title: "Sesiones en vivo de implementación",
    desc: "Semanas 1 a 5 con sesiones semanales en vivo donde aplicamos todo lo aprendido en casos reales.",
  },
  {
    icon: Rocket,
    title: "Módulo de nivelación para principiantes",
    desc: "Si partes desde cero, este módulo te prepara antes de entrar al contenido principal.",
  },
  {
    icon: Award,
    title: "Certificación oficial",
    desc: "Certificado de finalización avalado por IA University, reconocido internacionalmente.",
  },
  {
    icon: MessageCircle,
    title: "Acceso a comunidad privada",
    desc: "Grupo privado de estudiantes en WhatsApp con emprendedores y profesionales activos.",
  },
  {
    icon: Sparkles,
    title: "Herramientas de IA exclusivas",
    desc: "Asistente creador de GPTs y asistente creador de guiones para videos virales.",
  },
]

const FeaturesSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section id="formacion" className="py-20 md:py-28 bg-[#04192D]">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Al adquirir la formación
          </span>
          <h2
            className="font-outfit font-black text-white uppercase tracking-fire leading-none mt-3"
            style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
          >
            Todo lo que recibes.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-5 md:p-7 flex flex-col transition-all duration-300 bg-[#141414] ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                border: "2px solid rgba(252,108,4,0.25)",
              }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#fc6c04]/15 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-[#fc6c04]" />
              </div>
              <h3
                className="font-outfit font-bold text-white mb-2"
                style={{ fontSize: "18px" }}
              >
                {f.title}
              </h3>
              <p className="font-outfit text-sm text-white/55 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
