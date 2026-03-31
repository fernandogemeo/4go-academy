import { useInView } from "@/hooks/useInView"
import { Heart, Bookmark, Share2, MessageCircle, Zap, Play } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/N95283619Y?off=hyfkll71&checkoutMode=10"

/* Floating metric bubbles */
const floaters = [
  { icon: "❤️",  label: "+128K",  top: "8%",  left: "12%", delay: "0s",   size: "lg" },
  { icon: "🔖",  label: "+94K",   top: "14%", right: "10%",delay: "0.6s", size: "md" },
  { icon: "↗️",  label: "+47K",   top: "55%", left: "6%",  delay: "1.1s", size: "md" },
  { icon: "💬",  label: "+31K",   top: "65%", right: "8%", delay: "0.3s", size: "sm" },
  { icon: "❤️",  label: "+9.2K",  top: "78%", left: "20%", delay: "1.5s", size: "sm" },
  { icon: "🔖",  label: "+18K",   top: "30%", right: "5%", delay: "0.9s", size: "sm" },
]

/* Spark dots scattered around */
const sparks = [
  { top: "5%",  left: "35%",  delay: "0s",    dur: "2.4s" },
  { top: "10%", left: "65%",  delay: "0.5s",  dur: "3.1s" },
  { top: "82%", left: "50%",  delay: "1.2s",  dur: "2.7s" },
  { top: "45%", left: "3%",   delay: "0.8s",  dur: "3.5s" },
  { top: "40%", right: "3%",  delay: "1.8s",  dur: "2.2s" },
  { top: "92%", left: "80%",  delay: "0.3s",  dur: "3.8s" },
  { top: "22%", left: "28%",  delay: "2.1s",  dur: "2.9s" },
  { top: "70%", right: "18%", delay: "1.4s",  dur: "3.3s" },
]

