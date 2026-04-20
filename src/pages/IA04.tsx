import { useState } from "react"
import { TrendingUp, Users, DollarSign, BarChart2, Calendar, Eye, Radio, MessageCircle, Search, ShoppingCart, Target, RefreshCcw, ChevronDown, ChevronUp, Heart, Clock } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const LAUNCH = {
  cartOpen: "08/04/2026",
  cartClose: "16/04/2026",
  cartDays: 9,
  price: 250,
}

const SALES = {
  firstDay: 84,
  week: 287,
  total: 371,
}

const REVENUE = {
  main: LAUNCH.price * 371,
  gross: LAUNCH.price * 371,
}

const REFUNDS = { count: 6 }

const ADS = {
  leadFb: 17693.60,
  leadGoogle: 3978.27,
  leadTotal: 21671.87,
  remarkFb: 1025.46,
  remarkGoogle: 0,
  remarkTotal: 1025.46,
  api: 1038.15,
  fbTotal: 18719.06,
  googleTotal: 3978.27,
  trafficTotal: 22697.33,
  grandTotal: 23735.48,
}

const ROAS = REVENUE.gross / ADS.grandTotal

const LEADS = {
  organic: 630,
  facebook: 21430,
  google: 3381,
  total: 25441,
  cplFb: 0.83,
  cplGoogle: 1.18,
  cplAvg: 1.12,
}

const CLASSES = [
  { name: "Clase 01", views: 28402, live: 4213, attendance: 18 },
  { name: "Clase 02", views: 14424, live: 2704, attendance: 64 },
  { name: "Clase 03", views: 12480, live: 2377, attendance: 56 },
  { name: "Clase 04", views: 8100,  live: 1487, attendance: 35 },
]

const OTHER = {
  whatsapp: 22783,
  research: 7660,
  checkoutFirstDay: 2156,
  salesPageVisitors: 3523,
}

const YOUTUBE = [
  {
    name: "Clase 01",
    newViewers: 8338, returning: 8749, avgViewsPerViewer: 1.74, uniqueViewers: 17104,
    avgDuration: "18:58", likes: 2165, subscriptions: 1389, shares: 1497,
    reminders: 2107, chatMessages: 8914, reactions: 4824, hoursStreamed: 1.70,
    views: 29842, watchHours: 9439.64, subscribers: 1379,
  },
  {
    name: "Clase 02",
    newViewers: 1548, returning: 7224, avgViewsPerViewer: 1.75, uniqueViewers: 8799,
    avgDuration: "22:10", likes: 918, subscriptions: 245, shares: 750,
    reminders: 785, chatMessages: 4400, reactions: 2579, hoursStreamed: 1.74,
    views: 15452, watchHours: 5709.70, subscribers: 242,
  },
  {
    name: "Clase 03",
    newViewers: 1610, returning: 6520, avgViewsPerViewer: 1.64, uniqueViewers: 8148,
    avgDuration: "22:46", likes: 784, subscriptions: 204, shares: 673,
    reminders: 500, chatMessages: 4126, reactions: 1761, hoursStreamed: 2.09,
    views: 13406, watchHours: 5088.75, subscribers: 197,
  },
  {
    name: "Clase 04",
    newViewers: 879, returning: 4842, avgViewsPerViewer: 1.58, uniqueViewers: 5741,
    avgDuration: "23:06", likes: 498, subscriptions: 87, shares: 435,
    reminders: 240, chatMessages: 4172, reactions: 1933, hoursStreamed: 2.66,
    views: 9152, watchHours: 3524.42, subscribers: 81,
  },
]

const COUNTRIES = [
  { flag: "🇨🇴", name: "Colombia", count: 200 },
  { flag: "🇲🇽", name: "México", count: 50 },
  { flag: "🇵🇪", name: "Perú", count: 24 },
  { flag: "🇩🇴", name: "República Dominicana", count: 19 },
  { flag: "🇺🇸", name: "Estados Unidos", count: 19 },
  { flag: "🇪🇨", name: "Ecuador", count: 16 },
  { flag: "🇨🇱", name: "Chile", count: 10 },
  { flag: "🇦🇷", name: "Argentina", count: 10 },
  { flag: "🇬🇹", name: "Guatemala", count: 6 },
  { flag: "🇵🇦", name: "Panamá", count: 5 },
  { flag: "🇻🇪", name: "Venezuela", count: 3 },
  { flag: "🇵🇷", name: "Puerto Rico", count: 3 },
  { flag: "🇨🇷", name: "Costa Rica", count: 2 },
  { flag: "🇮🇱", name: "Israel", count: 1 },
  { flag: "🇪🇸", name: "España", count: 1 },
  { flag: "🇨🇦", name: "Canadá", count: 1 },
  { flag: "🇧🇴", name: "Bolivia", count: 1 },
]
const COUNTRIES_TOTAL = COUNTRIES.reduce((s, c) => s + c.count, 0)

