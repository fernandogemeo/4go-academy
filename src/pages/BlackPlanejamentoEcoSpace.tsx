import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle, Circle, ClipboardList, Video, Megaphone, DollarSign,
  Play, Image, Mail, Link, Users, Target, TrendingUp,
  Zap, BarChart3, FileText, ShoppingCart, LayoutDashboard,
  FlaskConical, Copy, Mic, Calendar, Package, Star, Flame, ArrowRight, RotateCcw, X, ExternalLink
} from "lucide-react"

// ─── ÍCONES OFICIAIS ──────────────────────────────────────────────────────────
function IGIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="ig-bg" x1="4" y1="30" x2="28" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFDC80"/>
          <stop offset="15%"  stopColor="#FCAF45"/>
          <stop offset="30%"  stopColor="#F77737"/>
          <stop offset="45%"  stopColor="#F56040"/>
          <stop offset="60%"  stopColor="#FD1D1D"/>
          <stop offset="75%"  stopColor="#E1306C"/>
          <stop offset="90%"  stopColor="#C13584"/>
          <stop offset="100%" stopColor="#833AB4"/>
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="8.5" fill="url(#ig-bg)"/>
      <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="2.5" fill="none"/>
      <circle cx="23.2" cy="8.8" r="1.9" fill="white"/>
    </svg>
  )
}

function TTIcon({ size = 20 }: { size?: number }) {
  const d = "M21 6.2A5.2 5.2 0 0 1 15.8 1H12v14.3a2.57 2.57 0 0 1-2.57 2.4 2.57 2.57 0 0 1-2.57-2.57 2.57 2.57 0 0 1 2.57-2.57c.25 0 .5.04.73.1V9.1a6.57 6.57 0 0 0-.73-.04 6.6 6.6 0 0 0-6.6 6.6A6.6 6.6 0 0 0 9.43 22.2a6.6 6.6 0 0 0 6.6-6.6l.01-9a9.4 9.4 0 0 0 5.51 1.76V5.12A5.24 5.24 0 0 1 21 6.2z"
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d={d} fill="#69C9D0" transform="translate(-0.6 -0.6)"/>
      <path d={d} fill="#FE2C55"  transform="translate(0.6 0.6)"/>
      <path d={d} fill="#161823"/>
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
}
const stagger = { visible: { transition: { staggerChildren: 0.09 } } }

// ─── DADOS ────────────────────────────────────────────────────────────────────
const phases = [
  {
    id: 1, icon: ClipboardList, label: "Planificacion", weeks: "Semana 1",
    color: "#4B6BFB", border: "border-blue-200", badge: "bg-blue-100 text-blue-600", dot: "bg-blue-500",
    tasks: [
      "Definir oferta, precio y bonos exclusivos",
      "Crear la Gran Idea y la narrativa de la campana",
      "Disenar el embudo completo de captacion y ventas",
      "Preparar el calendario editorial de las 8 semanas",
    ],
  },
  {
    id: 2, icon: Video, label: "Grabacion", weeks: "Semanas 2–3",
    color: "#8B5CF6", border: "border-purple-200", badge: "bg-purple-100 text-purple-600", dot: "bg-purple-500",
    tasks: [
      "Grabar todos los videos de la campana",
      "Producir contenido para reels, stories y anuncios",
      "Crear secuencias de email y paginas de venta",
      "Preparar materiales de prueba social y testimonios",
    ],
  },
  {
    id: 3, icon: Megaphone, label: "Captacion y Anticipacion", weeks: "Semanas 4–7",
    color: "#EF4444", border: "border-red-200", badge: "bg-red-100 text-red-600", dot: "bg-red-500",
    tasks: [
      "Activar campanas de captacion de leads",
      "Publicar contenido de calentamiento diario",
      "Lanzar lista VIP con acceso anticipado",
      "Teasers, cuentas regresivas y detras de camaras",
      "Equipo de ventas activo para conversion de leads",
    ],
  },
  {
    id: 4, icon: DollarSign, label: "Ventas", weeks: "Semana 8",
    color: "#F97316", border: "border-orange-200", badge: "bg-orange-100 text-orange-600", dot: "bg-orange-500",
    tasks: [
      "Apertura del carrito — Black Friday",
      "Maxima presion de ventas con urgencia real",
      "1 reel + 3–5 stories diarios + email diario",
      "Live de cierre con Preguntas y Respuestas en las ultimas horas",
      "Recuperacion de carrito abandonado",
    ],
  },
]

const weekLabels: Record<number, { phase: string; color: string; border: string; bg: string }> = {
  1: { phase: "Planificacion", color: "text-blue-600",   border: "border-blue-300",   bg: "bg-blue-50" },
  2: { phase: "Grabacion",     color: "text-purple-600", border: "border-purple-300", bg: "bg-purple-50" },
  3: { phase: "Grabacion",     color: "text-purple-600", border: "border-purple-300", bg: "bg-purple-50" },
  4: { phase: "Captacion",     color: "text-red-600",    border: "border-red-300",    bg: "bg-red-50" },
  5: { phase: "Anticipacion",  color: "text-red-600",    border: "border-red-300",    bg: "bg-red-50" },
  6: { phase: "Anticipacion",  color: "text-red-600",    border: "border-red-300",    bg: "bg-red-50" },
  7: { phase: "Anticipacion",  color: "text-red-600",    border: "border-red-300",    bg: "bg-red-50" },
  8: { phase: "Ventas",        color: "text-orange-600", border: "border-orange-300", bg: "bg-orange-50" },
}

const contentItems = [
  { icon: Play,      qty: 20, label: "Reels — Los mas vistos",              desc: "Republicar los mas vistos con CTA de Black Friday al final", exampleVideo: "" },
  { icon: Video,     qty: 15, label: "Reels de Captacion Organica",         desc: "Contenidos para atraer nuevos leads de forma organica", exampleVideo: "" },
  { icon: Megaphone, qty: 10, label: "Anuncios en Video",                   desc: "Invitacion directa a la lista de espera / oferta", exampleVideo: "" },
  { icon: Image,     qty: 5,  label: "Carruseles Creativos",                desc: "Formato carrusel para engagement y autoridad", exampleVideo: "" },
  { icon: Target,    qty: 5,  label: "Anuncios de Inscripciones Abiertas",  desc: "Creativos para apertura de carrito y conversion", exampleVideo: "" },
  { icon: FileText,  qty: 5,  label: "Creativos Estaticos",                 desc: "Imagenes de captacion para trafico pago", exampleVideo: "" },
]

