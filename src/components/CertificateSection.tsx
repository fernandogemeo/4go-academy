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
          className="font-outfit font-black text-[#04192D] uppercase tracking-fire leading-none mt-3 mb-4"
          style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
        >
          ¡Tu certificado oficial de finalización!
        </h2>
        <p className="font-outfit text-[#04192D]/80 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          Al completar el programa, recibirás un certificado que valida tu aprendizaje y te abre puertas a nuevas oportunidades profesionales, académicas y personales.
        </p>

        <div
          className={`max-w-2xl mx-auto ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <img
            src="/certificado-oficial.jpg"
            alt="Certificado Oficial - Formación IA para Negocios"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CertificateSection
