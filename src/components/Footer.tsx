const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const Footer = () => (
  <footer className="py-12 bg-[#000000] border-t border-white/8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div>
          <p className="font-outfit font-black text-xl text-white uppercase tracking-fire">
            4GO <span className="text-[#fc6c04]">Academy</span>
          </p>
          <p className="font-outfit text-xs text-white/40 mt-1">
            Por IA University — Formación en Inteligencia Artificial
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Tecnologías", "Formación", "Precio", "Garantía", "Testimonios", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-outfit text-xs text-white/45 hover:text-[#fc6c04] transition-colors uppercase tracking-fire"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-outfit text-xs font-bold bg-[#fc6c04] text-white rounded-[70px] px-6 py-2.5 hover:bg-[#e05a00] transition-colors uppercase tracking-fire"
        >
          Inscribirme
        </a>
      </div>

      <hr className="border-white/8 my-8" />

      <div className="text-center">
        <p className="font-outfit text-xs text-white/30">
          © 2026 IA University — Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