const HOTMART = {
  totalVentas: 330,
  alContado: 286,
  cuotas4: 43,
  ingresoNeto: 34691,
  facturacionBruta: 75222,
  vendedoras: [
    { name: "Link principal", code: "none", total: 222, contado: 222, cuotas: 0, neto: 25396, bruto: 55026, pct: 67.3, color: "#6b7280" },
    { name: "Victoria", code: "Vi", total: 33, contado: 19, cuotas: 13, neto: 2976, bruto: 6463, pct: 10.0, color: "#00983A" },
    { name: "Janis", code: "Ja", total: 31, contado: 20, cuotas: 11, neto: 2764, bruto: 6005, pct: 9.4, color: "#00983A" },
    { name: "DUNEIKAL", code: "Du", total: 26, contado: 13, cuotas: 13, neto: 1944, bruto: 4231, pct: 7.9, color: "#fc6c04" },
    { name: "Andrea", code: "An", total: 11, contado: 7, cuotas: 4, neto: 942, bruto: 2047, pct: 3.3, color: "#fc6c04" },
    { name: "Stephanie", code: "St", total: 3, contado: 3, cuotas: 0, neto: 346, bruto: 750, pct: 0.9, color: "#a78bfa" },
    { name: "Daniela", code: "Da", total: 3, contado: 2, cuotas: 1, neto: 262, bruto: 569, pct: 0.9, color: "#a78bfa" },
    { name: "Lucy", code: "Lu", total: 1, contado: 0, cuotas: 1, neto: 60, bruto: 131, pct: 0.3, color: "#1877F2" },
  ],
  metodosPago: [
    { name: "Tarjeta de crédito", count: 251, pct: 76.1 },
    { name: "PSE", count: 21, pct: 6.4 },
    { name: "Nequi", count: 20, pct: 6.1 },
    { name: "PayPal", count: 12, pct: 3.6 },
    { name: "Bancolombia", count: 8, pct: 2.4 },
    { name: "Baloto", count: 6, pct: 1.8 },
    { name: "Mercado Pago", count: 4, pct: 1.2 },
    { name: "Yape / PagoEfectivo / otros", count: 8, pct: 2.4 },
  ],
  codigos: [
    { code: "csuchyxr", tipo: "Al contado", desc: "Oferta base — pago único", ventas: 286, pct: 86.7, valor: 114.61 },
    { code: "2usjqn8b", tipo: "4 cuotas", desc: "Accede a la Formación: IA para Negocios", ventas: 43, pct: 13.0, valor: 43.91 },
    { code: "klefyui0", tipo: "Variante", desc: "Accede a la Formación: IA para Negocios", ventas: 1, pct: 0.3, valor: 115.48 },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fmt = (n: number, digits = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })

const fmtInt = (n: number) => n.toLocaleString("en-US")

// ─── Shared UI ───────────────────────────────────────────────────────────────

const SectionTitle = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-2 mb-6">
    <Icon className="w-4 h-4 text-[#fc6c04]" />
    <h2 className="font-outfit text-sm font-bold uppercase tracking-fire text-white">{label}</h2>
  </div>
)

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl p-6 md:p-8 ${className}`} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
    {children}
  </div>
)

const KpiCard = ({
  label, value, sub, color = "default",
}: {
  label: string; value: string; sub?: string; color?: "orange" | "green" | "red" | "blue" | "purple" | "default"
}) => {
  const bg: Record<string, string> = {
    orange:  "#fc6c04",
    green:   "#00983A",
    red:     "#dc2626",
    blue:    "#1877F2",
    purple:  "#7c3aed",
    default: "rgba(255,255,255,0.05)",
  }
  const border: Record<string, string> = {
    orange:  "none",
    green:   "none",
    red:     "none",
    blue:    "none",
    purple:  "none",
    default: "1px solid rgba(255,255,255,0.1)",
  }
  return (
    <div className="rounded-2xl p-5 md:p-6 flex flex-col gap-2" style={{ background: bg[color], border: border[color] }}>
      <span className={`font-outfit text-xs font-semibold uppercase tracking-fire ${color === "default" ? "text-white/45" : "text-white/80"}`}>{label}</span>
      <span className="font-outfit font-black text-white leading-none" style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}>{value}</span>
      {sub && <span className={`font-outfit text-xs ${color === "default" ? "text-white/40" : "text-white/70"}`}>{sub}</span>}
    </div>
  )
}

const BarRow = ({ label, value, max, color, sub }: { label: string; value: number; max: number; color: string; sub?: string }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex items-center justify-between mb-1.5">
      <span className="font-outfit text-xs font-semibold text-white/70 uppercase tracking-fire">{label}</span>
      <div className="text-right">
        <span className="font-outfit text-sm font-bold text-white">{fmtInt(value)}</span>
        {sub && <span className="font-outfit text-xs text-white/35 ml-1.5">{sub}</span>}
      </div>
    </div>
    <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.08)" }}>
      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${Math.max((value / max) * 100, 0.5)}%`, background: color }} />
    </div>
  </div>
)

const BarRowUSD = ({ label, value, max, color, sub }: { label: string; value: number; max: number; color: string; sub?: string }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex items-center justify-between mb-1.5">
      <span className="font-outfit text-xs font-semibold text-white/70 uppercase tracking-fire">{label}</span>
      <div className="text-right">
        <span className="font-outfit text-sm font-bold text-white">${fmt(value)}</span>
        {sub && <span className="font-outfit text-xs text-white/35 ml-1.5">{sub}</span>}
      </div>
    </div>
    <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.08)" }}>
      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${Math.max((value / max) * 100, 0.5)}%`, background: color }} />
    </div>
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const IA04 = () => {
  const [showRadio, setShowRadio] = useState(false)
  const totalYTViews = YOUTUBE.reduce((s, c) => s + c.views, 0)
  const totalYTWatchHours = YOUTUBE.reduce((s, c) => s + c.watchHours, 0)
  const totalYTLikes = YOUTUBE.reduce((s, c) => s + c.likes, 0)
  const totalYTChat = YOUTUBE.reduce((s, c) => s + c.chatMessages, 0)
  const totalYTShares = YOUTUBE.reduce((s, c) => s + c.shares, 0)
  const totalYTSubs = YOUTUBE.reduce((s, c) => s + c.subscribers, 0)
  const totalYTUnique = YOUTUBE.reduce((s, c) => s + c.uniqueViewers, 0)
  const totalYTReminders = YOUTUBE.reduce((s, c) => s + c.reminders, 0)
  const totalYTReactions = YOUTUBE.reduce((s, c) => s + c.reactions, 0)

  const [showVentas, setShowVentas] = useState(false)

  return (
  <div className="min-h-screen bg-[#04192D] font-outfit">

    {/* Header */}
    <div className="border-b border-white/8 px-6 md:px-10 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo-navbar.png" alt="4GO Academy" className="h-7 w-auto" style={{ mixBlendMode: "lighten" }} />
        <div className="w-px h-5 bg-white/15" />
        <div>
          <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04]">Dashboard</p>
          <p className="font-outfit text-[11px] text-white/40">Números Generales del Lanzamiento</p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00983A]/15 border border-[#00983A]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00983A]" />
        <span className="font-outfit text-xs font-semibold text-[#00983A] uppercase tracking-fire">Lanzamiento IA 04</span>
      </div>
    </div>

    <div className="px-6 md:px-10 py-8 max-w-6xl mx-auto space-y-10">

      {/* Title */}
      <div>
        <h1 className="font-outfit font-black text-white uppercase tracking-fire" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
          Lanzamiento IA University
        </h1>
        <p className="font-outfit text-sm text-white/40 mt-1">Números generales — Abril 2026</p>
      </div>

      {/* ── SECCIÓN 1: INFO DEL LANZAMIENTO ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          01 — Información del lanzamiento
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-[#fc6c04]" />
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">Apertura</span>
            </div>
            <p className="font-outfit font-black text-white text-xl">{LAUNCH.cartOpen}</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-[#fc6c04]" />
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">Cierre</span>
            </div>
            <p className="font-outfit font-black text-white text-xl">{LAUNCH.cartClose}</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <BarChart2 className="w-4 h-4 text-[#fc6c04]" />
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">Días abierto</span>
            </div>
            <p className="font-outfit font-black text-white text-xl">{LAUNCH.cartDays} días</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-[#fc6c04]" />
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">Precio</span>
            </div>
            <p className="font-outfit font-black text-white text-xl">${LAUNCH.price} USD</p>
          </Card>
        </div>
      </div>

      {/* ── SECCIÓN 2: VENTAS Y FATURAMENTO ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          02 — Ventas y facturación
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Alumnos totales" value={SALES.total.toString()} sub={`${SALES.firstDay} el primer día`} color="blue" />
          <KpiCard label="Facturación bruto" value={`$${fmt(REVENUE.gross)}`} sub={`${SALES.total} × $${LAUNCH.price}`} color="green" />
          <KpiCard
            label="ROAS"
            value={`${ROAS.toFixed(2)}x`}
            sub={`$${ROAS.toFixed(2)} por cada $1`}
            color="orange"
          />
          <KpiCard label="Conversión" value={`${((SALES.total / LEADS.total) * 100).toFixed(2)}%`} sub={`${fmtInt(LEADS.total)} leads → ${SALES.total} ventas`} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sales breakdown */}
          <Card>
            <SectionTitle icon={ShoppingCart} label="Desglose de ventas" />
            <div className="space-y-5">
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20">
                <span className="font-outfit text-sm text-white/70">Primer día</span>
                <div className="text-right">
                  <span className="font-outfit text-lg font-black text-white">{SALES.firstDay}</span>
                  <span className="font-outfit text-xs text-white/40 ml-2">{((SALES.firstDay / SALES.total) * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-outfit text-sm text-white/70">Resto de la semana</span>
                <div className="text-right">
                  <span className="font-outfit text-lg font-black text-white">{SALES.week}</span>
                  <span className="font-outfit text-xs text-white/40 ml-2">{((SALES.week / SALES.total) * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#00983A]/10 border border-[#00983A]/20">
                <span className="font-outfit text-sm font-bold text-white">Total alumnos</span>
                <span className="font-outfit text-lg font-black text-[#00983A]">{SALES.total}</span>
              </div>
            </div>
          </Card>

          {/* Refunds, Checkout, Visitantes */}
          <div className="grid grid-cols-2 gap-4">
            <KpiCard label="Reembolsos" value={REFUNDS.count.toString()} sub={`${((REFUNDS.count / SALES.total) * 100).toFixed(1)}% de las ventas`} color="red" />
            <KpiCard label="Checkout primer día" value={fmtInt(OTHER.checkoutFirstDay)} sub={`${((SALES.firstDay / OTHER.checkoutFirstDay) * 100).toFixed(1)}% conversión`} />
            <KpiCard label="Visitantes únicos (Página de Ventas)" value={fmtInt(OTHER.salesPageVisitors)} sub="Página de ventas" />
            <KpiCard label="% Visitantes / Leads" value={`${((OTHER.salesPageVisitors / LEADS.total) * 100).toFixed(1)}%`} sub={`${fmtInt(OTHER.salesPageVisitors)} de ${fmtInt(LEADS.total)} leads`} />
          </div>
        </div>
      </div>

      {/* ── SECCIÓN 3: INVERSIÓN EN TRÁFICO ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          03 — Inversión en tráfico
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Total invertido" value={`$${fmt(ADS.grandTotal)}`} sub="Tráfico + API" color="orange" />
          <KpiCard label="Facebook total" value={`$${fmt(ADS.fbTotal)}`} sub={`${((ADS.fbTotal / ADS.grandTotal) * 100).toFixed(1)}% del total`} />
          <KpiCard label="Google total" value={`$${fmt(ADS.googleTotal)}`} sub={`${((ADS.googleTotal / ADS.grandTotal) * 100).toFixed(1)}% del total`} />
          <KpiCard label="API Disparos" value={`$${fmt(ADS.api)}`} sub={`${((ADS.api / ADS.grandTotal) * 100).toFixed(1)}% del total`} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <SectionTitle icon={BarChart2} label="Inversión por tipo" />
            <BarRowUSD label="Leads Facebook" value={ADS.leadFb} max={ADS.grandTotal} color="#1877F2" sub={`${((ADS.leadFb / ADS.grandTotal) * 100).toFixed(1)}%`} />
            <BarRowUSD label="Leads Google" value={ADS.leadGoogle} max={ADS.grandTotal} color="#fc6c04" sub={`${((ADS.leadGoogle / ADS.grandTotal) * 100).toFixed(1)}%`} />
            <BarRowUSD label="Remarketing FB" value={ADS.remarkFb} max={ADS.grandTotal} color="#a78bfa" sub={`${((ADS.remarkFb / ADS.grandTotal) * 100).toFixed(1)}%`} />
            <BarRowUSD label="API Disparos" value={ADS.api} max={ADS.grandTotal} color="#00983A" sub={`${((ADS.api / ADS.grandTotal) * 100).toFixed(1)}%`} />
          </Card>

          <Card>
            <SectionTitle icon={DollarSign} label="Resumen de inversión" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="font-outfit text-xs font-bold uppercase tracking-fire text-white/40 text-left pb-3">Concepto</th>
                    <th className="font-outfit text-xs font-bold uppercase tracking-fire text-white/40 text-right pb-3">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Leads Facebook", value: ADS.leadFb },
                    { label: "Leads Google", value: ADS.leadGoogle },
                    { label: "Total Leads", value: ADS.leadTotal, bold: true },
                    { label: "Remarketing Facebook", value: ADS.remarkFb },
                    { label: "Total Remarketing", value: ADS.remarkTotal, bold: true },
                    { label: "API Disparos", value: ADS.api },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-white/5 ${row.bold ? "bg-white/3" : ""}`}>
                      <td className={`font-outfit text-sm py-3 ${row.bold ? "font-bold text-white" : "text-white/70"}`}>{row.label}</td>
                      <td className={`font-outfit text-sm text-right py-3 ${row.bold ? "font-bold text-white" : "text-white/70"}`}>${fmt(row.value)}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#fc6c04]/10">
                    <td className="font-outfit text-sm font-bold text-[#fc6c04] py-3">Total Tráfico + API</td>
                    <td className="font-outfit text-sm font-black text-[#fc6c04] text-right py-3">${fmt(ADS.grandTotal)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>

      {/* ── SECCIÓN 4: LEADS ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          04 — Leads y costo por lead
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Total leads" value={fmtInt(LEADS.total)} sub="Todas las fuentes" color="blue" />
          <KpiCard label="CPL Facebook" value={`$${fmt(LEADS.cplFb)}`} sub={`${fmtInt(LEADS.facebook)} leads`} />
          <KpiCard label="CPL Google" value={`$${fmt(LEADS.cplGoogle)}`} sub={`${fmtInt(LEADS.google)} leads`} />
          <KpiCard label="CPL Promedio" value={`$${fmt(LEADS.cplAvg)}`} sub="Costo medio por lead" color="orange" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <SectionTitle icon={Users} label="Leads por fuente" />
            <BarRow label="Facebook" value={LEADS.facebook} max={LEADS.total} color="#1877F2" sub={`${((LEADS.facebook / LEADS.total) * 100).toFixed(1)}%`} />
            <BarRow label="Google" value={LEADS.google} max={LEADS.total} color="#fc6c04" sub={`${((LEADS.google / LEADS.total) * 100).toFixed(1)}%`} />
            <BarRow label="Orgánico" value={LEADS.organic} max={LEADS.total} color="#00983A" sub={`${((LEADS.organic / LEADS.total) * 100).toFixed(1)}%`} />
          </Card>

          <Card>
            <SectionTitle icon={MessageCircle} label="Canales adicionales" />
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-outfit text-sm text-white/70">Leads WhatsApp</span>
                </div>
                <span className="font-outfit text-lg font-black text-white">{fmtInt(OTHER.whatsapp)}</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#fc6c04]" />
                  <span className="font-outfit text-sm text-white/70">Encuesta de leads</span>
                </div>
                <span className="font-outfit text-lg font-black text-white">{fmtInt(OTHER.research)}</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#fc6c04]" />
                  <span className="font-outfit text-sm text-white/70">% Encuesta / WhatsApp</span>
                </div>
                <span className="font-outfit text-lg font-black text-[#fc6c04]">{((OTHER.research / OTHER.whatsapp) * 100).toFixed(1)}%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* ── SECCIÓN 5: CLASES ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          05 — Rendimiento de clases
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <SectionTitle icon={Eye} label="Views por clase" />
            {CLASSES.map((c, i) => (
              <BarRow key={i} label={c.name} value={c.views} max={CLASSES[0].views} color="#fc6c04" />
            ))}
          </Card>
          <Card>
            <SectionTitle icon={Radio} label="Audiencia en vivo" />
            {CLASSES.map((c, i) => (
              <BarRow key={i} label={c.name} value={c.live} max={CLASSES[0].live} color="#00983A" />
            ))}
          </Card>
        </div>

        <Card>
          <SectionTitle icon={Target} label="Asistencia por clase" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CLASSES.map((c, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                <p className="font-outfit text-xs text-white/40 uppercase tracking-fire mb-2">{c.name}</p>
                <p className="font-outfit font-black text-white" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                  {c.attendance}%
                </p>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="font-outfit text-xs text-white/40">{fmtInt(c.live)}</span>
                  <span className="font-outfit text-xs text-white/20">/</span>
                  <span className="font-outfit text-xs text-white/40">{fmtInt(c.views)}</span>
                </div>
              </div>
            ))}
          </div>

        </Card>

        {/* YouTube Analytics Button */}
        <button
          onClick={() => setShowRadio(!showRadio)}
          className="w-full mt-6 flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          style={{ background: showRadio ? "rgba(252,108,4,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${showRadio ? "rgba(252,108,4,0.4)" : "rgba(255,255,255,0.1)"}` }}
        >
          <Radio className="w-5 h-5 text-[#fc6c04]" />
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-white">
            Análisis detallado de clases — YouTube Analytics
          </span>
          {showRadio ? <ChevronUp className="w-4 h-4 text-[#fc6c04]" /> : <ChevronDown className="w-4 h-4 text-[#fc6c04]" />}
        </button>

        {/* YouTube Analytics Section */}
        {showRadio && (
          <div className="mt-6 space-y-6 animate-in fade-in duration-500">

            {/* YouTube KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <KpiCard label="Visualizaciones totales" value={fmtInt(totalYTViews)} sub="Todas las clases" color="orange" />
              <KpiCard label="Horas de reproducción" value={fmtInt(Math.round(totalYTWatchHours))} sub="Watch time total" color="green" />
              <KpiCard label="Espectadores únicos" value={fmtInt(totalYTUnique)} sub="Alcance total" color="blue" />
              <KpiCard label="Nuevos suscriptores" value={fmtInt(totalYTSubs)} sub="Ganados en el lanzamiento" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <KpiCard label="Likes" value={fmtInt(totalYTLikes)} sub="Total" />
              <KpiCard label="Mensajes de chat" value={fmtInt(totalYTChat)} sub="Interacción en vivo" />
              <KpiCard label="Compartidos" value={fmtInt(totalYTShares)} sub="Total" />
              <KpiCard label="Recordatorios" value={fmtInt(totalYTReminders)} sub="Definidos" />
              <KpiCard label="Reacciones" value={fmtInt(totalYTReactions)} sub="En vivo" />
            </div>

            {/* Table per class */}
            <Card>
              <SectionTitle icon={Radio} label="Desglose por clase" />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      {["Clase", "Views", "Únicos", "Duración Avg", "Likes", "Chat", "Compartidos", "Suscriptores", "Watch Hours"].map((h, i) => (
                        <th key={i} className={`font-outfit text-xs font-bold uppercase tracking-fire pb-3 ${i === 0 ? "text-left pr-4" : "text-right px-3"} ${i === 8 ? "text-[#fc6c04]" : "text-white/40"}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {YOUTUBE.map((c, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td className="font-outfit text-sm font-semibold text-white py-4 pr-4">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: ["#fc6c04", "#1877F2", "#00983A", "#a78bfa"][i] }} />
                            {c.name}
                          </span>
                        </td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.views)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.uniqueViewers)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{c.avgDuration}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.likes)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.chatMessages)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.shares)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{fmtInt(c.subscribers)}</td>
                        <td className="font-outfit text-sm font-bold text-white text-right py-4 pl-3">{fmtInt(Math.round(c.watchHours))}</td>
                      </tr>
                    ))}
                    <tr className="bg-white/5">
                      <td className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] py-4 pr-4">Total</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTViews)}</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTUnique)}</td>
                      <td className="font-outfit text-sm font-bold text-white/40 text-right py-4 px-3">—</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTLikes)}</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTChat)}</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTShares)}</td>
                      <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">{fmtInt(totalYTSubs)}</td>
                      <td className="font-outfit text-base font-black text-[#fc6c04] text-right py-4 pl-3">{fmtInt(Math.round(totalYTWatchHours))}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Visual charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <SectionTitle icon={Eye} label="Visualizaciones por clase" />
                {YOUTUBE.map((c, i) => (
                  <BarRow key={i} label={c.name} value={c.views} max={YOUTUBE[0].views} color={["#fc6c04", "#1877F2", "#00983A", "#a78bfa"][i]} sub={`${((c.views / totalYTViews) * 100).toFixed(1)}%`} />
                ))}
              </Card>
              <Card>
                <SectionTitle icon={Clock} label="Horas de reproducción" />
                {YOUTUBE.map((c, i) => (
                  <BarRow key={i} label={c.name} value={Math.round(c.watchHours)} max={Math.round(YOUTUBE[0].watchHours)} color={["#fc6c04", "#1877F2", "#00983A", "#a78bfa"][i]} sub={`${((c.watchHours / totalYTWatchHours) * 100).toFixed(1)}%`} />
                ))}
              </Card>
              <Card>
                <SectionTitle icon={Heart} label="Engagement (Likes + Chat + Reacciones)" />
                {YOUTUBE.map((c, i) => {
                  const engagement = c.likes + c.chatMessages + c.reactions
                  const totalEngagement = totalYTLikes + totalYTChat + totalYTReactions
                  return (
                    <BarRow key={i} label={c.name} value={engagement} max={YOUTUBE[0].likes + YOUTUBE[0].chatMessages + YOUTUBE[0].reactions} color={["#fc6c04", "#1877F2", "#00983A", "#a78bfa"][i]} sub={`${((engagement / totalEngagement) * 100).toFixed(1)}%`} />
                  )
                })}
              </Card>
              <Card>
                <SectionTitle icon={Users} label="Nuevos vs recurrentes" />
                {YOUTUBE.map((c, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="font-outfit text-xs font-semibold text-white/70 uppercase tracking-fire mb-2">{c.name}</p>
                    <div className="flex rounded-full overflow-hidden" style={{ height: "10px" }}>
                      <div style={{ width: `${(c.newViewers / c.uniqueViewers) * 100}%`, background: ["#fc6c04", "#1877F2", "#00983A", "#a78bfa"][i] }} />
                      <div style={{ width: `${(c.returning / (c.newViewers + c.returning)) * 100}%`, background: "rgba(255,255,255,0.15)" }} />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-outfit text-xs text-white/40">Nuevos: {fmtInt(c.newViewers)}</span>
                      <span className="font-outfit text-xs text-white/40">Recurrentes: {fmtInt(c.returning)}</span>
                    </div>
                  </div>
                ))}
              </Card>
            </div>

            {/* Retention insight */}
            <div className="p-5 rounded-2xl" style={{ background: "rgba(252,108,4,0.12)", border: "1px solid rgba(252,108,4,0.3)" }}>
              <p className="font-outfit text-sm text-white/70 leading-relaxed">
                <strong className="text-[#fc6c04]">Retención del lanzamiento:</strong>{" "}
                De {fmtInt(YOUTUBE[0].uniqueViewers)} espectadores únicos en la Clase 01, se retuvieron{" "}
                <strong className="text-white">{fmtInt(YOUTUBE[3].uniqueViewers)}</strong> en la Clase 04
                ({((YOUTUBE[3].uniqueViewers / YOUTUBE[0].uniqueViewers) * 100).toFixed(1)}%).
                La duración promedio aumentó de <strong className="text-white">{YOUTUBE[0].avgDuration}</strong> a{" "}
                <strong className="text-white">{YOUTUBE[3].avgDuration}</strong>, indicando mayor engagement de la audiencia retenida.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── SECCIÓN 6: DETALLES DE VENTAS ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          06 — Panel de ventas
        </p>

        <button
          onClick={() => setShowVentas(!showVentas)}
          className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          style={{ background: showVentas ? "rgba(252,108,4,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${showVentas ? "rgba(252,108,4,0.4)" : "rgba(255,255,255,0.1)"}` }}
        >
          <ShoppingCart className="w-5 h-5 text-[#fc6c04]" />
          <span className="font-outfit text-sm font-bold uppercase tracking-fire text-white">
            Detalles de ventas — Hotmart
          </span>
          {showVentas ? <ChevronUp className="w-4 h-4 text-[#fc6c04]" /> : <ChevronDown className="w-4 h-4 text-[#fc6c04]" />}
        </button>

        {showVentas && (
          <div className="mt-6 space-y-6">

            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <KpiCard label="Total ventas" value={HOTMART.totalVentas.toString()} sub="100% aprobadas" color="orange" />
              <KpiCard label="Al contado" value={HOTMART.alContado.toString()} sub="csuchyxr" />
              <KpiCard label="4 cuotas" value={HOTMART.cuotas4.toString()} sub="2usjqn8b" />
              <KpiCard label="Ingreso neto" value={`$${fmtInt(HOTMART.ingresoNeto)}`} sub="USD líquido" color="green" />
              <KpiCard label="Facturación bruta" value={`$${fmtInt(HOTMART.facturacionBruta)}`} sub="USD sin impuestos" color="green" />
            </div>

            {/* Vendedoras table */}
            <Card>
              <SectionTitle icon={Users} label="Ventas por vendedora (Código SCK)" />
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      {["Vendedora", "Total", "Al contado", "4 cuotas", "Neto USD", "Bruto USD", "Participación"].map((h, i) => (
                        <th key={i} className={`font-outfit text-xs font-bold uppercase tracking-fire pb-3 ${i === 0 ? "text-left pr-4" : "text-right px-3"} ${i === 6 ? "text-[#fc6c04]" : "text-white/40"}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HOTMART.vendedoras.map((v, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                        <td className="font-outfit text-sm font-semibold text-white py-4 pr-4">
                          <span className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: v.color }}>{v.code.slice(0, 2)}</span>
                            {v.name}
                          </span>
                        </td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{v.total}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{v.contado}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">{v.cuotas}</td>
                        <td className="font-outfit text-sm text-[#eab308] text-right py-4 px-3">${fmtInt(v.neto)}</td>
                        <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmtInt(v.bruto)}</td>
                        <td className="font-outfit text-sm text-right py-4 pl-3">
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-white/70">{v.pct}%</span>
                            <div className="w-16 rounded-full overflow-hidden" style={{ height: "4px", background: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: `${v.pct}%`, background: "#00983A" }} />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Métodos de pago */}
              <Card>
                <SectionTitle icon={DollarSign} label="Métodos de pago" />
                <div className="space-y-3">
                  {HOTMART.metodosPago.map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-outfit text-sm text-white/70">{m.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 rounded-full overflow-hidden" style={{ height: "6px", background: "rgba(255,255,255,0.08)" }}>
                          <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: i === 0 ? "#1877F2" : i < 4 ? "#1877F2" : "#00983A" }} />
                        </div>
                        <span className="font-outfit text-sm font-bold text-white w-8 text-right">{m.count}</span>
                        <span className="font-outfit text-xs text-white/40 w-12 text-right">{m.pct}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Códigos de oferta */}
              <Card>
                <SectionTitle icon={Target} label="Códigos de oferta" />
                <div className="space-y-4">
                  {HOTMART.codigos.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-outfit text-sm font-black text-[#00983A]">{c.code}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase" style={{ background: i === 0 ? "rgba(0,152,58,0.2)" : i === 1 ? "rgba(24,119,242,0.2)" : "rgba(167,139,250,0.2)", color: i === 0 ? "#00983A" : i === 1 ? "#1877F2" : "#a78bfa" }}>{c.tipo}</span>
                        {i === 2 && <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/10 text-white/60">Nuevo</span>}
                      </div>
                      <p className="font-outfit text-xs text-white/40 mb-3">{c.desc}</p>
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="font-outfit text-[10px] text-white/30 uppercase">Ventas</p>
                          <p className="font-outfit text-lg font-black text-white">{c.ventas}</p>
                        </div>
                        <div>
                          <p className="font-outfit text-[10px] text-white/30 uppercase">% del total</p>
                          <p className="font-outfit text-lg font-black text-white">{c.pct}%</p>
                        </div>
                        <div>
                          <p className="font-outfit text-[10px] text-white/30 uppercase">{i === 1 ? "Por cuota prom." : "Neto prom."}</p>
                          <p className="font-outfit text-lg font-black text-[#fc6c04]">${fmt(c.valor)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Ranking vendedoras bar chart */}
            <Card>
              <SectionTitle icon={BarChart2} label="Ranking vendedoras (excl. link principal)" />
              <div className="grid grid-cols-7 gap-3 items-end" style={{ height: "200px" }}>
                {HOTMART.vendedoras.filter(v => v.name !== "Link principal").map((v, i) => {
                  const maxVal = HOTMART.vendedoras.filter(x => x.name !== "Link principal")[0].total
                  const contadoPct = (v.contado / maxVal) * 100
                  const cuotasPct = (v.cuotas / maxVal) * 100
                  return (
                    <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full flex flex-col items-center gap-0.5">
                        <div className="w-8 rounded-t" style={{ height: `${Math.max(cuotasPct * 1.5, 2)}px`, background: "#1877F2" }} />
                        <div className="w-8 rounded-b" style={{ height: `${Math.max(contadoPct * 1.5, 2)}px`, background: "#00983A" }} />
                      </div>
                      <span className="font-outfit text-[10px] text-white/50 text-center">{v.name}</span>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#00983A]" /><span className="font-outfit text-xs text-white/50">Al contado</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#1877F2]" /><span className="font-outfit text-xs text-white/50">4 cuotas</span></div>
              </div>
            </Card>

            <p className="font-outfit text-xs text-white/20 text-center">
              Datos extraídos de Hotmart · Actualizado el 15/04/2026 · Todas las cifras en USD
            </p>
          </div>
        )}
      </div>

      {/* ── SECCIÓN 7: ALUMNOS POR PAÍS ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          07 — Alumnos por país
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <KpiCard label="Total países" value={COUNTRIES.length.toString()} sub="Presencia internacional" color="blue" />
          <KpiCard label="Total alumnos" value={fmtInt(COUNTRIES_TOTAL)} sub="Registrados por país" color="green" />
          <KpiCard label="Top país" value="Colombia" sub={`${COUNTRIES[0].count} alumnos · ${((COUNTRIES[0].count / COUNTRIES_TOTAL) * 100).toFixed(1)}%`} color="orange" />
        </div>

        <Card>
          <SectionTitle icon={Users} label="Distribución por país" />
          <div className="space-y-3">
            {COUNTRIES.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl leading-none w-8 text-center">{c.flag}</span>
                <span className="font-outfit text-sm text-white w-44 truncate">{c.name}</span>
                <div className="flex-1 rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(c.count / COUNTRIES[0].count) * 100}%`, background: i === 0 ? "#fc6c04" : i < 3 ? "#00983A" : i < 8 ? "#1877F2" : "rgba(255,255,255,0.25)" }} />
                </div>
                <span className="font-outfit text-sm font-bold text-white w-10 text-right">{c.count}</span>
                <span className="font-outfit text-xs text-white/40 w-14 text-right">{((c.count / COUNTRIES_TOTAL) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* ── SECCIÓN 8: RESUMEN FINAL ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          06 — Resumen final
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="text-center">
              <p className="font-outfit text-xs text-white/40 uppercase tracking-fire mb-2">Facturación bruto</p>
              <p className="font-outfit font-black text-[#00983A]" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                ${fmt(REVENUE.gross)}
              </p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="font-outfit text-xs text-white/40 uppercase tracking-fire mb-2">Total invertido</p>
              <p className="font-outfit font-black text-[#fc6c04]" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                ${fmt(ADS.grandTotal)}
              </p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="font-outfit text-xs text-white/40 uppercase tracking-fire mb-2">Resultado neto</p>
              <p className="font-outfit font-black text-white" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                ${fmt(REVENUE.gross - ADS.grandTotal)}
              </p>
            </div>
          </Card>
        </div>
      </div>

      <p className="font-outfit text-xs text-white/20 text-center pb-6">
        Todos los valores en USD · © 2026 IA University — 4GO Academy
      </p>
    </div>
  </div>
  )
}

export default IA04
