import { useInView } from "@/hooks/useInView"
import { Bot, Zap, Plus, CheckCircle2, ArrowRight } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const agents = [
  {
    emoji: "🛎️",
    name: "Agente de Atención al Cliente",
    task: "Responde dudas, gestiona quejas y fideliza — sin que toques nada.",
    stat: "847 consultas hoy",
    color: "#888888",
  },
  {
    emoji: "📊",
    name: "Agente de Ventas",
    task: "Califica leads, envía propuestas y hace seguimiento automático.",
    stat: "124 leads esta semana",
    color: "#10B981",
  },
  {
    emoji: "✍️",
    name: "Agente de Contenido",
    task: "Crea copies, textos y publicaciones para tus redes y email.",
    stat: "38 publicaciones creadas",
    color: "#fc6c04",
  },
  {
    emoji: "📧",
    name: "Agente de Email Marketing",
    task: "Redacta y personaliza cada email según el perfil del suscriptor.",
    stat: "2.1K emails enviados",
    color: "#A855F7",
  },
  {
    emoji: "🤝",
    name: "Agente de Onboarding",
    task: "Recibe y guía a nuevos clientes paso a paso sin intervención tuya.",
    stat: "56 clientes procesados",
    color: "#EC4899",
  },
]

/* Floating "activity" sparks */
const sparks = [
  { top: "8%",  left: "18%", delay: "0s",   dur: "3.2s" },
  { top: "15%", right: "14%",delay: "0.7s", dur: "2.8s" },
  { top: "72%", left: "8%",  delay: "1.3s", dur: "3.6s" },
  { top: "80%", right: "10%",delay: "0.4s", dur: "2.5s" },
  { top: "45%", left: "4%",  delay: "1.9s", dur: "3.0s" },
  { top: "38%", right: "4%", delay: "1.1s", dur: "3.8s" },
]

