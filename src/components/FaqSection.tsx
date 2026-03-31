import { useState } from "react"
import { useInView } from "@/hooks/useInView"
import { ChevronDown } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/N95283619Y?off=hyfkll71&checkoutMode=10"

const faqs = [
  {
    q: "¿Necesito experiencia previa en tecnología?",
    a: "No. La formación fue diseñada desde cero para personas sin conocimientos técnicos. Hay un módulo de nivelación para principiantes que te prepara antes de entrar al contenido principal.",
  },
  {
    q: "¿Cuánto tiempo tengo acceso al contenido?",
    a: "Puedes aprender a tu ritmo y revisitar el contenido cuantas veces necesites.",
  },
  {
    q: "¿Las sesiones en vivo son grabadas?",
    a: "Sí. Si no puedes asistir en vivo, todas las sesiones quedan grabadas en tu Portal del Estudiante para que las veas cuando quieras.",
  },
  {
    q: "¿El certificado tiene validez internacional?",
    a: "El certificado es emitido por IA University y tiene reconocimiento en el mercado hispanohablante. Es una credencial que puedes incluir en tu LinkedIn y portafolio profesional.",
  },
  {
    q: "¿Puedo pedir reembolso si no me gusta?",
    a: "Sí. Tienes 7 días de garantía incondicional. Si dentro de los primeros 7 días no estás satisfecho, devolvemos tu dinero sin hacer preguntas.",
  },
  {
    q: "¿Para qué tipo de negocios funciona?",
    a: "Para cualquier tipo: freelancers, consultores, dueños de PYMES, agencias, coaches, profesionales de cualquier sector. Las herramientas de IA se adaptan a cualquier modelo de negocio.",
  },
]

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, isInView } = useInView()

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#ffffff]">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Preguntas frecuentes
          </span>
          <h2
            className="font-outfit font-black text-[#04192D] uppercase tracking-fire leading-none mt-3"
            style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
          >
            Resuelve tus dudas.
          </h2>
        </div>

        {/* Accordion */}
        <div className={`space-y-2 ${isInView ? "animate-fade-up" : "opacity-0"}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#04192D]/15 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#04192D]/5 transition-colors"
              >
                <span className="font-outfit text-base font-semibold text-[#04192D] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#fc6c04] shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 border-t border-[#04192D]/10">
                  <p className="font-outfit text-sm text-[#04192D]/65 leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-outfit text-sm text-[#04192D]/60 mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#fc6c04] font-outfit text-sm font-bold px-8 py-3.5 rounded-[70px] text-white hover:bg-[#e05a00] transition-colors uppercase tracking-fire"
          >
            Quiero inscribirme
          </a>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