const goalColumns = [
  { icon: Target, label: "Meta Baja",      color: "text-yellow-600", border: "border-yellow-200", bg: "bg-yellow-50", dot: "bg-yellow-400", items: ["Facturacion: $75.000", "Leads: 5.000", "Conversion: 3%  →  150 ventas", "ROI: 7.5x"] },
  { icon: Star,   label: "Meta OK",        color: "text-blue-600",   border: "border-blue-200",   bg: "bg-blue-50",   dot: "bg-blue-400",   items: ["Facturacion: $150.000", "Leads: 5.000", "Conversion: 6%  →  300 ventas", "ROI: 15x"] },
  { icon: Flame,  label: "Meta Explosiva", color: "text-orange-600", border: "border-orange-200", bg: "bg-orange-50", dot: "bg-orange-400", items: ["Facturacion: $250.000", "Leads: 5.000", "Conversion: 10%  →  500 ventas", "ROI: 25x"] },
]

const materialLinks = [
  { icon: Users,           label: "Lista de Alumnos",          href: "#" },
  { icon: Mail,            label: "Lista de Leads",            href: "#" },
  { icon: Link,            label: "Pagina de Captura",         href: "#" },
  { icon: ShoppingCart,    label: "Finalizacion de Compra",    href: "#" },
  { icon: LayoutDashboard, label: "Dashboard de Captacion",    href: "#" },
  { icon: FlaskConical,    label: "Encuesta",                  href: "https://form.fillout.com/t/uGEv7fmwijus" },
  { icon: Copy,            label: "Copy de los Anuncios",      href: "#" },
  { icon: Mic,             label: "Guion del Live",            href: "#" },
]

const weekPlan = [
  { week: 1, phase: "Planificacion",  color: "#4B6BFB", tasks: ["Definir oferta, precio y bonos", "Crear narrativa y Gran Idea de la campana", "Armar embudo de captacion y ventas", "Preparar calendario editorial de 8 semanas"] },
  { week: 2, phase: "Grabacion",      color: "#8B5CF6", tasks: ["Grabar reels de captacion organica", "Grabar anuncios en video de invitacion directa", "Producir creativos estaticos y carruseles", "Revisar guiones y materiales"] },
  { week: 3, phase: "Grabacion",      color: "#8B5CF6", tasks: ["Finalizar todos los videos de la campana", "Crear secuencia de emails y paginas de venta", "Preparar materiales de prueba social y testimonios", "Configurar herramientas de automatizacion"] },
  { week: 4, phase: "Captacion",      color: "#EF4444", tasks: ["Activar campanas de trafico pago", "Publicar reels historicos con CTA de Black Friday", "Lanzar lista VIP con acceso anticipado", "Iniciar disparos de API para base de leads"] },
  { week: 5, phase: "Anticipacion",   color: "#EF4444", tasks: ["Continuar captacion y publicar contenido de calentamiento", "Teasers y detras de camaras de la oferta", "Cuentas regresivas y stories de anticipacion", "Equipo de ventas activo para conversion de leads"] },
  { week: 6, phase: "Anticipacion",   color: "#EF4444", tasks: ["Aumentar presion de anticipacion", "Compartir testimonios y prueba social", "Disparos de API con imagenes para lista de alumnos", "Reforzar narrativa: el mayor Black Friday de la historia"] },
  { week: 7, phase: "Anticipacion",   color: "#EF4444", tasks: ["Ultimos dias de captacion organica", "Anunciar fecha de apertura del carrito", "Preparar lista VIP para apertura anticipada", "Revisar pagina de ventas y finalizacion de compra"] },
  { week: 8, phase: "Ventas 🔥",     color: "#F97316", tasks: ["Apertura del carrito — Black Friday", "1 reel + 3–5 stories diarios + email diario", "Live de presentacion y apertura de carrito", "Recuperacion de carrito abandonado", "Live de cierre con Preguntas y Respuestas en las ultimas horas"] },
]

const defaultEntregaveis = ["—", "—", "—", "—", "—", "—"]

const defaultNarrativa = [
  "🔥 El Mayor Black Friday de la Historia",
  "💥 Descuento irreal — nunca visto antes",
  "📦 Combo de Cursos · Acceso Vitalicio",
  "🛡️ Soporte por 1 ano incluido",
  "🎯 Nunca mas vas a gastar en cursos de [NICHO] por el resto de tu vida",
]

const defaultConfig = {
  eventName: "Black Friday\nVitalicio",
  eventDate: "22/10",
  productValue: "$500",
  productAccess: "Acceso Vitalicio",
  investmentValue: "$10.000",
  investmentDesc: "Inversion total en el lanzamiento",
  cplValue: "$2,00",
  cplDesc: "por lead captado",
  leadsGoal: "5.000",
  leadsDesc: "leads para el lanzamiento",
}

// ─── EDITABLE TEXT ──────────────────────────────────────────────────────────
function EditableText({
  value, onChange, className, multiline, style,
}: {
  value: string; onChange: (v: string) => void; className?: string; multiline?: boolean; style?: React.CSSProperties;
}) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)

  if (!editing) {
    return (
      <span
        className={`cursor-pointer hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 rounded-md transition-all ${className || ""}`}
        style={style}
        onClick={() => { setDraft(value); setEditing(true) }}
        title="Haz clic para editar"
      >
        {multiline ? value.split("\n").map((line, i) => <span key={i}>{line}{i < value.split("\n").length - 1 && <br/>}</span>) : value}
      </span>
    )
  }

  const save = () => { onChange(draft); setEditing(false) }

  if (multiline) {
    return (
      <textarea
        autoFocus
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={save}
        onKeyDown={e => { if (e.key === "Escape") setEditing(false) }}
        className={`bg-white border-2 border-blue-400 rounded-lg px-2 py-1 outline-none resize-none w-full ${className || ""}`}
        style={{ ...style, minHeight: 60 }}
      />
    )
  }

  return (
    <input
      autoFocus
      value={draft}
      onChange={e => setDraft(e.target.value)}
      onBlur={save}
      onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") setEditing(false) }}
      className={`bg-white border-2 border-blue-400 rounded-lg px-2 py-1 outline-none w-full ${className || ""}`}
      style={style}
    />
  )
}

