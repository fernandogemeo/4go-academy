import { useInView } from "@/hooks/useInView"
import { MousePointer2, Smile, Sprout, Shield } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const steps = [
  {
    num: "01",
    title: "Qué es la IA y para qué sirve",
    desc: "Explicado sin tecnicismos. Lenguaje simple, ejemplos del día a día.",
  },
  {
    num: "02",
    title: "Cómo navegar las herramientas",
    desc: "Botón por botón. Pantalla por pantalla. A tu ritmo, sin prisa.",
  },
  {
    num: "03",
    title: "Tu primer prompt y primera automatización",
    desc: "En pocas sesiones ya estarás aplicando IA en algo concreto de tu vida.",
  },
  {
    num: "04",
    title: "Listo para el curso principal",
    desc: "Con la base sólida, entras al programa completo con confianza total.",
  },
]

const NivelacionSection = () => {
  const { ref, isInView } = useInView(0.08)

  return (
    <section className="relative overflow-hidden" style={{ background: "#FAFAF9" }}>

      {/* Top divider wave */}
      <div className="w-full overflow-hidden leading-[0]" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "48px" }}>
          <path d="M0 48 C360 0 1080 0 1440 48 L1440 0 L0 0 Z" fill="#080808" />
        </svg>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4" ref={ref}>

          {/* ── Top label ── */}
          <div className="text-center mb-12 md:mb-16">
            <span
              className="inline-flex items-center gap-2 font-outfit text-xs font-bold uppercase tracking-fire px-4 py-2 rounded-full"
              style={{ background: "rgba(252,108,4,0.10)", color: "#fc6c04" }}
            >
              <Sprout className="w-3.5 h-3.5" />
              Módulo exclusivo · Nivelación para principiantes
            </span>

            <h2
              className="font-outfit font-black text-[#080808] uppercase tracking-fire leading-none mt-5 max-w-4xl mx-auto"
              style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
            >
              ¿No sabes nada de tecnología?{" "}
              <span className="text-[#fc6c04]">Bienvenido.</span>
            </h2>

            <p
              className="font-outfit text-[#080808]/60 mt-5 max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
            >
              Si tienes 40, 50 o 70 años y la tecnología no es lo tuyo, esto es exactamente para ti.
              Sabemos lo importante que es aprender a un ritmo tranquilo, sin sentirte perdido.
              Por eso creamos este módulo especial: <strong className="text-[#080808]/80">para que nadie empiece desde el miedo.</strong>
            </p>
          </div>

          {/* ── Main layout ── */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

            {/* Left: photo */}
            <div
              className={`relative ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0s", animationFillMode: "both" }}
            >
              {/* Glow ring behind image */}
              <div
                className="absolute inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(252,108,4,0.18) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Photo container */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 32px 64px -16px rgba(4,25,45,0.22)",
                  border: "2px solid rgba(252,108,4,0.20)",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src="/nivelacion-bg.jpg"
                  alt="Persona mayor aprendiendo tecnología con una sonrisa"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Subtle bottom gradient so badges are readable */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(4,25,45,0.10) 0%, transparent 40%, rgba(4,25,45,0.45) 100%)",
                  }}
                />
              </div>

              {/* Floating badge — bottom right */}
              <div
                className="absolute bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0_12px_32px_-8px_rgba(4,25,45,0.35)]"
                style={{ background: "#080808", border: "1px solid rgba(252,108,4,0.30)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(252,108,4,0.15)" }}
                >
                  <MousePointer2 className="w-4 h-4 text-[#fc6c04]" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-white" style={{ fontSize: "12px" }}>Botón por botón</p>
                  <p className="font-outfit text-white/50" style={{ fontSize: "11px" }}>A tu ritmo. Sin prisa.</p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div
                className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2.5 rounded-xl shadow-[0_8px_24px_-4px_rgba(4,25,45,0.20)]"
                style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(4,25,45,0.08)" }}
              >
                <Smile className="w-4 h-4 text-[#fc6c04] shrink-0" />
                <span className="font-outfit text-xs font-semibold text-[#080808]">Para cualquier edad</span>
              </div>
            </div>

            {/* Right: content + steps */}
            <div
              className={`flex flex-col gap-4 mt-8 lg:mt-0 ${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.15s", animationFillMode: "both" }}
            >
              <p
                className="font-outfit font-bold text-[#080808] leading-tight"
                style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
              >
                Lo que aprenderás en el módulo de nivelación:
              </p>

              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "white",
                    border: "1px solid rgba(4,25,45,0.08)",
                    boxShadow: "0 2px 12px -4px rgba(4,25,45,0.06)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-outfit font-black"
                    style={{
                      background: "rgba(252,108,4,0.10)",
                      color: "#fc6c04",
                      fontSize: "13px",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-[#080808]" style={{ fontSize: "15px" }}>
                      {step.title}
                    </p>
                    <p className="font-outfit text-[#080808]/55 mt-1 leading-relaxed" style={{ fontSize: "13px" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Reassurance strip */}
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-2xl mt-1"
                style={{
                  background: "rgba(252,108,4,0.06)",
                  border: "1px solid rgba(252,108,4,0.18)",
                }}
              >
                <Shield className="w-5 h-5 text-[#fc6c04] shrink-0" />
                <p className="font-outfit text-[#080808]/70 leading-snug" style={{ fontSize: "13px" }}>
                  <strong className="text-[#080808]">Nunca pararás de aprender.</strong>{" "}
                  Cada clase está pensada para que salgas con algo concreto aplicado — sin importar tu edad o experiencia.
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div
            className={`text-center mt-14 md:mt-16 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 font-outfit text-base font-bold px-10 py-4 rounded-[70px] text-white uppercase tracking-fire transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
                boxShadow: "0 8px 32px -8px rgba(252,108,4,0.55)",
              }}
            >
              Quiero empezar desde cero
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 16 16" fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="font-outfit text-sm text-[#080808]/45 mt-3">
              Incluido en tu formación · Sin costo adicional
            </p>
          </div>

        </div>
      </div>

      {/* Bottom divider wave */}
      <div className="w-full overflow-hidden leading-[0]" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: "48px" }}>
          <path d="M0 0 C360 48 1080 48 1440 0 L1440 48 L0 48 Z" fill="#080808" />
        </svg>
      </div>

    </section>
  )
}

export default NivelacionSection
