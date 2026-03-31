const HOTMART_URL = "https://pay.hotmart.com/N95283619Y?off=hyfkll71&checkoutMode=10"

/* Floating particle dots */
const particles = [
  { size: 3, top: "12%", left: "8%",  duration: "7s",  delay: "0s"    },
  { size: 4, top: "22%", left: "78%", duration: "9s",  delay: "1.2s"  },
  { size: 2, top: "65%", left: "15%", duration: "11s", delay: "0.5s"  },
  { size: 5, top: "78%", left: "88%", duration: "8s",  delay: "2.1s"  },
  { size: 3, top: "42%", left: "92%", duration: "10s", delay: "0.8s"  },
  { size: 2, top: "55%", left: "5%",  duration: "13s", delay: "3s"    },
  { size: 4, top: "88%", left: "40%", duration: "9s",  delay: "1.7s"  },
  { size: 3, top: "18%", left: "50%", duration: "12s", delay: "0.3s"  },
  { size: 2, top: "35%", left: "33%", duration: "14s", delay: "2.5s"  },
  { size: 5, top: "72%", left: "62%", duration: "7s",  delay: "4s"    },
]

/* Slow-drifting circuit lines (SVG, purely decorative) */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.png)" }}
      />

      {/* ── Dark overlay for readability ── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(4, 25, 45, 0.72)" }}
      />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(4,25,45,0.55) 100%)",
        }}
      />

      {/* ── Animated floating particles ── */}
      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: "rgba(252, 108, 4, 0.75)",
            boxShadow: `0 0 ${p.size * 3}px rgba(252,108,4,0.6)`,
            animation: `heroFloat ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Slow horizontal scan line ── */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(252,108,4,0.18) 30%, rgba(252,108,4,0.35) 50%, rgba(252,108,4,0.18) 70%, transparent 100%)",
          animation: "heroScan 12s ease-in-out infinite",
          top: "40%",
        }}
      />

      {/* ── Pulsing glow blob (center-bottom) ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "300px",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse at center, rgba(252,108,4,0.12) 0%, transparent 70%)",
          animation: "heroPulse 6s ease-in-out infinite",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24 text-center">
        <div className="max-w-5xl mx-auto">

          <span className="inline-block font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
            IA University — Formación Oficial
          </span>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 font-outfit text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fc6c04] shrink-0" />
              +10.000 alumnos satisfechos
            </span>
            <span className="inline-flex items-center gap-2 font-outfit text-sm font-semibold px-4 py-2 rounded-full bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fc6c04] shrink-0" />
              100% Online
            </span>
          </div>

          <h1
            className="font-outfit font-black text-white uppercase tracking-fire leading-none mb-6 md:mb-8"
            style={{ fontSize: "clamp(32px, 7vw, 70px)" }}
          >
            FORMACIÓN:{" "}
            <span className="text-[#fc6c04]">IA PARA NEGOCIOS</span>
          </h1>

          <p className="font-outfit text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Todo lo que necesitas para dominar la Inteligencia Artificial y aplicarla en tu negocio.
          </p>
          <p className="font-outfit text-base md:text-lg text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transforma la manera en que operas, creces y monetizas tu negocio{" "}
            <strong className="text-white/90">aunque no tengas experiencia previa en tecnología.</strong>
          </p>

          <div className="flex justify-center">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#fc6c04] font-outfit text-base font-bold px-10 py-4 rounded-[70px] text-white hover:bg-[#e05a00] transition-colors shadow-fire uppercase tracking-fire"
            >
              QUIERO ASEGURAR MI CUPO
            </a>
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) scale(1);   opacity: 0.7; }
          50%       { transform: translateY(-18px) scale(1.3); opacity: 1;   }
        }
        @keyframes heroScan {
          0%, 100% { top: 25%; opacity: 0; }
          20%       { opacity: 1; }
          80%       { opacity: 1; }
          50%       { top: 72%; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1);   }
          50%       { opacity: 1;   transform: translateX(-50%) scaleX(1.15); }
        }
      `}</style>
    </section>
  )
}

export default HeroSection
