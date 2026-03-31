import { useInView } from "@/hooks/useInView"

const stats = [
  { number: "+10.000", label: "Alumnos Satisfechos" },
  { number: "18h",     label: "de Formación Estructurada" },
  { number: "5",       label: "Sesiones en Vivo de Implementación" },
  { number: "15+",     label: "Herramientas de IA que Dominarás" },
  { number: "100%",    label: "Online" },
]

const ImpactNumbers = () => {
  const { ref, isInView } = useInView(0.1)

  return (
    <section className="bg-[#fc6c04] py-0">
      <div ref={ref}>
        <div className="container mx-auto px-4 pt-10 pb-2 text-center">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-white/80">
            Resultados reales
          </span>
          <h2
            className="font-outfit font-black text-white uppercase tracking-fire mt-3 mb-2"
            style={{ fontSize: "clamp(26px, 3vw, 34px)" }}
          >
            Números que hablan por sí solos.
          </h2>
          <p
            className="font-outfit text-white/80 mb-8 max-w-xl mx-auto"
            style={{ fontSize: "clamp(14px, 1.5vw, 17px)" }}
          >
            La Formación IA para Negocios ya transformó miles de emprendedores en todo el mundo hispanohablante.
          </p>
        </div>

        {/* Stats list */}
        <div className="container mx-auto px-4 pb-16">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div
                className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 cursor-default
                  transition-transform duration-300 ease-out group-hover:translate-x-4
                  ${isInView ? "animate-slide-in-right" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "both" }}
              >
                <p
                  className="font-outfit font-black text-white uppercase tracking-fire leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
                >
                  {stat.number}
                </p>
                <p
                  className="font-outfit font-normal text-white/90 uppercase tracking-fire"
                  style={{ fontSize: "clamp(16px, 1.8vw, 26px)" }}
                >
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <hr className="border-white/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactNumbers
