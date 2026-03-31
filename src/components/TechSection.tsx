const VIDEO_URL = "https://ia.university/wp-content/uploads/2025/11/David-Cuerpo.mp4"
const OVERLAY_URL = "https://ia.university/wp-content/uploads/2025/10/IA_University_Overlay-4.webp"

const TechSection = () => {
  return (
    <section id="tecnologias" className="relative w-full overflow-hidden" style={{ aspectRatio: "1651 / 783" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        loop={false}
        aria-hidden="true"
      />
      <img
        src={OVERLAY_URL}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Título — topo da seção */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center text-center px-4 pt-8">
        <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04] mb-2">
          Herramientas incluidas
        </span>
        <h2
          className="font-outfit font-black text-white uppercase tracking-fire leading-none"
          style={{ fontSize: "clamp(24px, 4vw, 60px)" }}
        >
          Tecnologías que aprenderás.
        </h2>
      </div>
    </section>
  )
}

export default TechSection