const GptAgentSection = () => {
  const { ref, isInView } = useInView(0.07)

  return (
    <section className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0d0d0d 100%)" }}>

      {/* Decorative glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse at center, rgba(136,136,136,0.06) 0%, rgba(252,108,4,0.05) 60%, transparent 100%)",
          filter: "blur(60px)",
        }} />
      </div>

      {/* Sparks */}
      {sparks.map((s, i) => (
        <span key={i} aria-hidden="true" className="absolute rounded-full pointer-events-none" style={{
          width: 4, height: 4,
          top: s.top, left: (s as any).left, right: (s as any).right,
          background: "#888888",
          boxShadow: "0 0 8px rgba(136,136,136,0.9)",
          animation: `gptSpark ${s.dur} ease-in-out infinite`,
          animationDelay: s.delay,
        }} />
      ))}

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* Header */}
        <div className={`text-center mb-14 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationFillMode: "both" }}>

          <span className="inline-flex items-center gap-2 font-outfit text-xs font-bold uppercase tracking-fire px-4 py-2 rounded-full mb-5"
            style={{ background: "rgba(136,136,136,0.12)", border: "1px solid rgba(136,136,136,0.25)", color: "#aaaaaa" }}>
            <Bot className="w-3.5 h-3.5" />
            Herramienta exclusiva · Incluida en tu formación
          </span>

          <h2 className="font-outfit font-black text-white uppercase tracking-fire leading-none max-w-4xl mx-auto"
            style={{ fontSize: "clamp(30px, 5vw, 66px)" }}>
            Tu equipo de{" "}
            <span style={{ color: "#fc6c04", textShadow: "0 0 48px rgba(252,108,4,0.45)" }}>
              empleados IA
            </span>
            {" "}trabajando 24/7.
          </h2>

          <p className="font-outfit text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
            Crea tus propios GPTs personalizados adaptados a cada área de tu negocio —
            sin saber programar. Solo configuras, conectas y ellos trabajan por ti.
          </p>
        </div>

        {/* Main layout */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: agent dashboard mockup */}
          <div className={`${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}>

            {/* Dashboard card */}
            <div className="rounded-2xl overflow-hidden"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 64px -16px rgba(0,0,0,0.50)",
              }}>

              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#aaaaaa]" />
                  <span className="font-outfit text-xs font-bold text-white/70 uppercase tracking-fire">Mis Agentes IA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" style={{ animation: "gptPulse 2s ease-in-out infinite" }} />
                  <span className="font-outfit text-xs text-white/40">5 activos</span>
                </div>
              </div>

              {/* Agent list */}
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {agents.map((agent, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-4 transition-colors duration-200 hover:bg-white/[0.02] cursor-default"
                    style={{
                      borderBottom: i < agents.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      animation: isInView ? `fadeUp 0.6s ease-out forwards` : "none",
                      opacity: 0,
                      animationDelay: `${0.1 + i * 0.08}s`,
                      animationFillMode: "both",
                    }}>

                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-base"
                      style={{ background: `${agent.color}18`, border: `1px solid ${agent.color}30` }}>
                      {agent.emoji}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="font-outfit text-xs font-bold text-white truncate">{agent.name}</span>
                        <span className="flex items-center gap-1 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0"
                            style={{ animation: `gptPulse ${1.5 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
                          <span className="font-outfit text-[10px] text-[#10B981] font-semibold uppercase tracking-wide">Online</span>
                        </span>
                      </div>
                      <p className="font-outfit text-white/40 leading-snug" style={{ fontSize: "11px" }}>{agent.task}</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: agent.color }} />
                        <span className="font-outfit font-semibold" style={{ fontSize: "10px", color: agent.color }}>
                          {agent.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Create new agent button */}
              <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-colors hover:bg-white/5"
                  style={{ border: "1px dashed rgba(252,108,4,0.30)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(252,108,4,0.10)" }}>
                    <Plus className="w-4 h-4 text-[#fc6c04]" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs font-bold text-[#fc6c04]">Crear nuevo agente</p>
                    <p className="font-outfit text-white/30" style={{ fontSize: "10px" }}>Sin programar · En minutos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating "working" badge */}
            <div className="flex items-center gap-3 mt-4 px-4 py-3 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.20)",
              }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0"
                style={{ animation: "gptPulse 1.5s ease-in-out infinite" }} />
              <p className="font-outfit text-sm text-white/60 leading-snug">
                <strong className="text-white">Todos tus agentes trabajan mientras duermes.</strong>{" "}
                Sin interrupciones, sin días libres, sin errores.
              </p>
            </div>
          </div>

          {/* Right: description + steps */}
          <div className={`flex flex-col gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}>

            <div>
              <p className="font-outfit font-black text-white uppercase tracking-fire leading-tight"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}>
                Asistente Creador de{" "}
                <span className="text-[#fc6c04]">GPTs Personalizados</span>
              </p>
              <p className="font-outfit text-white/55 mt-3 leading-relaxed" style={{ fontSize: "15px" }}>
                Imagina tener un empleado para cada función de tu negocio —
                disponible 24 horas, sin costo fijo, sin días libres.
                Con este agente, los creas en minutos, sin saber nada de programación.
              </p>
            </div>

            {/* Steps */}
            {[
              { num: "01", title: "Describes tu agente",       desc: "Le dices qué hace, cómo habla y qué objetivos tiene tu negocio." },
              { num: "02", title: "El asistente lo construye", desc: "Genera automáticamente toda la configuración de tu GPT personalizado." },
              { num: "03", title: "Conectas y listo",          desc: "Integras el agente donde necesites y él empieza a trabajar por ti." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start px-5 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-outfit font-black"
                  style={{ background: "rgba(252,108,4,0.12)", color: "#fc6c04", fontSize: "13px" }}>
                  {step.num}
                </div>
                <div>
                  <p className="font-outfit font-bold text-white" style={{ fontSize: "14px" }}>{step.title}</p>
                  <p className="font-outfit text-white/45 mt-0.5 leading-snug" style={{ fontSize: "12px" }}>{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Use cases */}
            <div className="pt-1">
              <p className="font-outfit text-xs font-bold uppercase tracking-fire text-white/35 mb-3">Ejemplos de agentes que puedes crear:</p>
              <div className="flex flex-wrap gap-2">
                {["Atención al cliente","Calificador de leads","Redactor de contenido","Soporte técnico","Asistente de ventas","Onboarding de clientes","FAQ automático"].map((tag, i) => (
                  <span key={i} className="font-outfit text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Included badge */}
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
              style={{ background: "rgba(252,108,4,0.08)", border: "1px solid rgba(252,108,4,0.22)" }}>
              <Zap className="w-4 h-4 text-[#fc6c04] shrink-0" />
              <p className="font-outfit text-sm text-white/70 leading-snug">
                <strong className="text-white">Incluido en tu formación.</strong>{" "}
                Sin límite de agentes. Sin conocimientos técnicos. Sin código.
              </p>
            </div>

            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 font-outfit text-sm font-black px-8 py-4 rounded-[70px] text-white uppercase tracking-fire transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
                boxShadow: "0 8px 32px -8px rgba(252,108,4,0.55)",
              }}>
              <Bot className="w-4 h-4 shrink-0" />
              Quiero mis agentes IA
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gptSpark {
          0%, 100% { transform: scale(1);   opacity: 0.4; }
          50%       { transform: scale(2.5); opacity: 1;   }
        }
        @keyframes gptPulse {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}

export default GptAgentSection
