import mariaG from "@/assets/maria_g.jpg"
import carlosR from "@/assets/carlos_r.jpg"
import andresM from "@/assets/andres_m.jpg"
import lauraS from "@/assets/laura_s.jpg"
import ricardoP from "@/assets/ricardo_p.jpg"
import valentinaC from "@/assets/valentina_c.jpg"

const testimonials = [
  {
    name: "María G.",
    role: "Empresaria · México",
    text: "Gracias a la formación pude automatizar procesos en mi negocio que antes me tomaban horas. ¡Totalmente recomendable!",
    photo: mariaG,
  },
  {
    name: "Carlos R.",
    role: "Consultor de Negocios · Colombia",
    text: "El contenido es práctico desde el primer módulo. En menos de una semana ya estaba usando IA en mis proyectos reales.",
    photo: carlosR,
  },
  {
    name: "Andrés M.",
    role: "Dueño de PYME · Argentina",
    text: "Pensé que era muy difícil, pero el módulo de nivelación me dio la confianza que necesitaba. Excelente formación.",
    photo: andresM,
  },
  {
    name: "Laura S.",
    role: "Consultora de Marketing · España",
    text: "Las sesiones en vivo son increíbles. Puedes hacer preguntas en tiempo real y aplicar todo inmediatamente.",
    photo: lauraS,
  },
  {
    name: "Ricardo P.",
    role: "Gerente Comercial · Chile",
    text: "La certificación de IA University abrió puertas que yo no imaginaba. Mis clientes ven la diferencia.",
    photo: ricardoP,
  },
  {
    name: "Valentina C.",
    role: "Freelancer · Perú",
    text: "Empecé sin saber nada de IA y hoy cobro el doble por mis servicios. Esta formación cambió mi carrera.",
    photo: valentinaC,
  },
]

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#ffffff]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-[#fc6c04]">
            Quienes vivieron, aprueban
          </span>
          <h2
            className="font-outfit font-black text-[#080808] uppercase tracking-fire leading-none mt-3"
            style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
          >
            Lo que dicen nuestros{" "}
            <span className="text-[#fc6c04]">estudiantes.</span>
          </h2>
          <p className="font-outfit text-[#080808]/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Vea cómo ayudamos a nuestros estudiantes a avanzar en sus carreras y negocios.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 bg-[#080808] flex flex-col"
              style={{ border: "2px solid rgba(252,108,4,0.2)" }}
            >
              <p className="font-outfit text-sm text-white/70 leading-relaxed mb-6 italic flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-outfit font-bold text-white text-sm">{t.name}</p>
                  <p className="font-outfit text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
