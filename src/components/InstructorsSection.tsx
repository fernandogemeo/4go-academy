import { useRef, useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import davidPadilla from "@/assets/david-padilla.jpeg"
import juanQuintero from "@/assets/juan-quintero.png"
import xaviYustiz from "@/assets/xavi-yustiz.png"
import noraVargas from "@/assets/nora-vargas.png"
import jaimeRios from "@/assets/jaime-rios.png"

const instructors = [
  {
    name: "David Rodríguez",
    role: "CEO IA University",
    photo: "https://ia.university/wp-content/uploads/elementor/thumbs/IA_University_Equipo-5-rdzj0g7f1j2u0f83rc632vkr475xd32hi39vc7vd68.webp",
  },
  {
    name: "David Padilla",
    role: "Especialista en N8N",
    photo: davidPadilla,
  },
  {
    name: "Juan Quintero",
    role: "Especialista en Tribe Marketing & optimización de procesos con IA",
    photo: juanQuintero,
  },
  {
    name: "John Castaño",
    role: "Project Manager & Head of Integrations · IA University",
    photo: "https://ia.university/wp-content/uploads/elementor/thumbs/IA_University_John_Castano-rfq83puenbexb7ey2dheue5rpyaj2wul2bqdmxvj3k.webp",
  },
  {
    name: "Xavi Yustiz",
    role: "Especialista en creación de contenido audiovisual con IA",
    photo: xaviYustiz,
  },
  {
    name: "Nora Vargas",
    role: "AI Content Designer en IA University",
    photo: noraVargas,
  },
  {
    name: "Jaime Ríos",
    role: "Gestor de contenido, especialista en creación audiovisual con IA",
    photo: jaimeRios,
  },
]

const InstructorCard = ({
  name,
  role,
  photo,
}: {
  name: string
  role: string
  photo: string
}) => (
  <div className="flex-shrink-0 flex flex-col items-center gap-4 w-48 md:w-56">
    <div
      className="overflow-hidden rounded-2xl w-full"
      style={{
        aspectRatio: "3 / 4",
        boxShadow: "0 8px 32px rgba(252, 108, 4, 0.15)",
      }}
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
        style={{ objectPosition: "center 15%" }}
        loading="lazy"
      />
    </div>
    <div className="text-center px-1">
      <span className="block font-outfit font-bold leading-tight text-white text-sm">
        {name}
      </span>
      <span className="block font-outfit text-[#fc6c04]/80 mt-1 leading-snug text-xs">
        {role}
      </span>
    </div>
  </div>
)

const InstructorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = instructors.length

  // Triplicamos el array para crear el efecto infinito
  const tripled = [...instructors, ...instructors, ...instructors]

  const getCardWidth = useCallback(() => {
    // w-48 = 192px en mobile, w-56 = 224px en md+, gap-8 = 32px
    const isMd = window.innerWidth >= 768
    return (isMd ? 224 : 192) + 32
  }, [])

  // Posicionar en el set del medio al montar
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const cardW = getCardWidth()
    el.scrollLeft = totalItems * cardW
    setCurrentIndex(0)
  }, [getCardWidth, totalItems])

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cardW = getCardWidth()
    const oneSetWidth = totalItems * cardW

    // Si se fue muy a la izquierda, saltar al set del medio
    if (el.scrollLeft < cardW * 0.5) {
      el.scrollLeft += oneSetWidth
    }
    // Si se fue muy a la derecha, saltar al set del medio
    else if (el.scrollLeft > oneSetWidth * 2 + cardW * 0.5) {
      el.scrollLeft -= oneSetWidth
    }

    // Calcular índice actual
    const idx = Math.round((el.scrollLeft % oneSetWidth) / cardW) % totalItems
    setCurrentIndex(idx)
  }, [getCardWidth, totalItems])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardW = getCardWidth()
    const amount = dir === "left" ? -cardW : cardW
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-[#04192D] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-14 text-center">
        <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
          Nuestro equipo docente
        </span>
        <h2
          className="font-outfit font-black text-white uppercase tracking-fire mt-3"
          style={{ fontSize: "clamp(24px, 3.5vw, 50px)" }}
        >
          Aprenda con los Mejores.
        </h2>
        <p
          className="font-outfit text-white/60 mt-4 max-w-xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          Expertos en inteligencia artificial, negocios y automatización que ya transformaron a miles de emprendedores.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation buttons - siempre activos */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#fc6c04] flex items-center justify-center text-white hover:bg-[#e05e00] transition-colors duration-200"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#fc6c04] flex items-center justify-center text-white hover:bg-[#e05e00] transition-colors duration-200"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable row con loop infinito */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tripled.map((s, i) => (
            <InstructorCard key={i} {...s} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default InstructorsSection
