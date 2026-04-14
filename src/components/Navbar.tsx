import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const HOTMART_URL = "https://pay.hotmart.com/U105005359X?checkoutMode=10"

const links = [
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "¿Por qué?", href: "#diferente" },
  { label: "Formación", href: "#formacion" },
  { label: "Precio", href: "#precio" },
  { label: "Garantía", href: "#garantia" },
  { label: "Testimonios", href: "#testimonios" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md shadow-lg" : "bg-[#080808]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#" className="shrink-0 mr-[50px]">
          <img
            src="/logo-navbar.png?v=2"
            alt="iau · 4GO Academy"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-outfit text-sm font-semibold text-white/80 hover:text-[#fc6c04] transition-colors uppercase tracking-fire"
            >
              {l.label}
            </a>
          ))}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-sm font-bold bg-[#fc6c04] text-white rounded-[70px] px-6 py-2.5 hover:bg-[#e05a00] transition-colors uppercase tracking-fire"
          >
            Inscribirme
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808] border-t border-white/10 px-4 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-outfit text-sm font-semibold text-white/70 hover:text-[#fc6c04] transition-colors uppercase tracking-fire border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center font-outfit text-sm font-bold bg-[#fc6c04] text-white rounded-[70px] px-6 py-3 hover:bg-[#e05a00] transition-colors uppercase tracking-fire"
          >
            Inscribirme
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
