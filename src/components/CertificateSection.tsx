import { useInView } from "@/hooks/useInView"

const CertificateSection = () => {
  const { ref, isInView } = useInView()

  return (
    <section className="py-20 md:py-28 bg-[#fc6c04]">
      <div className="container mx-auto px-4 text-center" ref={ref}>
        <span className="font-outfit text-sm font-bold uppercase tracking-fire text-white/70">
          Y al final, recibes…
        </span>
        <h2
          className="font-outfit font-black text-[#080808] uppercase tracking-fire leading-none mt-3 mb-4"
          style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
        >
          ¡Tu certificado oficial de finalización!
        </h2>
        <p className="font-outfit text-[#080808]/80 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          Al completar el programa, recibirás un certificado que valida tu aprendizaje y te abre puertas a nuevas oportunidades profesionales, académicas y personales.
        </p>

        <div
          className={`max-w-sm mx-auto bg-white rounded-2xl p-12 text-center ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ border: "2px solid rgba(4,25,45,0.15)" }}
        >
          <div className="text-6xl mb-4">🎓</div>
          <p className="font-outfit font-black text-[#080808] text-xl uppercase tracking-fire">
            Certificado Oficial
          </p>
          <p className="font-outfit text-[#080808]/50 text-sm mt-2 uppercase tracking-fire">
            IA University · 2026
          </p>
          <div className="mt-4 h-0.5 bg-[#fc6c04]/30 rounded-full" />
          <p className="font-outfit text-[#080808]/40 text-xs mt-3">
            Formación: IA para Negocios
          </p>
        </div>
      </div>
    </section>
  )
}

export default CertificateSection
