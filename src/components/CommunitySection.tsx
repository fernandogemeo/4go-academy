import { useInView } from "@/hooks/useInView"
import { Users, MessageCircle, Flame, Handshake, TrendingUp, Heart } from "lucide-react"

const pillars = [
  {
    icon: Handshake,
    title: "Nadie se queda atrás",
    desc: "Avanzamos juntos. Si tienes una duda, alguien ya la tuvo — y la comunidad está ahí para resolverla.",
  },
  {
    icon: Flame,
    title: "Uno contagia al otro",
    desc: "Ver a otros implementar IA en sus negocios te empuja a hacer lo mismo. El progreso colectivo es tu mayor motivación.",
  },
  {
    icon: TrendingUp,
    title: "Comparte tus avances",
    desc: "Cada victoria cuenta. Compartir resultados reales acelera tu aprendizaje y el de toda la comunidad.",
  },
  {
    icon: Heart,
    title: "Conexiones reales",
    desc: "Más que un grupo de estudio — una red de emprendedores que se apoyan, colaboran y crecen juntos.",
  },
]

const CommunitySection = () => {
  const { ref, isInView } = useInView(0.08)

  return (
    <section className="py-20 md:py-28 bg-[#ffffff] relative overflow-hidden">

      {/* Decorative bg blob */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, rgba(252,108,4,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Comunidad exclusiva
          </span>
          <h2
            className="font-outfit font-black text-[#04192D] uppercase tracking-fire leading-none mt-3 max-w-3xl mx-auto"
            style={{ fontSize: "clamp(26px, 4vw, 54px)" }}
          >
            No caminas solo.{" "}
            <span className="text-[#fc6c04]">Vamos todos juntos.</span>
          </h2>
          <p
            className="font-outfit text-[#04192D]/60 mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
          >
            Únete a una comunidad activa de emprendedores y profesionales que están transformando
            sus negocios con IA. Comparte avances, resuelve dudas y crea conexiones que van
            más allá del programa.
          </p>
        </div>

        {/* Main block */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">

          {/* Left: WhatsApp card */}
          <div
            className={`rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden ${
              isInView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: "0s",
              animationFillMode: "both",
              background: "linear-gradient(135deg, #04192D 0%, #071f36 100%)",
              border: "1.5px solid rgba(252,108,4,0.25)",
            }}
          >
            {/* Bg number decoration */}
            <span
              aria-hidden="true"
              className="absolute bottom-4 right-6 font-outfit font-black text-white/[0.04] select-none pointer-events-none leading-none"
              style={{ fontSize: "140px" }}
            >
              WA
            </span>

            <div className="relative z-10">
              {/* WhatsApp icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <MessageCircle className="w-7 h-7" style={{ color: "#25D366" }} />
              </div>

              <span className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04]/80">
                Incluido en tu formación
              </span>
              <h3
                className="font-outfit font-black text-white uppercase tracking-fire leading-tight mt-2 mb-4"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                Grupo Privado de Estudiantes en WhatsApp
              </h3>
              <p className="font-outfit text-white/55 leading-relaxed" style={{ fontSize: "15px" }}>
                Un espacio exclusivo donde la comunidad comparte implementaciones,
                resuelve dudas en tiempo real y celebra cada avance juntos.
              </p>
            </div>

            {/* Stats row */}
            <div className="relative z-10 flex gap-6 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <p className="font-outfit font-black text-white" style={{ fontSize: "28px" }}>+10K</p>
                <p className="font-outfit text-xs text-white/45 uppercase tracking-fire mt-0.5">Miembros activos</p>
              </div>
              <div style={{ width: "1px", background: "rgba(255,255,255,0.08)" }} />
              <div>
                <p className="font-outfit font-black text-[#fc6c04]" style={{ fontSize: "28px" }}>24/7</p>
                <p className="font-outfit text-xs text-white/45 uppercase tracking-fire mt-0.5">Siempre disponible</p>
              </div>
              <div style={{ width: "1px", background: "rgba(255,255,255,0.08)" }} />
              <div>
                <p className="font-outfit font-black text-white" style={{ fontSize: "28px" }}>100%</p>
                <p className="font-outfit text-xs text-white/45 uppercase tracking-fire mt-0.5">Comunidad real</p>
              </div>
            </div>
          </div>

          {/* Right: pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
                    isInView ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.1 + i * 0.1}s`,
                    animationFillMode: "both",
                    background: i % 2 === 0 ? "#f9f9f9" : "#fff",
                    border: "1px solid rgba(4,25,45,0.08)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(252,108,4,0.1)" }}
                  >
                    <Icon className="w-5 h-5 text-[#fc6c04]" />
                  </div>
                  <div>
                    <h4
                      className="font-outfit font-bold text-[#04192D] leading-tight mb-1"
                      style={{ fontSize: "14px" }}
                    >
                      {p.title}
                    </h4>
                    <p className="font-outfit text-[#04192D]/55 leading-relaxed" style={{ fontSize: "12px" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom quote banner */}
        <div
          className={`max-w-5xl mx-auto mt-6 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{
            animationDelay: "0.55s",
            animationFillMode: "both",
            background: "linear-gradient(90deg, rgba(252,108,4,0.08) 0%, rgba(252,108,4,0.03) 100%)",
            border: "1px solid rgba(252,108,4,0.18)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(252,108,4,0.12)" }}
          >
            <Users className="w-6 h-6 text-[#fc6c04]" />
          </div>
          <p
            className="font-outfit font-semibold text-[#04192D] text-center md:text-left leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.5vw, 17px)" }}
          >
            "La comunidad no es un bonus — es parte del aprendizaje. Cuando ves a otros implementar IA
            en sus negocios,{" "}
            <span className="text-[#fc6c04] font-bold">
              tú también lo haces.
            </span>
            "
          </p>
        </div>

      </div>
    </section>
  )
}

export default CommunitySection
