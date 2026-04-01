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
  <div
    className="flex-shrink-0 flex flex-col items-center gap-4"
    style={{ width: "clamp(160px, 20vw, 220px)" }}
  >
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
        loading="lazy"
      />
    </div>
    <div className="text-center">
      <span
        className="block font-outfit font-bold leading-tight text-white"
        style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}
      >
        {name}
      </span>
      <span
        className="block font-outfit text-[#fc6c04]/80 mt-1 leading-snug"
        style={{ fontSize: "clamp(11px, 1.1vw, 12px)" }}
      >
        {role}
      </span>
    </div>
  </div>
)

const InstructorsSection = () => {
  const duplicated = [...instructors, ...instructors]

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

      <div className="overflow-hidden">
        <div
          className="flex gap-6"
          style={{ animation: "marqueeReverse 35s linear infinite" }}
        >
          {duplicated.map((s, i) => (
            <InstructorCard key={i} {...s} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}

export default InstructorsSection
