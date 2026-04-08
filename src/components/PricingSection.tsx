import { useInView } from "@/hooks/useInView"
import { Check } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const included = [
  "18 horas de formación en IA para Negocios",
  "Sesiones En Vivo de Implementación (Semanas 1–5)",
  "Curso de nivelación para principiantes",
  "Certificación de finalización avalada por IA University",
  "Acceso a grupo privado de estudiantes en WhatsApp",
  "Asistente creador de GPTs",
  "Asistente creador de guiones para videos virales",
]

const PricingSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section id="precio" className="py-20 md:py-28 bg-[#ffffff]">
      <div className="container mx-auto px-4" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Oferta especial
          </span>
          <h2
            className="font-outfit font-black text-[#080808] uppercase tracking-fire leading-none mt-3"
            style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
          >
            Elige comenzar hoy.
          </h2>
        </div>

        {/* Card */}
        <div
          className={`max-w-lg mx-auto rounded-2xl p-8 md:p-10 bg-[#080808] ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ border: "2px solid #fc6c04" }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00983A] shrink-0" />
            <span className="font-outfit text-xs uppercase tracking-fire text-white/55">
              Cupos disponibles · Pago único
            </span>
          </div>

          {/* Price */}
          <p className="font-outfit font-bold text-white/40 text-2xl line-through mb-1">$350</p>
          <p
            className="font-outfit font-black text-white leading-none mb-1"
            style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
          >
            $<span className="text-[#fc6c04]">250</span>
          </p>


          <hr className="border-white/10 mb-6" />

          {/* Features */}
          <div className="space-y-3 mb-8">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#fc6c04]" />
                <span className="font-outfit text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-outfit text-base font-bold py-4 rounded-[70px] transition-all uppercase tracking-fire bg-[#fc6c04] text-white hover:bg-[#e05a00]"
          >
            QUIERO ASEGURAR MI CUPO
          </a>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
