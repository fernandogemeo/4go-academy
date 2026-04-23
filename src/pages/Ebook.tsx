import { useState } from "react"
import { Gift, ArrowRight, Shield, CheckCircle, Sparkles } from "lucide-react"

export default function Ebook() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !phone) return
    setLoading(true)
    // Simulate submission — replace with real endpoint later
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#080808] font-outfit relative overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(252,108,4,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(252,108,4,0.05) 0%, transparent 70%)" }}
      />

      {/* Spacer top */}
      <div className="h-10" />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pt-8 pb-20 max-w-lg">

        {!submitted ? (
          <>
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-outfit text-sm font-bold uppercase tracking-fire text-white"
                style={{ background: "rgba(252,108,4,0.15)", border: "1px solid rgba(252,108,4,0.3)" }}
              >
                <Gift className="w-4 h-4 text-[#fc6c04]" />
                Regalo exclusivo
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-outfit font-black text-white text-center uppercase tracking-fire leading-none mb-4"
              style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
            >
              Tu <span className="text-[#fc6c04]">Guía Práctica</span>
              <br />de IA te espera
            </h1>

            <p className="font-outfit text-base text-white/60 text-center leading-relaxed mb-8 max-w-md mx-auto">
              Descarga gratis nuestra guía con las mejores herramientas y estrategias de inteligencia artificial para transformar tu negocio.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-outfit text-xs font-bold uppercase tracking-fire text-white/40 mb-2 block">
                  Tu email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@email.com"
                  className="w-full px-5 py-4 rounded-2xl font-outfit text-base text-white placeholder-white/30 outline-none transition-all focus:ring-2 focus:ring-[#fc6c04]/50"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              <div>
                <label className="font-outfit text-xs font-bold uppercase tracking-fire text-white/40 mb-2 block">
                  Tu WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 300 123 4567"
                  className="w-full px-5 py-4 rounded-2xl font-outfit text-base text-white placeholder-white/30 outline-none transition-all focus:ring-2 focus:ring-[#fc6c04]/50"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-[70px] font-outfit text-lg font-black uppercase tracking-fire text-white flex items-center justify-center gap-3 transition-all hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100"
                style={{
                  background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)",
                  boxShadow: "0 8px 40px -8px rgba(252,108,4,0.65)",
                }}
              >
                {loading ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    <Gift className="w-6 h-6" />
                    Quiero mi regalo
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Trust signals */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-white/30" />
              <p className="font-outfit text-xs text-white/30">
                Tus datos están seguros. No compartimos tu información.
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center pt-12">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #fc6c04 0%, #e05a00 100%)", boxShadow: "0 0 60px rgba(252,108,4,0.4)" }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </div>

            <h2
              className="font-outfit font-black text-white uppercase tracking-fire leading-tight mb-4"
              style={{ fontSize: "clamp(24px, 5vw, 36px)" }}
            >
              <span className="text-[#fc6c04]">Listo!</span> Tu regalo
              <br />está en camino
            </h2>

            <p className="font-outfit text-base text-white/60 leading-relaxed mb-8 max-w-sm mx-auto">
              Revisa tu correo electrónico y tu WhatsApp. En los próximos minutos recibirás tu guía práctica de IA.
            </p>

            <div
              className="rounded-2xl p-5 max-w-sm mx-auto"
              style={{ background: "rgba(252,108,4,0.08)", border: "1px solid rgba(252,108,4,0.2)" }}
            >
              <p className="font-outfit text-sm text-white/70">
                Mientras tanto, síguenos en Instagram para más contenido exclusivo de IA:
              </p>
              <a
                href="https://instagram.com/4goacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-6 py-3 rounded-[70px] font-outfit text-sm font-bold uppercase tracking-fire text-white transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                @4goacademy
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="font-outfit text-xs text-white/20">
            4GO Academy &copy; {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </main>
    </div>
  )
}