const ViralAgentSection = () => {
  const { ref, isInView } = useInView(0.07)

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#04192D" }}>

      {/* ── Background radial glow ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "900px", height: "600px",
          background: "radial-gradient(ellipse at center, rgba(252,108,4,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      {/* ── Floating spark dots ── */}
      {sparks.map((s, i) => (
        <span key={i} aria-hidden="true" className="absolute rounded-full pointer-events-none" style={{
          width: 4, height: 4,
          top: s.top, left: (s as any).left, right: (s as any).right,
          background: "#fc6c04",
          boxShadow: "0 0 8px rgba(252,108,4,0.8)",
          animation: `viralSpark ${s.dur} ease-in-out infinite`,
          animationDelay: s.delay,
        }} />
      ))}

      {/* ── Floating metric bubbles ── */}
      {floaters.map((f, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            top: f.top, left: (f as any).left, right: (f as any).right,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            animation: `viralFloat ${3.5 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
          }}
        >
          <span style={{ fontSize: f.size === "lg" ? 18 : f.size === "md" ? 15 : 13 }}>{f.icon}</span>
          <span className="font-outfit font-black text-white" style={{ fontSize: f.size === "lg" ? 15 : f.size === "md" ? 13 : 11 }}>{f.label}</span>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* ── Header ── */}
        <div className={`text-center mb-14 md:mb-18 ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationFillMode: "both" }}>
          <span className="inline-flex items-center gap-2 font-outfit text-xs font-bold uppercase tracking-fire px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(252,108,4,0.12)", border: "1px solid rgba(252,108,4,0.25)", color: "#fc6c04" }}>
            <Zap className="w-3.5 h-3.5" />
            Herramienta exclusiva · Incluida en tu formación
          </span>

          <h2 className="font-outfit font-black text-white uppercase tracking-fire leading-none max-w-4xl mx-auto"
            style={{ fontSize: "clamp(30px, 5vw, 66px)" }}>
            Crea contenido que{" "}
            <span style={{ color: "#fc6c04", textShadow: "0 0 48px rgba(252,108,4,0.5)" }}>
              viraliza
            </span>
            {" "}solo.
          </h2>

          <p className="font-outfit text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
            Genera guiones optimizados para captar atención, conectar con tu audiencia y llevar
            tus videos a más personas — en minutos, con ayuda de IA.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: "phone" viral mockup */}
          <div className={`flex justify-center ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}>

            <div className="relative" style={{ width: "clamp(220px, 30vw, 300px)" }}>

              {/* Phone frame */}
              <div className="rounded-[2.5rem] overflow-hidden relative"
                style={{
                  aspectRatio: "9/16",
                  background: "#000",
                  border: "3px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                }}>

                {/* Video bg gradient (representing a reel) */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(160deg, #1a0a00 0%, #0d0d0d 40%, #0a0f1a 100%)",
                }} />

                {/* Fake video content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "rgba(252,108,4,0.20)", border: "2px solid rgba(252,108,4,0.40)" }}>
                    <Play className="w-6 h-6 text-[#fc6c04] fill-[#fc6c04]" style={{ marginLeft: 2 }} />
                  </div>
                  <p className="font-outfit font-black text-white text-center leading-tight"
                    style={{ fontSize: "clamp(13px, 1.6vw, 16px)" }}>
                    "La IA que<br />transformó mi negocio<br />en 30 días"
                  </p>
                  <p className="font-outfit text-white/40 text-center mt-2" style={{ fontSize: "11px" }}>
                    Guión generado con IA ✦
                  </p>
                </div>

                {/* Bottom overlay bar */}
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-4 pt-10"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full shrink-0" style={{ background: "rgba(252,108,4,0.50)" }} />
                    <span className="font-outfit text-xs font-semibold text-white">@tu_negocio</span>
                  </div>
                  <p className="font-outfit text-white/70 leading-snug" style={{ fontSize: "10px" }}>
                    Aplicamos IA y automatizamos todo 🔥 #NegociosIA #Viralizar
                  </p>
                </div>

                {/* Right sidebar — Instagram actions */}
                <div className="absolute right-2 bottom-16 flex flex-col items-center gap-4">
                  {[
                    { Icon: Heart,         count: "128K", color: "#FF3B5C", fill: true  },
                    { Icon: MessageCircle, count: "9.2K", color: "#fff",    fill: false },
                    { Icon: Share2,        count: "47K",  color: "#fff",    fill: false },
                    { Icon: Bookmark,      count: "94K",  color: "#fff",    fill: false },
                  ].map(({ Icon, count, color, fill }, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5"
                      style={{ animation: `viralCount 3s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>
                      <Icon className="w-5 h-5" style={{ color, fill: fill ? color : "none" }} />
                      <span className="font-outfit font-black text-white" style={{ fontSize: "9px" }}>{count}</span>
                    </div>
                  ))}
                </div>

                {/* Pulsing glow behind phone */}
                <div className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(252,108,4,0.08)",
                    animation: "viralGlow 3s ease-in-out infinite",
                  }} />
              </div>

              {/* Exploding metric badges around phone */}
              <div className="absolute -top-3 -right-8 flex items-center gap-1.5 px-3 py-2 rounded-full"
                style={{
                  background: "#FF3B5C", boxShadow: "0 4px 20px rgba(255,59,92,0.5)",
                  animation: "viralPop 2.5s ease-in-out infinite",
                }}>
                <Heart className="w-3.5 h-3.5 text-white fill-white" />
                <span className="font-outfit font-black text-white" style={{ fontSize: "12px" }}>128K</span>
              </div>

              <div className="absolute -bottom-3 -left-8 flex items-center gap-1.5 px-3 py-2 rounded-full"
                style={{
                  background: "#fc6c04", boxShadow: "0 4px 20px rgba(252,108,4,0.5)",
                  animation: "viralPop 2.5s ease-in-out infinite", animationDelay: "0.8s",
                }}>
                <Bookmark className="w-3.5 h-3.5 text-white fill-white" />
                <span className="font-outfit font-black text-white" style={{ fontSize: "12px" }}>94K saved</span>
              </div>

              <div className="absolute top-1/2 -left-10 flex items-center gap-1.5 px-3 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)",
                  animation: "viralPop 2.5s ease-in-out infinite", animationDelay: "1.4s",
                  backdropFilter: "blur(8px)",
                }}>
                <Share2 className="w-3.5 h-3.5 text-white" />
                <span className="font-outfit font-black text-white" style={{ fontSize: "12px" }}>47K</span>
              </div>
            </div>
          </div>

          {/* Right: agent description */}
          <div className={`flex flex-col gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}>

            <div>
              <p className="font-outfit font-black text-white uppercase tracking-fire leading-tight"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>
                Asistente Creador de{" "}
                <span className="text-[#fc6c04]">Guiones Virales</span>
              </p>
              <p className="font-outfit text-white/55 mt-3 leading-relaxed" style={{ fontSize: "15px" }}>
                Solo conectas el agente y él trabaja por ti. Te da ideas de contenido,
                escribe el guión completo y lo optimiza para que más personas vean, comenten y compartan tu video.
              </p>
            </div>

            {/* Feature list */}
            {[
              { emoji: "⚡", text: "Genera ideas de videos en segundos basadas en tu nicho" },
              { emoji: "✍️", text: "Escribe el guión completo: gancho, desarrollo y llamada a la acción" },
              { emoji: "🔥", text: "Optimiza para retención — los algoritmos premian a quienes retienen" },
              { emoji: "📈", text: "Vende más a través de tus videos sin parecer que vendes" },
              { emoji: "🔁", text: "Conecta y usa — funciona en Instagram, TikTok y YouTube Shorts" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                <span style={{ fontSize: "18px", lineHeight: 1 }}>{item.emoji}</span>
                <span className="font-outfit text-white/70 leading-snug" style={{ fontSize: "14px" }}>
                  {item.text}
                </span>
              </div>
            ))}

            {/* Included badge */}
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
              style={{
                background: "rgba(252,108,4,0.08)",
                border: "1px solid rgba(252,108,4,0.25)",
              }}>
              <Zap className="w-4 h-4 text-[#fc6c04] shrink-0" />
              <p className="font-outfit text-sm text-white/70 leading-snug">
                <strong className="text-white">Incluido en tu formación.</strong>{" "}
                Solo conectas el agente y empiezas a viralizar desde el primer día.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className={`text-center mt-14 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 font-outfit text-base font-black px-10 py-4 rounded-[70px] text-white uppercase tracking-fire transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
              boxShadow: "0 8px 40px -8px rgba(252,108,4,0.65)",
            }}>
            <Zap className="w-5 h-5 shrink-0" />
            Quiero viralizar mi contenido
          </a>
          <p className="font-outfit text-xs text-white/30 mt-3 uppercase tracking-fire">
            Incluido · Sin costo adicional · Disponible desde el día 1
          </p>
        </div>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes viralFloat {
          0%, 100% { transform: translateY(0px);   opacity: 0.7; }
          50%       { transform: translateY(-12px); opacity: 1;   }
        }
        @keyframes viralSpark {
          0%, 100% { transform: scale(1);   opacity: 0.5; }
          50%       { transform: scale(2.2); opacity: 1;   }
        }
        @keyframes viralPop {
          0%, 100% { transform: scale(1);    }
          50%       { transform: scale(1.10); }
        }
        @keyframes viralCount {
          0%, 100% { transform: translateY(0);  }
          50%       { transform: translateY(-3px); }
        }
        @keyframes viralGlow {
          0%, 100% { box-shadow: inset 0 0 40px rgba(252,108,4,0.06); }
          50%       { box-shadow: inset 0 0 60px rgba(252,108,4,0.15); }
        }
      `}</style>
    </section>
  )
}

export default ViralAgentSection