// ─── IDs dos conteúdos (1 check por vídeo) ────────────────────────────────────
const reelIds       = Array.from({ length: 20 }, (_, i) => `reel-${i + 1}`)
const captacaoIds   = Array.from({ length: 15 }, (_, i) => `captacao-${i + 1}`)
const depoimentoIds = Array.from({ length: 10 }, (_, i) => `depoimento-${i + 1}`)

// ─── GERA IDs de todas as tarefas ─────────────────────────────────────────────
const allTaskIds = [
  "card-evento",
  "card-produto",
  "card-inversion",
  "card-cpl",
  "card-leads",
  "reels-block",
  "captacao-block",
  "depoimentos-block",
  "cta-designer-ig",
  "cta-designer-tt",
  "cta-designer-tp",
  ...defaultEntregaveis.map((_, i) => `entrega-${i}`),
  ...phases.flatMap(p => p.tasks.map((_, i) => `fase-${p.id}-${i}`)),
  ...contentItems.filter((_, i) => i >= 2).map((_, i) => `conteudo-${i + 2}`),
  ...weekPlan.flatMap(w => w.tasks.map((_, i) => `semana-${w.week}-${i}`)),
]

// ─── COMPONENTES ──────────────────────────────────────────────────────────────
function TaskItem({
  id, text, color, checked, onToggle,
}: { id: string; text: string; color: string; checked: boolean; onToggle: (id: string) => void }) {
  return (
    <li className="flex items-start gap-3 group">
      <button
        onClick={() => onToggle(id)}
        className="mt-0.5 flex-shrink-0 transition-transform active:scale-90"
        title={checked ? "Marcar como pendiente" : "Marcar como completada"}
      >
        {checked
          ? <CheckCircle className="w-5 h-5" style={{ color }} />
          : <Circle className="w-5 h-5 text-[#ccc] group-hover:text-[#aaa] transition-colors" />
        }
      </button>
      <span className={`text-sm leading-relaxed transition-all ${checked ? "line-through opacity-40" : "text-[#444]"}`}>
        {text}
      </span>
    </li>
  )
}

function ProgressBar({ ids, checked, color }: { ids: string[]; checked: Record<string, boolean>; color: string }) {
  const done = ids.filter(id => checked[id]).length
  const total = ids.length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-[#999]">{done} de {total} tareas completadas</span>
        <span className="text-xs font-bold" style={{ color }}>{pct}%</span>
      </div>
      <div className="w-full bg-[#f0f0f0] rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

// ─── MODAL DE EXEMPLO REUTILIZÁVEL ──────────────────────────────────────────
function ExampleModal({
  title, subtitle, video, color, onClose,
}: {
  title: string; subtitle: string; video: string; color: string; onClose: () => void;
}) {
  const isInstagram = video.startsWith("instagram:")
  const isTiktok = video.startsWith("tiktok:")
  const videoId = video.replace(/^(instagram|tiktok):/, "")

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#eee]">
          <div>
            <p className="font-bold text-sm text-[#0a0a0a]">{title}</p>
            <p className="text-xs text-[#999]">{subtitle}</p>
          </div>
          <button onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#f5f5f5] transition text-[#999] hover:text-[#333]">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5">
          {isInstagram ? (
            <div className="aspect-[9/16] max-h-[60vh] bg-black rounded-xl overflow-hidden mx-auto">
              <iframe
                src={`https://www.instagram.com/reel/${videoId}/embed`}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          ) : isTiktok ? (
            <div className="aspect-[9/16] max-h-[60vh] bg-black rounded-xl overflow-hidden mx-auto">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                className="w-full h-full border-0"
                allowFullScreen
                allow="encrypted-media"
              />
            </div>
          ) : video ? (
            <div className="aspect-[9/16] max-h-[60vh] bg-black rounded-xl overflow-hidden mx-auto">
              <video src={video} controls autoPlay className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="aspect-[9/16] max-h-[60vh] bg-[#f5f5f5] rounded-xl flex flex-col items-center justify-center gap-3 mx-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: color + "15" }}>
                <Play className="w-7 h-7" style={{ color }} />
              </div>
              <p className="text-sm font-semibold text-[#999]">Video de ejemplo</p>
              <p className="text-xs text-[#ccc]">Agrega la URL del video para visualizar</p>
            </div>
          )}
        </div>
        <div className="px-5 pb-5">
          <button onClick={onClose}
            className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: color }}>
            <span className="flex items-center justify-center gap-2">
              <ExternalLink className="w-4 h-4" /> Entendido
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// ─── TRACKER GENÉRICO DE CONTEÚDO ─────────────────────────────────────────────
function ContentTracker({
  prefix, count, title, desc, iconColor, IconComp, checked, onToggle, exampleVideo,
}: {
  prefix: string; count: number; title: string; desc: string;
  iconColor: string; IconComp: React.ElementType;
  checked: Record<string, boolean>; onToggle: (id: string) => void;
  exampleVideo?: string;
}) {
  const [open, setOpen] = useState(false)
  const [showExample, setShowExample] = useState(false)
  const ids  = Array.from({ length: count }, (_, i) => `${prefix}-${i + 1}`)
  const done = ids.filter(id => checked[id]).length

  return (
    <>
      <div className="bg-white border border-[#eee] rounded-2xl overflow-hidden">
        <div className="flex">
          <button onClick={() => setOpen(!open)}
            className="flex-1 p-6 flex items-center justify-between hover:bg-[#fafafa] transition-colors text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${iconColor}18` }}>
                <IconComp className="w-5 h-5" style={{ color: iconColor }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-3xl font-black text-[#0a0a0a]">{count}</p>
                  <p className="text-sm font-semibold text-[#333]">{title}</p>
                </div>
                <p className="text-xs text-[#999]">{desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-sm font-bold" style={{ color: iconColor }}>{done}/{count}</span>
              <span className="text-[#ccc] font-bold text-lg">{open ? "−" : "+"}</span>
            </div>
          </button>
        </div>

        {/* Barra de progresso + botão exemplo */}
        <div className="px-6 pb-4 flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1 bg-[#f0f0f0] rounded-full h-1.5">
              <div className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${Math.round((done / count) * 100)}%`, backgroundColor: iconColor }} />
            </div>
            <span className="text-xs text-[#999] flex-shrink-0">{done}/{count} contenidos</span>
          </div>
          <button
            onClick={() => setShowExample(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all hover:opacity-80 flex-shrink-0"
            style={{ color: iconColor, borderColor: iconColor + "40", backgroundColor: iconColor + "08" }}
          >
            <Play className="w-3.5 h-3.5" /> Ver Ejemplo
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-[#f0f0f0]">
            <div className="divide-y divide-[#f5f5f5]">
              {ids.map((id, i) => {
                const n = i + 1
                const isDone = !!checked[id]
                return (
                  <div key={id}
                    className={`flex items-center gap-4 px-6 py-3 transition-colors ${isDone ? "bg-green-50/40" : "hover:bg-[#fafafa]"}`}>
                    <span className={`text-xs font-black w-6 flex-shrink-0 ${isDone ? "text-green-500" : "text-[#ccc]"}`}>
                      {String(n).padStart(2, "0")}
                    </span>
                    <p className={`flex-1 text-sm font-medium ${isDone ? "text-green-600 line-through" : "text-[#555]"}`}>
                      Contenido {String(n).padStart(2, "0")}
                    </p>
                    <button onClick={() => onToggle(id)} className="flex-shrink-0 transition-transform active:scale-90">
                      {isDone
                        ? <CheckCircle className="w-5 h-5 text-green-500" />
                        : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
      {showExample && (
        <ExampleModal
          title={title}
          subtitle={`Ejemplo de referencia · ${desc}`}
          video={exampleVideo || ""}
          color={iconColor}
          onClose={() => setShowExample(false)}
        />
      )}
    </>
  )
}

// ─── CARD DE CTAs DA DESIGNER ─────────────────────────────────────────────────
function CTADesignerCard({ checked, onToggle }: { checked: Record<string, boolean>; onToggle: (id: string) => void }) {
  const [exampleModal, setExampleModal] = useState<string | null>(null)

  const ctas = [
    { id: "cta-designer-ig", label: "CTA Instagram", cta: "Comenta Black Friday",     Icon: IGIcon,  color: "#E1306C", bg: "bg-pink-50",   border: "border-pink-200", exampleVideo: "" },
    { id: "cta-designer-tt", label: "CTA TikTok",    cta: "Link en mi bio", Icon: TTIcon,  color: "#161823", bg: "bg-slate-50",  border: "border-slate-200", exampleVideo: "" },
    { id: "cta-designer-tp", label: "CTA Pago",      cta: "Saber Mas",
      Icon: ({ size }: { size?: number }) => <DollarSign size={size ?? 20} color="#F97316" />,
      color: "#F97316", bg: "bg-orange-50", border: "border-orange-200", exampleVideo: "" },
  ]
  const doneCtas = ctas.filter(c => checked[c.id]).length
  const activeCta = ctas.find(c => c.id === exampleModal)

  return (
    <>
      <div className="bg-white border border-[#eee] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-bold text-[#8B5CF6] uppercase tracking-widest mb-0.5">Designer</p>
            <p className="font-semibold text-sm text-[#333]">3 CTAs producidos por la disenadora · se uniran a los contenidos despues</p>
          </div>
          <span className="text-sm font-bold text-[#8B5CF6]">{doneCtas}/3</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {ctas.map(c => {
            const done = !!checked[c.id]
            return (
              <div key={c.id} className={`rounded-xl border flex flex-col items-center gap-2 transition-all text-center overflow-hidden ${
                done ? "border-green-300 bg-green-50" : `${c.border} ${c.bg}`
              }`}>
                <button onClick={() => onToggle(c.id)}
                  className="w-full p-4 flex flex-col items-center gap-2 hover:opacity-80 transition-all">
                  <c.Icon size={22} />
                  <p className="text-xs font-bold" style={{ color: done ? "#22c55e" : c.color }}>{c.label}</p>
                  <p className="text-xs text-[#999]">"{c.cta}"</p>
                  {done
                    ? <CheckCircle className="w-4 h-4 text-green-500" />
                    : <Circle className="w-4 h-4 text-[#ccc]" />}
                </button>
                <button
                  onClick={() => setExampleModal(c.id)}
                  className="w-full py-2.5 border-t text-xs font-bold flex items-center justify-center gap-1.5 transition-all hover:bg-white/80"
                  style={{ color: c.color, borderColor: done ? "#bbf7d0" : undefined }}
                >
                  <Play className="w-3.5 h-3.5" /> Ver Ejemplo
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {exampleModal && activeCta && (
        <ExampleModal
          title={activeCta.label}
          subtitle={`Ejemplo de CTA: "${activeCta.cta}"`}
          video={activeCta.exampleVideo}
          color={activeCta.color}
          onClose={() => setExampleModal(null)}
        />
      )}
    </>
  )
}

function ContentCards({ items, checked, toggle, startIndex }: {
  items: typeof contentItems; checked: Record<string, boolean>; toggle: (id: string) => void; startIndex: number;
}) {
  const [exampleIdx, setExampleIdx] = useState<number | null>(null)
  const activeItem = exampleIdx !== null ? items[exampleIdx] : null

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {items.map((item, i) => {
          const id = `conteudo-${i + startIndex}`
          const done = !!checked[id]
          return (
            <motion.div key={i} variants={fadeUp}
              className={`bg-white border rounded-2xl overflow-hidden transition-all ${done ? "border-green-200 bg-green-50/30" : "border-[#eee]"}`}>
              <div className="p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: done ? "#22c55e18" : "#4B6BFB12" }}>
                  <item.icon className="w-5 h-5" style={{ color: done ? "#22c55e" : "#4B6BFB" }} />
                </div>
                <div className="flex-1">
                  <p className={`text-3xl font-black ${done ? "text-green-500" : "text-[#0a0a0a]"}`}>{item.qty}</p>
                  <p className={`text-sm font-semibold leading-tight ${done ? "line-through text-[#999]" : "text-[#333]"}`}>{item.label}</p>
                  <p className="text-xs text-[#999] mt-1">{item.desc}</p>
                </div>
                <button onClick={() => toggle(id)} className="flex-shrink-0 mt-1 transition-transform active:scale-90">
                  {done
                    ? <CheckCircle className="w-5 h-5 text-green-500" />
                    : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
                </button>
              </div>
              <button
                onClick={() => setExampleIdx(i)}
                className="w-full py-2.5 border-t text-xs font-bold flex items-center justify-center gap-1.5 text-[#4B6BFB] hover:bg-blue-50/50 transition-all"
                style={{ borderColor: done ? "#bbf7d0" : "#eee" }}
              >
                <Play className="w-3.5 h-3.5" /> Ver Ejemplo
              </button>
            </motion.div>
          )
        })}
      </div>
      {exampleIdx !== null && activeItem && (
        <ExampleModal
          title={activeItem.label}
          subtitle={`Ejemplo de referencia · ${activeItem.desc}`}
          video={activeItem.exampleVideo}
          color="#4B6BFB"
          onClose={() => setExampleIdx(null)}
        />
      )}
    </>
  )
}

function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="mb-8">
      <span className="text-[#4B6BFB] text-xs font-bold uppercase tracking-widest mb-2 block">{label}</span>
      <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0a]">{title}</h2>
    </motion.div>
  )
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function BlackPlanejamentoEcoSpace() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null)

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem("bf-ecospace-checklist-2026") || "{}") }
    catch { return {} }
  })

  const [config, setConfig] = useState(() => {
    try { return { ...defaultConfig, ...JSON.parse(localStorage.getItem("bf-ecospace-config-2026") || "{}") } }
    catch { return { ...defaultConfig } }
  })

  const [entregaveis, setEntregaveis] = useState<string[]>(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("bf-ecospace-entregaveis-2026") || "null")
      if (!stored) return [...defaultEntregaveis]
      if (stored.length < defaultEntregaveis.length) {
        return [...stored, ...defaultEntregaveis.slice(stored.length)]
      }
      return stored
    }
    catch { return [...defaultEntregaveis] }
  })

  const [narrativa, setNarrativa] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("bf-ecospace-narrativa-2026") || "null") || defaultNarrativa }
    catch { return [...defaultNarrativa] }
  })

  useEffect(() => {
    localStorage.setItem("bf-ecospace-checklist-2026", JSON.stringify(checked))
  }, [checked])

  useEffect(() => {
    localStorage.setItem("bf-ecospace-config-2026", JSON.stringify(config))
  }, [config])

  useEffect(() => {
    localStorage.setItem("bf-ecospace-entregaveis-2026", JSON.stringify(entregaveis))
  }, [entregaveis])

  useEffect(() => {
    localStorage.setItem("bf-ecospace-narrativa-2026", JSON.stringify(narrativa))
  }, [narrativa])

  const updateConfig = (key: string, value: string) => setConfig((prev: typeof defaultConfig) => ({ ...prev, [key]: value }))
  const updateEntregavel = (i: number, value: string) => setEntregaveis((prev: string[]) => prev.map((v: string, j: number) => j === i ? value : v))
  const updateNarrativa = (i: number, value: string) => setNarrativa((prev: string[]) => prev.map((v: string, j: number) => j === i ? value : v))

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const allReelsDone       = reelIds.every(id => checked[id])
  const allCaptacaoDone    = captacaoIds.every(id => checked[id])
  const allDepoimentosDone = depoimentoIds.every(id => checked[id])
  const effectiveChecked = {
    ...checked,
    "reels-block": allReelsDone,
    "captacao-block": allCaptacaoDone,
    "depoimentos-block": allDepoimentosDone,
  }
  const totalDone = allTaskIds.filter(id => effectiveChecked[id]).length
  const totalTasks = allTaskIds.length
  const totalPct = Math.round((totalDone / totalTasks) * 100)

  const resetAll = () => {
    if (confirm("¿Estas seguro de que deseas reiniciar todo el progreso?")) {
      setChecked({})
    }
  }

  const navLinks = [
    { href: "#oferta",     label: "Oferta" },
    { href: "#conteudo",   label: "Contenido" },
    { href: "#trafego",    label: "Trafico" },
    { href: "#base",       label: "Base API" },
    { href: "#links",      label: "Enlaces" },
    { href: "#semanas",    label: "8 Semanas" },
    { href: "#calendario", label: "Calendario" },
  ]

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-outfit antialiased">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eee]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">EC</span>
            </div>
            <span className="font-bold text-[#0a0a0a] hidden sm:block">EcoSpace</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm text-[#555]">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-[#4B6BFB] transition font-medium">{l.label}</a>
            ))}
          </div>
          {/* Progresso geral */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-28 bg-[#f0f0f0] rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-r from-[#4B6BFB] to-[#F97316] transition-all duration-500"
                  style={{ width: `${totalPct}%` }} />
              </div>
              <span className="text-xs font-bold text-[#4B6BFB]">{totalPct}%</span>
            </div>
            <button onClick={resetAll} title="Reiniciar progreso"
              className="p-1.5 rounded-lg text-[#ccc] hover:text-red-400 hover:bg-red-50 transition">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Barra de progresso geral */}
        <div className="h-0.5 bg-[#f5f5f5]">
          <div className="h-0.5 bg-gradient-to-r from-[#4B6BFB] via-[#8B5CF6] to-[#F97316] transition-all duration-500"
            style={{ width: `${totalPct}%` }} />
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block px-3 py-1 rounded-full bg-[#4B6BFB]/10 border border-[#4B6BFB]/20 text-[#4B6BFB] text-xs font-bold uppercase tracking-widest mb-5">
            Planificacion Interna · 2026
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-[clamp(3rem,9vw,7rem)] font-black leading-[1.0] mb-4 tracking-tight">
            Plan de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] via-[#8B5CF6] to-[#EF4444]">
              Black Friday
            </span>
            <br /><span className="text-[#bbb]">para creadores.</span>
          </motion.h1>
          <motion.div variants={fadeUp}>
            <svg viewBox="0 0 1200 60" className="w-full h-8 mb-8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4B6BFB" /><stop offset="50%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              <path d="M0,30 C150,5 300,55 450,30 C600,5 750,55 900,30 C1050,5 1150,45 1200,30" fill="none" stroke="url(#wg)" strokeWidth="3" />
            </svg>
          </motion.div>

          {/* Card de progresso geral */}
          <motion.div variants={fadeUp} className="bg-gradient-to-r from-[#4B6BFB]/5 via-[#8B5CF6]/5 to-[#F97316]/5 border border-[#4B6BFB]/15 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <p className="text-sm text-[#666] mb-1">Progreso general del equipo</p>
              <p className="text-4xl font-black text-[#0a0a0a]">{totalPct}<span className="text-xl text-[#999]">%</span></p>
              <p className="text-xs text-[#999] mt-1">{totalDone} de {totalTasks} tareas completadas</p>
            </div>
            <div className="flex-1">
              <div className="w-full bg-[#eee] rounded-full h-3">
                <div className="h-3 rounded-full bg-gradient-to-r from-[#4B6BFB] via-[#8B5CF6] to-[#F97316] transition-all duration-700"
                  style={{ width: `${totalPct}%` }} />
              </div>
              <div className="flex justify-between mt-2 text-xs text-[#999]">
                <span>0%</span><span>50%</span><span>100%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OFERTA & NARRATIVA */}
      <section id="oferta" className="px-6 py-20 max-w-7xl mx-auto border-t border-[#f0f0f0]">
        <SectionHeader label="Oferta y Narrativa" title="La Promesa y el Producto" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid md:grid-cols-2 gap-4">

          {/* Informações base */}
          <motion.div variants={fadeUp} className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">

            {/* Nome do evento — destaque grande */}
            <div className={`col-span-2 md:col-span-1 bg-gradient-to-br from-[#4B6BFB] to-[#8B5CF6] rounded-2xl p-6 flex flex-col justify-between text-white relative ${checked["card-evento"] ? "ring-2 ring-green-400" : ""}`}>
              <button onClick={() => toggle("card-evento")} className="absolute top-4 right-4 transition-transform active:scale-90">
                {checked["card-evento"] ? <CheckCircle className="w-5 h-5 text-green-300" /> : <Circle className="w-5 h-5 text-white/40 hover:text-white/70" />}
              </button>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Nombre del Evento</p>
              <EditableText
                value={config.eventName}
                onChange={v => updateConfig("eventName", v)}
                className="text-2xl font-black leading-tight text-white"
                multiline
              />
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
                <Calendar className="w-4 h-4 text-white/70" />
                <span className="text-white/70 text-xs uppercase tracking-widest">Apertura ·</span>
                <EditableText
                  value={config.eventDate}
                  onChange={v => updateConfig("eventDate", v)}
                  className="text-white/70 text-xs uppercase tracking-widest"
                />
              </div>
            </div>

            {/* Valor do produto */}
            <div className={`bg-white border rounded-2xl p-6 flex flex-col justify-between relative ${checked["card-produto"] ? "border-green-300 bg-green-50/30" : "border-[#eee]"}`}>
              <button onClick={() => toggle("card-produto")} className="absolute top-4 right-4 transition-transform active:scale-90">
                {checked["card-produto"] ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
              </button>
              <p className="text-[#999] text-xs uppercase tracking-widest mb-2">Valor del Producto</p>
              <EditableText
                value={config.productValue}
                onChange={v => updateConfig("productValue", v)}
                className="text-3xl font-black text-[#0a0a0a]"
              />
              <EditableText
                value={config.productAccess}
                onChange={v => updateConfig("productAccess", v)}
                className="text-sm font-semibold text-[#4B6BFB] mt-1"
              />
            </div>

            {/* Investimento */}
            <div className={`bg-white border rounded-2xl p-6 flex flex-col justify-between relative ${checked["card-inversion"] ? "border-green-300 bg-green-50/30" : "border-[#eee]"}`}>
              <button onClick={() => toggle("card-inversion")} className="absolute top-4 right-4 transition-transform active:scale-90">
                {checked["card-inversion"] ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
              </button>
              <p className="text-[#999] text-xs uppercase tracking-widest mb-2">Inversion Trafico / API</p>
              <EditableText
                value={config.investmentValue}
                onChange={v => updateConfig("investmentValue", v)}
                className="text-3xl font-black text-[#F97316]"
              />
              <EditableText
                value={config.investmentDesc}
                onChange={v => updateConfig("investmentDesc", v)}
                className="text-sm text-[#999] mt-1"
              />
            </div>

            {/* CPL */}
            <div className={`bg-white border rounded-2xl p-6 flex flex-col justify-between relative ${checked["card-cpl"] ? "border-green-300 bg-green-50/30" : "border-[#eee]"}`}>
              <button onClick={() => toggle("card-cpl")} className="absolute top-4 right-4 transition-transform active:scale-90">
                {checked["card-cpl"] ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
              </button>
              <p className="text-[#999] text-xs uppercase tracking-widest mb-2">Costo por Lead (CPL)</p>
              <EditableText
                value={config.cplValue}
                onChange={v => updateConfig("cplValue", v)}
                className="text-3xl font-black text-[#EF4444]"
              />
              <EditableText
                value={config.cplDesc}
                onChange={v => updateConfig("cplDesc", v)}
                className="text-sm text-[#999] mt-1"
              />
            </div>

            {/* Meta de leads */}
            <div className={`bg-white border rounded-2xl p-6 flex flex-col justify-between relative ${checked["card-leads"] ? "border-green-300 bg-green-50/30" : "border-[#eee]"}`}>
              <button onClick={() => toggle("card-leads")} className="absolute top-4 right-4 transition-transform active:scale-90">
                {checked["card-leads"] ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-[#ccc] hover:text-[#aaa]" />}
              </button>
              <p className="text-[#999] text-xs uppercase tracking-widest mb-2">Meta de Leads</p>
              <EditableText
                value={config.leadsGoal}
                onChange={v => updateConfig("leadsGoal", v)}
                className="text-3xl font-black text-[#8B5CF6]"
              />
              <EditableText
                value={config.leadsDesc}
                onChange={v => updateConfig("leadsDesc", v)}
                className="text-sm text-[#999] mt-1"
              />
            </div>

          </motion.div>


          <motion.div variants={fadeUp} className="bg-[#fafafa] border border-[#eee] rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center"><Package className="w-4 h-4 text-blue-600" /></div>
              <h3 className="font-bold text-[#0a0a0a]">Entregables</h3>
            </div>
            <ul className="space-y-3">
              {entregaveis.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <button
                    onClick={() => toggle(`entrega-${i}`)}
                    className="mt-0.5 flex-shrink-0 transition-transform active:scale-90"
                    title={checked[`entrega-${i}`] ? "Marcar como pendiente" : "Marcar como completada"}
                  >
                    {checked[`entrega-${i}`]
                      ? <CheckCircle className="w-5 h-5 text-[#4B6BFB]" />
                      : <Circle className="w-5 h-5 text-[#ccc] group-hover:text-[#aaa] transition-colors" />
                    }
                  </button>
                  <EditableText
                    value={item}
                    onChange={v => updateEntregavel(i, v)}
                    className={`text-sm leading-relaxed transition-all flex-1 ${checked[`entrega-${i}`] ? "line-through opacity-40" : "text-[#444]"}`}
                  />
                </li>
              ))}
            </ul>
            <ProgressBar ids={entregaveis.map((_, i) => `entrega-${i}`)} checked={checked} color="#4B6BFB" />
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 border border-purple-100 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center"><Zap className="w-4 h-4 text-purple-600" /></div>
              <h3 className="font-bold text-[#0a0a0a]">Narrativa de la Campana</h3>
            </div>
            <div className="space-y-2.5">
              {narrativa.map((item, i) => (
                <EditableText
                  key={i}
                  value={item}
                  onChange={v => updateNarrativa(i, v)}
                  className="text-sm text-[#333] font-medium block"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTEÚDO */}
      <section id="conteudo" className="px-6 py-20 bg-[#fafafa] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Contenido" title="Produccion de Contenido" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
            {/* CTAs da designer (3 peças) */}
            <div className="mb-4">
              <CTADesignerCard checked={checked} onToggle={toggle} />
            </div>

            {/* Tracker: Captação Orgânica (15 conteúdos) */}
            <div className="mb-4">
              <ContentTracker
                prefix="captacao" count={15}
                title="Contenidos de Captacion Organica"
                desc="Contenidos para atraer nuevos leads de forma organica"
                iconColor="#8B5CF6" IconComp={Video}
                checked={checked} onToggle={toggle}
                exampleVideo=""
              />
            </div>

            {/* Tracker: Depoimentos / melhores testemunhos (10) */}
            <div className="mb-4">
              <ContentTracker
                prefix="depoimento" count={10}
                title="Testimonios — Los Mejores"
                desc="Seleccion de los mejores testimonios para prueba social en la campana"
                iconColor="#F59E0B" IconComp={Star}
                checked={checked} onToggle={toggle}
                exampleVideo=""
              />
            </div>

            {/* Tracker: Os mais visualizados (20 conteúdos) */}
            <div className="mb-4">
              <ContentTracker
                prefix="reel" count={20}
                title="Contenidos — Los mas vistos"
                desc="Republicar con CTA de Black Friday al final"
                iconColor="#4B6BFB" IconComp={Play}
                checked={checked} onToggle={toggle}
                exampleVideo=""
              />
            </div>

            {/* Demais cards de conteúdo com check */}
            <ContentCards items={contentItems.filter((_, i) => i >= 2)} checked={checked} toggle={toggle} startIndex={2} />

            <ProgressBar ids={contentItems.filter((_, i) => i >= 2).map((_, i) => `conteudo-${i + 2}`)} checked={checked} color="#4B6BFB" />

            {/* Live */}
            <motion.div variants={fadeUp} className="mt-4 border border-[#4B6BFB]/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              style={{ background: "linear-gradient(to right, #4B6BFB10, transparent)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4B6BFB]/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-[#4B6BFB]" />
                </div>
                <div>
                  <p className="font-bold text-[#0a0a0a]">1 Live de Presentacion del Black Friday + Apertura de Carrito</p>
                  <p className="text-xs text-[#999] mt-0.5">Guion completo disponible en el enlace</p>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-semibold rounded-xl hover:bg-[#333] transition whitespace-nowrap">
                <FileText className="w-4 h-4" /> Guion del Live
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRÁFEGO */}
      <section id="trafego" className="px-6 py-20 max-w-7xl mx-auto">
        <SectionHeader label="Trafico" title="Inversion y metas" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { icon: Calendar,     label: "Dias de Captacion",         value: "21–30 dias" },
              { icon: ShoppingCart, label: "Carrito Abierto",          value: "7–10 dias" },
              { icon: Users,        label: "Meta de Leads",            value: "5.000" },
              { icon: TrendingUp,   label: "Costo por Lead Estimado",  value: "$2,00" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#fafafa] border border-[#eee] rounded-2xl p-5">
                <item.icon className="w-5 h-5 text-[#4B6BFB] mb-3" />
                <p className="text-[#999] text-xs mb-1">{item.label}</p>
                <p className="font-bold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: DollarSign, label: "Inversion Total",              value: "$10.000" },
              { icon: BarChart3,  label: "Conversion Esperada",        value: "3% a 10%" },
              { icon: TrendingUp, label: "Estimacion de Facturacion",  value: "$75k – $250k" },
              { icon: Zap,        label: "ROI Esperado",               value: "7.5x – 25x" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#fafafa] border border-[#eee] rounded-2xl p-5">
                <item.icon className="w-5 h-5 text-[#EF4444] mb-3" />
                <p className="text-[#999] text-xs mb-1">{item.label}</p>
                <p className="font-bold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {goalColumns.map((g, i) => (
              <motion.div key={i} variants={fadeUp} className={`bg-white border ${g.border} rounded-2xl p-6`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${g.bg} mb-4`}>
                  <g.icon className={`w-4 h-4 ${g.color}`} />
                  <span className={`text-xs font-bold ${g.color}`}>{g.label}</span>
                </div>
                <ul className="space-y-2">
                  {g.items.map((item, j) => (
                    <li key={j} className={`text-sm text-[#555] flex items-center gap-2`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${g.dot}`} />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BASE API */}
      <section id="base" className="px-6 py-20 bg-[#fafafa] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Base · Captacion por API" title="Disparos y listas" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid md:grid-cols-3 gap-4">
            <motion.div variants={fadeUp} className="bg-white border border-[#eee] rounded-2xl p-6">
              <Users className="w-5 h-5 text-[#4B6BFB] mb-3" />
              <p className="text-[#999] text-xs mb-1">Total de Leads en la Lista</p>
              <p className="font-black text-3xl">—</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white border border-[#eee] rounded-2xl p-6">
              <Star className="w-5 h-5 text-[#8B5CF6] mb-3" />
              <p className="text-[#999] text-xs mb-1">Lista de Alumnos</p>
              <p className="font-black text-3xl">—</p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-100 rounded-2xl p-6">
              <Mail className="w-5 h-5 text-[#8B5CF6] mb-3" />
              <p className="text-[#999] text-xs mb-1">Disparos de API con Imagenes</p>
              <p className="font-black text-3xl">4–8</p>
              <p className="text-[#999] text-xs mt-1">secuencias programadas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LINKS */}
      <section id="links" className="px-6 py-20 max-w-7xl mx-auto">
        <SectionHeader label="Material de Consulta" title="Enlaces y recursos" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {materialLinks.map((link, i) => (
            <motion.a key={i} href={link.href} variants={fadeUp}
              className="bg-[#fafafa] border border-[#eee] rounded-xl p-4 flex items-center gap-3 hover:border-[#4B6BFB]/40 hover:bg-blue-50 transition-all group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4B6BFB]/15 transition" style={{ backgroundColor: "#4B6BFB10" }}>
                <link.icon className="w-4 h-4 text-[#4B6BFB]" />
              </div>
              <span className="text-sm font-semibold text-[#555] group-hover:text-[#4B6BFB] transition">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* 8 SEMANAS */}
      <section id="semanas" className="px-6 py-20 bg-[#fafafa] border-y border-[#eee]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Planificacion Semanal" title="8 semanas · paso a paso" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={stagger} className="space-y-2">
            {weekPlan.map((w) => {
              const taskIds = w.tasks.map((_, i) => `semana-${w.week}-${i}`)
              const done = taskIds.filter(id => checked[id]).length
              const isOpen = activeWeek === w.week
              return (
                <motion.div key={w.week} variants={fadeUp}>
                  <button onClick={() => setActiveWeek(isOpen ? null : w.week)}
                    className="w-full bg-white border border-[#eee] rounded-2xl p-5 flex items-center justify-between hover:border-[#4B6BFB]/30 transition-all text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0"
                        style={{ backgroundColor: w.color + "18", color: w.color }}>
                        S{w.week}
                      </div>
                      <div>
                        <p className="font-bold text-sm">Semana {w.week}</p>
                        <p className="text-xs font-medium" style={{ color: w.color }}>{w.phase}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* mini progresso */}
                      <div className="hidden sm:flex items-center gap-2">
                        <div className="w-20 bg-[#f0f0f0] rounded-full h-1.5">
                          <div className="h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${Math.round((done/w.tasks.length)*100)}%`, backgroundColor: w.color }} />
                        </div>
                        <span className="text-xs text-[#999]">{done}/{w.tasks.length}</span>
                      </div>
                      <span className="text-[#ccc] font-bold text-lg">{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-t-0 border-[#eee] rounded-b-2xl px-6 pb-6 pt-4 -mt-2">
                      <ul className="space-y-3">
                        {w.tasks.map((task, i) => {
                          const id = `semana-${w.week}-${i}`
                          return <TaskItem key={i} id={id} text={task} color={w.color} checked={!!checked[id]} onToggle={toggle} />
                        })}
                      </ul>
                      <ProgressBar ids={taskIds} checked={checked} color={w.color} />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CALENDÁRIO */}
      <section id="calendario" className="px-6 py-20 max-w-7xl mx-auto">
        <SectionHeader label="Calendario" title={<>Calendario <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B6BFB] via-[#8B5CF6] to-[#EF4444]">Black Friday</span></>} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {phases.map((phase) => {
              const taskIds = phase.tasks.map((_, i) => `fase-${phase.id}-${i}`)
              return (
                <motion.div key={phase.id} variants={fadeUp} className={`bg-white border ${phase.border} rounded-2xl p-7`}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: phase.color + "18" }}>
                      <phase.icon className="w-5 h-5" style={{ color: phase.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{phase.label}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${phase.badge}`}>{phase.weeks}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, i) => {
                      const id = `fase-${phase.id}-${i}`
                      return <TaskItem key={i} id={id} text={task} color={phase.color} checked={!!checked[id]} onToggle={toggle} />
                    })}
                  </ul>
                  <ProgressBar ids={taskIds} checked={checked} color={phase.color} />
                </motion.div>
              )
            })}
          </div>

          {/* Barra de progresso das semanas */}
          <motion.div variants={fadeUp} className="flex rounded-xl overflow-hidden h-12 mb-5 shadow-sm">
            <div className="flex items-center justify-center bg-[#4B6BFB] font-bold text-white text-sm" style={{ width: "12.5%" }}>S1</div>
            <div className="flex items-center justify-center bg-[#8B5CF6] font-bold text-white text-sm" style={{ width: "25%" }}>S2–S3</div>
            <div className="flex items-center justify-center bg-[#EF4444] font-bold text-white text-sm" style={{ width: "50%" }}>S4–S7</div>
            <div className="flex items-center justify-center bg-[#F97316] font-bold text-white text-sm" style={{ width: "12.5%" }}>S8</div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {phases.map((phase) => (
              <div key={phase.id} className="flex items-start gap-2">
                <div className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${phase.dot}`} />
                <div><p className="font-semibold text-sm">{phase.label}</p><p className="text-[#999] text-xs">{phase.weeks}</p></div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {[1,2,3,4,5,6,7,8].map((week) => {
              const wl = weekLabels[week]
              const w = weekPlan[week - 1]
              const taskIds = w.tasks.map((_, i) => `semana-${week}-${i}`)
              const done = taskIds.filter(id => checked[id]).length
              const allDone = done === w.tasks.length
              return (
                <button key={week} onClick={() => { document.getElementById("semanas")?.scrollIntoView({behavior:"smooth"}); setActiveWeek(week) }}
                  className={`rounded-xl border ${wl.border} ${allDone ? "bg-green-50 border-green-300" : wl.bg} hover:opacity-80 p-3 text-center transition-all`}>
                  <p className={`font-black text-sm ${allDone ? "text-green-600" : "text-[#0a0a0a]"}`}>S{week}</p>
                  <p className={`text-xs mt-0.5 font-semibold ${allDone ? "text-green-500" : wl.color}`}>{allDone ? "✓ OK" : wl.phase}</p>
                </button>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eee] py-8 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4B6BFB] via-[#8B5CF6] to-[#F97316] flex items-center justify-center">
              <span className="text-white font-bold text-xs">EC</span>
            </div>
            <span className="text-[#999] text-sm">EcoSpace · Black Friday 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#ccc] text-xs">{totalDone}/{totalTasks} tareas · {totalPct}% completado</span>
            <button onClick={resetAll} className="text-xs text-red-400 hover:text-red-500 transition flex items-center gap-1">
              <RotateCcw className="w-3 h-3" /> Reiniciar
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
