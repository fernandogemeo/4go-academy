import { useInView } from "@/hooks/useInView"
import { ShieldCheck } from "lucide-react"

const GuaranteeSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section id="garantia" className="py-20 md:py-28 bg-[#080808]">
      <div className="container mx-auto px-4 max-w-4xl" ref={ref}>
        <div
          className={`flex flex-col md:flex-row items-center gap-10 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
              Sin riesgo
            </span>
            <h2
              className="font-outfit font-black text-white uppercase tracking-fire leading-none mt-3 mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Garantía Incondicional{" "}
              <span className="text-[#fc6c04]">7 días</span>
            </h2>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#fc6c04]/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#fc6c04]" />
              </div>
              <p className="font-outfit text-base text-white/70 leading-relaxed">
                Si por alguna razón no te identificas con la Formación o te arrepientes, tienes la <strong className="text-white">garantía incondicional de 7 días.</strong> Accede a nuestra plataforma y si no te gusta, solo pide la devolución de tu dinero dentro de los primeros 7 días. Sin preguntas, sin complicaciones.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://4goacademy.com/wp-content/uploads/2026/03/Pagina-de-Vendas-Excel-e-IA.png"
              alt="Garantía 7 días"
              className="rounded-2xl max-w-sm w-full"
              style={{ border: "2px solid rgba(255,255,255,0.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteeSection
