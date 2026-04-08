import { useInView } from "@/hooks/useInView"
import { useEffect, useRef, useState } from "react"
import { Zap, Clock, Gift, Star, Play } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const courses = [
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/CO-M1-768x1365.jpg",  alt: "Comunicación" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/EX-768x1365.jpg",     alt: "Excel" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/IA-768x1365.jpg",     alt: "IA" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/LR-768x1365.jpg",     alt: "Liderazgo" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/MI-768x1365.jpg",     alt: "Marketing" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/PA-768x1365.jpg",     alt: "Productividad Avanzada" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/PBI-768x1365.jpg",    alt: "Power BI" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/PP-768x1365.png",     alt: "PowerPoint" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/PR-768x1365.jpg",     alt: "Productividad" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/WD-768x1365.png",     alt: "Word" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/python-768x1365.jpg", alt: "Python" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/INT-EMOCIONAL-768x1365.jpg", alt: "Inteligencia Emocional" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/Mas-de-20-dashboards-editables-768x1365.jpg", alt: "Dashboards" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/portifoli-768x1365.png", alt: "Portafolio" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/como-conseguir-tu-768x1365.jpg", alt: "Conseguir Clientes" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/EXmoney-768x1365.jpg",alt: "Excel Financiero" },
  { src: "https://4goacademy.com/wp-content/uploads/2025/08/INGLES-768x1365.jpg", alt: "Inglés" },
  { src: "https://4goacademy.com/wp-content/uploads/2024/11/programa-768x1365.jpg", alt: "Programa" },
]

const highlights = [
  "Excel", "Power BI", "Comunicación", "Oratoria",
  "Productividad", "Word", "Python", "Inglés",
  "Liderazgo", "Int. Emocional", "+ Más cursos",
]

const duplicated = [...courses, ...courses]

const BonusSection = () => {
  const { ref, isInView } = useInView(0.06)

  return (
    <section className="relative overflow-hidden" style={{ background: "#04192D" }}>

      {/* ── Urgency top ribbon ── */}
      <div
        className="w-full py-2.5 flex items-center justify-center gap-3"
        style={{ background: "linear-gradient(90deg, #e05a00 0%, #fc6c04 50%, #e05a00 100%)" }}
      >
        <Clock className="w-4 h-4 text-white shrink-0" style={{ animation: "bonusPulse 1.5s ease-in-out infinite" }} />
        <span className="font-outfit text-xs md:text-sm font-black uppercase tracking-fire text-white text-center">
          ¡Atención! Este bonus es limitado y puede terminar en cualquier momento
        </span>
        <Clock className="w-4 h-4 text-white shrink-0" style={{ animation: "bonusPulse 1.5s ease-in-out infinite" }} />
      </div>

      {/* ── Decorative glow ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "400px",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center, rgba(252,108,4,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10" ref={ref}>

        {/* ── Header ── */}
        <div
          className={`text-center px-4 pt-14 pb-10 md:pt-16 md:pb-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationFillMode: "both" }}
        >
          {/* Gift badge */}
          <div className="flex justify-center mb-5">
            <span
              className="inline-flex items-center gap-2 font-outfit text-sm font-black uppercase tracking-fire px-5 py-2.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #fc6c04, #e05a00)",
                boxShadow: "0 0 0 4px rgba(252,108,4,0.20), 0 8px 24px rgba(252,108,4,0.40)",
              }}
            >
              <Gift className="w-4 h-4 text-white" />
              <span className="text-white">Bonus Exclusivo</span>
              <Gift className="w-4 h-4 text-white" />
            </span>
          </div>

          <h2
            className="font-outfit font-black text-white uppercase tracking-fire leading-none max-w-5xl mx-auto"
            style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
          >
            1 Año de acceso a toda la{" "}
            <span
              className="relative inline-block"
              style={{
                color: "#fc6c04",
                textShadow: "0 0 40px rgba(252,108,4,0.45)",
              }}
            >
              4Go Plus
            </span>
          </h2>

          <p
            className="font-outfit text-white/65 mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.6vw, 19px)" }}
          >
            Al inscribirte hoy en la Formación IA para Negocios, recibes acceso completo
            a toda la plataforma con todos los entrenamientos de <strong className="text-white">4GO Plus por 1 año entero.</strong>{" "}
            Mejora todas las áreas de tu carrera y negocio.
          </p>

          {/* Value strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <Star className="w-3.5 h-3.5 text-[#fc6c04] fill-[#fc6c04]" />
              <span className="font-outfit text-sm font-semibold text-white/80">+18 cursos incluidos</span>
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <Zap className="w-3.5 h-3.5 text-[#fc6c04]" />
              <span className="font-outfit text-sm font-semibold text-white/80">Negocios · Carrera · Tecnología</span>
            </div>
          </div>
        </div>

        {/* ── Courses marquee ── */}
        <div className="overflow-hidden pb-2">
          <div
            className="flex gap-4"
            style={{ animation: "bonusMarquee 40s linear infinite" }}
          >
            {duplicated.map((course, i) => (
              <div
                key={i}
                className="shrink-0 rounded-xl overflow-hidden relative group"
                style={{
                  width: "clamp(100px, 12vw, 148px)",
                  aspectRatio: "768/1365",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.30)",
                  border: "1px solid rgba(252,108,4,0.15)",
                }}
              >
                <img
                  src={course.src}
                  alt={course.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(4,25,45,0.80) 0%, transparent 60%)" }}
                >
                  <span className="font-outfit text-xs font-bold text-white leading-tight">{course.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Course name pills ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 px-4 pt-8 pb-2 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          {highlights.map((name, i) => (
            <span
              key={i}
              className="font-outfit text-xs font-bold uppercase tracking-fire px-3 py-1.5 rounded-full"
              style={{
                background: i === highlights.length - 1
                  ? "rgba(252,108,4,0.20)"
                  : "rgba(255,255,255,0.07)",
                border: i === highlights.length - 1
                  ? "1px solid rgba(252,108,4,0.40)"
                  : "1px solid rgba(255,255,255,0.10)",
                color: i === highlights.length - 1 ? "#fc6c04" : "rgba(255,255,255,0.70)",
              }}
            >
              {name}
            </span>
          ))}
        </div>

        {/* ── Main bonus card ── */}
        <div
          className={`max-w-3xl mx-auto px-4 py-10 md:py-12 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.25s", animationFillMode: "both" }}
        >
          <div
            className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(252,108,4,0.14) 0%, rgba(252,108,4,0.04) 100%)",
              border: "2px solid rgba(252,108,4,0.35)",
            }}
          >
            {/* Decorative stars */}
            {[
              { top: "12%", left: "6%",  size: 14, delay: "0s" },
              { top: "18%", right: "8%", size: 10, delay: "0.4s" },
              { top: "72%", left: "4%",  size: 8,  delay: "0.8s" },
              { top: "78%", right: "5%", size: 12, delay: "0.2s" },
            ].map((s, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute pointer-events-none select-none text-[#fc6c04]"
                style={{
                  top: s.top,
                  left: (s as any).left,
                  right: (s as any).right,
                  fontSize: s.size,
                  opacity: 0.5,
                  animation: `bonusStar 3s ease-in-out infinite`,
                  animationDelay: s.delay,
                }}
              >
                ★
              </span>
            ))}

            <div className="relative z-10">
              <p
                className="font-outfit font-black text-white uppercase tracking-fire leading-tight"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Logra todas las habilidades{" "}
                <span className="text-[#fc6c04]">que exige el mercado.</span>
              </p>
              <p className="font-outfit text-white/60 mt-4 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "16px" }}>
                Excel, Power BI, Comunicación, Oratoria, Productividad, Word y mucho más.
                Todo incluido, todo tuyo, durante 1 año completo.
              </p>

              {/* Value comparison */}
              <div className="flex items-center justify-center gap-6 mt-7 mb-7">
                <div className="text-center">
                  <p className="font-outfit font-bold text-white/35 line-through" style={{ fontSize: "22px" }}>$197</p>
                  <p className="font-outfit text-xs text-white/35 uppercase tracking-fire">Valor real</p>
                </div>
                <div
                  className="w-px self-stretch"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                />
                <div className="text-center">
                  <p
                    className="font-outfit font-black text-[#fc6c04] leading-none"
                    style={{ fontSize: "36px", textShadow: "0 0 24px rgba(252,108,4,0.50)" }}
                  >
                    GRATIS
                  </p>
                  <p className="font-outfit text-xs text-white/55 uppercase tracking-fire mt-1">Al inscribirte hoy</p>
                </div>
              </div>

              {/* Urgency */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-7"
                style={{
                  background: "rgba(252,108,4,0.12)",
                  border: "1px solid rgba(252,108,4,0.30)",
                  animation: "bonusPulse 2s ease-in-out infinite",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#fc6c04] shrink-0"
                  style={{ animation: "bonusPulse 1s ease-in-out infinite" }}
                />
                <span className="font-outfit text-sm font-bold text-[#fc6c04] uppercase tracking-fire">
                  Sé rápido — este bonus puede terminar en cualquier momento
                </span>
              </div>

              <div className="block">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 font-outfit text-base font-black px-10 py-4 rounded-[70px] text-white uppercase tracking-fire transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
                    boxShadow: "0 8px 40px -8px rgba(252,108,4,0.65)",
                  }}
                >
                  <Gift className="w-5 h-5 shrink-0" />
                  Quiero el bonus + la formación
                </a>
                <p className="font-outfit text-xs text-white/35 mt-3 uppercase tracking-fire">
                  Bonus disponible solo mientras dure · Plazas limitadas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Video ── */}
        <div
          className={`max-w-3xl mx-auto px-4 pb-10 md:pb-14 ${isInView ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.35s", animationFillMode: "both" }}
        >
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid rgba(252,108,4,0.25)" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://drive.google.com/file/d/1KCM4fGtCp1njug_TjbyztUvpoCSuC1T-/preview"
                title="Video bonus"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes bonusMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes bonusPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.55; }
        }
        @keyframes bonusStar {
          0%, 100% { transform: scale(1) rotate(0deg);   opacity: 0.45; }
          50%       { transform: scale(1.4) rotate(20deg); opacity: 0.75; }
        }
      `}</style>
    </section>
  )
}

export default BonusSection
