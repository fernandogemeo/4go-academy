import { useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart2, ArrowRightLeft, AlertCircle } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const DATA = {
  "4GO Academy":  { google: 943.35,  meta: 9205.21, api: 927.15, comisiones: 708, otros: 53 },
  "IA University":{ google: 3039.27, meta: 9513.87, api: 113.60, comisiones: 150, otros: 376.47 },
}

// Investment
const total4GO    = DATA["4GO Academy"].google   + DATA["4GO Academy"].meta   + DATA["4GO Academy"].api   + DATA["4GO Academy"].comisiones   + DATA["4GO Academy"].otros
const totalIAU    = DATA["IA University"].google + DATA["IA University"].meta + DATA["IA University"].api + DATA["IA University"].comisiones + DATA["IA University"].otros
const grandTotal  = total4GO + totalIAU
const invDiff     = totalIAU - total4GO

const totalGoogle = DATA["4GO Academy"].google + DATA["IA University"].google
const totalMeta   = DATA["4GO Academy"].meta   + DATA["IA University"].meta
const totalApi    = DATA["4GO Academy"].api    + DATA["IA University"].api
const totalComisiones = DATA["4GO Academy"].comisiones + DATA["IA University"].comisiones
const totalOtros  = DATA["4GO Academy"].otros  + DATA["IA University"].otros

// Revenue & results
const STUDENTS    = 373
const PRICE_USD   = 250
const revenue     = STUDENTS * PRICE_USD          // $80,000
const profit      = revenue - grandTotal           // $57,524.93
const roas        = revenue / grandTotal           // 3.56x

// 50 / 50 settlement
const half_inv    = grandTotal / 2                 // $11,237.54 — what each should invest
const reimbursement = half_inv - total4GO          // 4GO owes IAU (positive = 4GO underpaid)
const halfProfit  = profit / 2                     // $28,762.47

// Net per partner after reimbursement
const net4GO      = halfProfit - reimbursement     // 4GO receives less (it owes the diff)
const netIAU      = halfProfit + reimbursement     // IAU receives more

const fmt = (n: number, digits = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })

// ─── Exchange widget ─────────────────────────────────────────────────────────

const ExchangeWidget = () => (
  <div className="fixed top-4 right-4 z-50 bg-[#04192D] border border-[#fc6c04]/40 rounded-2xl px-5 py-4 shadow-xl min-w-[210px]">
    <p className="font-outfit text-[10px] font-bold uppercase tracking-fire text-[#fc6c04] mb-3">
      Cotización USD hoy
    </p>

    {/* BRL */}
    <div className="flex items-center justify-between gap-3 mb-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl leading-none">🇧🇷</span>
        <div>
          <p className="font-outfit text-[10px] text-white/40 uppercase tracking-fire leading-none">Real</p>
          <p className="font-outfit text-[10px] text-white/40 leading-none">BRL</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-outfit font-black text-white leading-none" style={{ fontSize: "22px" }}>
          R$ <span className="text-[#fc6c04]">5,00</span>
        </p>
        <p className="font-outfit text-[10px] text-white/30 mt-0.5">por 1 USD</p>
      </div>
    </div>

    <hr className="border-white/8 mb-3" />

    {/* COP */}
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="text-2xl leading-none">🇨🇴</span>
        <div>
          <p className="font-outfit text-[10px] text-white/40 uppercase tracking-fire leading-none">Peso</p>
          <p className="font-outfit text-[10px] text-white/40 leading-none">COP</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-outfit font-black text-white leading-none" style={{ fontSize: "22px" }}>
          <span className="text-[#fc6c04]">3.591,55</span>
        </p>
        <p className="font-outfit text-[10px] text-white/30 mt-0.5">por 1 USD</p>
      </div>
    </div>
  </div>
)

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
  label: string; value: string; sub?: string; color?: "orange" | "green" | "red" | "blue" | "default"
}) => {
  const bg: Record<string, string> = {
    orange:  "#fc6c04",
    green:   "#00983A",
    red:     "#dc2626",
    blue:    "#1877F2",
    default: "rgba(255,255,255,0.05)",
  }
  const border: Record<string, string> = {
    orange:  "none",
    green:   "none",
    red:     "none",
    blue:    "none",
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

// ─── Bar chart (CSS) ─────────────────────────────────────────────────────────

const BarChart = ({ data, color, max }: { data: { label: string; value: number; sub?: string }[]; color: string; max: number }) => (
  <div className="space-y-4">
    {data.map((item, i) => (
      <div key={i}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-outfit text-xs font-semibold text-white/70 uppercase tracking-fire">{item.label}</span>
          <div className="text-right">
            <span className="font-outfit text-sm font-bold text-white">${fmt(item.value)}</span>
            {item.sub && <span className="font-outfit text-xs text-white/35 ml-1.5">{item.sub}</span>}
          </div>
        </div>
        <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.08)" }}>
          <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${Math.max((item.value / max) * 100, 0.5)}%`, background: color }} />
        </div>
      </div>
    ))}
  </div>
)

// ─── Donut chart (SVG) ───────────────────────────────────────────────────────

const DonutChart = ({ slices, centerLabel }: { slices: { label: string; value: number; color: string }[]; centerLabel?: string }) => {
  const total = slices.reduce((s, x) => s + x.value, 0)
  const r = 52; const cx = 70; const cy = 70
  const circumference = 2 * Math.PI * r
  let offset = 0
  const arcs = slices.map(s => {
    const dash = (s.value / total) * circumference
    const arc = { ...s, dash, gap: circumference - dash, offset }
    offset += dash
    return arc
  })
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5">
      <svg width="140" height="140" viewBox="0 0 140 140" className="shrink-0">
        {arcs.map((arc, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={arc.color} strokeWidth="22"
            strokeDasharray={`${arc.dash} ${arc.gap}`} strokeDashoffset={-arc.offset}
            style={{ transform: "rotate(-90deg)", transformOrigin: "70px 70px" }} />
        ))}
        <circle cx={cx} cy={cy} r={38} fill="#04192D" />
        {centerLabel && <>
          <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Outfit">{centerLabel}</text>
          <text x={cx} y={cy + 9} textAnchor="middle" fill="#fc6c04" fontSize="10" fontWeight="bold" fontFamily="Outfit">
            ${(total / 1000).toFixed(1)}K
          </text>
        </>}
      </svg>
      <div className="space-y-2.5 flex-1">
        {slices.map((s, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: s.color }} />
              <span className="font-outfit text-xs text-white/60 uppercase tracking-fire">{s.label}</span>
            </div>
            <div className="text-right">
              <span className="font-outfit text-sm font-bold text-white">${fmt(s.value)}</span>
              <span className="font-outfit text-xs text-white/30 ml-1.5">{((s.value / total) * 100).toFixed(1)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Investment table ─────────────────────────────────────────────────────────

const InvestmentTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[700px]">
      <thead>
        <tr className="border-b border-white/10">
          {["Empresa", "Google Ads", "Meta Ads", "API Disparos", "Comisiones", "Otros costos", "Total"].map((h, i) => (
            <th key={i} className={`font-outfit text-xs font-bold uppercase tracking-fire pb-3 ${i === 0 ? "text-left pr-4" : "text-right px-3"} ${i === 6 ? "text-[#fc6c04]" : "text-white/40"}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(["4GO Academy", "IA University"] as const).map((company, i) => {
          const d = DATA[company]; const tot = d.google + d.meta + d.api + d.comisiones + d.otros
          return (
            <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              <td className="font-outfit text-sm font-semibold text-white py-4 pr-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: company === "4GO Academy" ? "#fc6c04" : "#00983A" }} />
                  {company}
                </span>
              </td>
              <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(d.google)}</td>
              <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(d.meta)}</td>
              <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(d.api)}</td>
              <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(d.comisiones)}</td>
              <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(d.otros)}</td>
              <td className="font-outfit text-sm font-bold text-white text-right py-4 pl-3">${fmt(tot)}</td>
            </tr>
          )
        })}
        <tr className="bg-white/5">
          <td className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] py-4 pr-4">Total combinado</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">${fmt(totalGoogle)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">${fmt(totalMeta)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">${fmt(totalApi)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">${fmt(totalComisiones)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 px-3">${fmt(totalOtros)}</td>
          <td className="font-outfit text-base font-black text-[#fc6c04] text-right py-4 pl-3">${fmt(grandTotal)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

// ─── Settlement table ─────────────────────────────────────────────────────────

const SettlementTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[540px]">
      <thead>
        <tr className="border-b border-white/10">
          {["Empresa", "Inversión real", "Inversión justa (50%)", "Reembolso", "50% Resultado", "Neto final"].map((h, i) => (
            <th key={i} className={`font-outfit text-xs font-bold uppercase tracking-fire pb-3 ${i === 0 ? "text-left pr-4" : "text-right px-3"} ${i === 5 ? "text-[#fc6c04]" : "text-white/40"}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* 4GO Academy */}
        <tr className="border-b border-white/5">
          <td className="font-outfit text-sm font-semibold text-white py-4 pr-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#fc6c04] shrink-0" />
              4GO Academy
            </span>
          </td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(total4GO)}</td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(half_inv)}</td>
          <td className="font-outfit text-sm text-red-400 text-right py-4 px-3">−${fmt(reimbursement)}</td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(halfProfit)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 pl-3">${fmt(net4GO)}</td>
        </tr>
        {/* IA University */}
        <tr className="border-b border-white/5">
          <td className="font-outfit text-sm font-semibold text-white py-4 pr-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00983A] shrink-0" />
              IA University
            </span>
          </td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(totalIAU)}</td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(half_inv)}</td>
          <td className="font-outfit text-sm text-[#00983A] text-right py-4 px-3">+${fmt(reimbursement)}</td>
          <td className="font-outfit text-sm text-white/70 text-right py-4 px-3">${fmt(halfProfit)}</td>
          <td className="font-outfit text-sm font-bold text-white text-right py-4 pl-3">${fmt(netIAU)}</td>
        </tr>
        {/* Total check */}
        <tr className="bg-white/5">
          <td className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] py-4 pr-4">Verificación</td>
          <td className="font-outfit text-xs text-white/40 text-right py-4 px-3">${fmt(grandTotal)}</td>
          <td className="font-outfit text-xs text-white/40 text-right py-4 px-3">—</td>
          <td className="font-outfit text-xs text-white/40 text-right py-4 px-3">—</td>
          <td className="font-outfit text-xs text-white/40 text-right py-4 px-3">${fmt(profit)}</td>
          <td className="font-outfit text-xs font-bold text-[#fc6c04] text-right py-4 pl-3">${fmt(net4GO + netIAU)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

const Financiero = () => (
  <div className="min-h-screen bg-[#04192D] font-outfit">
    <ExchangeWidget />

    {/* Header */}
    <div className="border-b border-white/8 px-6 md:px-10 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo-navbar.png" alt="4GO Academy" className="h-7 w-auto" style={{ mixBlendMode: "lighten" }} />
        <div className="w-px h-5 bg-white/15" />
        <div>
          <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04]">Dashboard</p>
          <p className="font-outfit text-[11px] text-white/40">Resultados de Lanzamiento</p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00983A]/15 border border-[#00983A]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00983A]" />
        <span className="font-outfit text-xs font-semibold text-[#00983A] uppercase tracking-fire">En vivo</span>
      </div>
    </div>

    <div className="px-6 md:px-10 py-8 max-w-6xl mx-auto space-y-10">

      <div>
        <h1 className="font-outfit font-black text-white uppercase tracking-fire" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
          Resumen de Lanzamiento
        </h1>
        <p className="font-outfit text-sm text-white/40 mt-1">4GO Academy · IA University — 2026</p>
      </div>

      {/* ── SECCIÓN 1: INVERSIÓN ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          01 — Inversión total
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Total invertido" value={`$${fmt(grandTotal)}`} sub="Ambas empresas" color="orange" />
          <KpiCard label="4GO Academy" value={`$${fmt(total4GO)}`} sub={`${((total4GO / grandTotal) * 100).toFixed(1)}% del total`} />
          <KpiCard label="IA University" value={`$${fmt(totalIAU)}`} sub={`${((totalIAU / grandTotal) * 100).toFixed(1)}% del total`} />
          <KpiCard label="Diferencia" value={`$${fmt(invDiff)}`} sub="IAU invirtió más" color="default" />
        </div>
        <Card>
          <SectionTitle icon={BarChart2} label="Desglose por empresa y canal" />
          <InvestmentTable />
        </Card>
      </div>

      {/* ── SECCIÓN 2: FATURAMENTO Y RESULTADO ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          02 — Faturamento y resultado
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard label="Alumnos vendidos" value={STUDENTS.toString()} sub={`× $${PRICE_USD} por alumno`} color="blue" />
          <KpiCard label="Faturamento bruto" value={`$${fmt(revenue)}`} sub="Ingresos totales" color="green" />
          <KpiCard label="Resultado neto" value={`$${fmt(profit)}`} sub={`Después de $${fmt(grandTotal)} invertidos`} color="green" />
          <KpiCard
            label="ROAS"
            value={`${roas.toFixed(2)}x`}
            sub={`Por cada $1 invertido, se generaron $${roas.toFixed(2)}`}
            color="orange"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Inversión vs resultado barra */}
          <Card>
            <SectionTitle icon={TrendingUp} label="Inversión vs resultado" />
            <BarChart
              max={revenue}
              color="#fc6c04"
              data={[
                { label: "Faturamento bruto", value: revenue,    sub: "100%" },
                { label: "Resultado neto",    value: profit,     sub: `${((profit / revenue) * 100).toFixed(1)}%` },
                { label: "Total invertido",   value: grandTotal, sub: `${((grandTotal / revenue) * 100).toFixed(1)}%` },
              ]}
            />
            <div className="mt-5 p-4 rounded-xl bg-[#00983A]/10 border border-[#00983A]/20">
              <p className="font-outfit text-xs text-white/70">
                Por cada dólar invertido se recuperaron{" "}
                <strong className="text-[#00983A] text-sm">${roas.toFixed(2)} USD</strong>
                {" "}— ROAS de{" "}
                <strong className="text-white">{roas.toFixed(2)}x</strong>
              </p>
            </div>
          </Card>

          {/* Distribución del faturamento */}
          <Card>
            <SectionTitle icon={DollarSign} label="Distribución del faturamento" />
            <DonutChart
              centerLabel="VENTAS"
              slices={[
                { label: "Resultado neto",   value: profit,      color: "#00983A" },
                { label: "Total invertido",  value: grandTotal,  color: "#fc6c04" },
              ]}
            />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 text-center">
                <p className="font-outfit text-xs text-white/40 uppercase tracking-fire">Margen</p>
                <p className="font-outfit text-lg font-black text-[#00983A]">{((profit / revenue) * 100).toFixed(1)}%</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 text-center">
                <p className="font-outfit text-xs text-white/40 uppercase tracking-fire">Costo s/venta</p>
                <p className="font-outfit text-lg font-black text-[#fc6c04]">{((grandTotal / revenue) * 100).toFixed(1)}%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* ── SECCIÓN 3: DIVISÃO 50/50 ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          03 — Liquidación 50 / 50
        </p>

        {/* Payment alert */}
        <div className="flex items-start gap-3 p-5 rounded-2xl mb-6" style={{ background: "rgba(252,108,4,0.12)", border: "1px solid rgba(252,108,4,0.3)" }}>
          <AlertCircle className="w-5 h-5 text-[#fc6c04] shrink-0 mt-0.5" />
          <div>
            <p className="font-outfit text-sm font-bold text-white">
              4GO Academy debe pagar a IA University:{" "}
              <span className="text-[#fc6c04] text-base">${fmt(reimbursement)}</span>
            </p>
            <p className="font-outfit text-xs text-white/55 mt-1 leading-relaxed">
              Reembolso de la diferencia de inversión para alcanzar el 50% acordado.
              4GO invirtió ${fmt(total4GO)} vs. la parte justa de ${fmt(half_inv)}
              (diferencia de ${fmt(reimbursement)}).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <KpiCard label="50% inversión justa (c/u)" value={`$${fmt(half_inv)}`} sub="Lo que cada empresa debería haber invertido" />
          <KpiCard label="50% del resultado (c/u)" value={`$${fmt(halfProfit)}`} sub="Ganancia bruta por empresa antes del ajuste" color="green" />
          <KpiCard label="Reembolso (4GO → IAU)" value={`$${fmt(reimbursement)}`} sub="Deuda de 4GO para equiparar la inversión" color="orange" />
        </div>

        <Card>
          <SectionTitle icon={ArrowRightLeft} label="Liquidación por socio" />
          <SettlementTable />
        </Card>

        {/* Net per partner */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card>
            <div className="flex items-center justify-between mb-1">
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">4GO Academy — Neto final</span>
              <span className="w-2 h-2 rounded-full bg-[#fc6c04]" />
            </div>
            <p className="font-outfit font-black text-white" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              ${fmt(net4GO)}
            </p>
            <div className="mt-4 space-y-2 text-xs font-outfit text-white/50">
              <div className="flex justify-between"><span>50% del resultado</span><span className="text-white">+${fmt(halfProfit)}</span></div>
              <div className="flex justify-between"><span>Reembolso a IA University</span><span className="text-red-400">−${fmt(reimbursement)}</span></div>
              <hr className="border-white/10" />
              <div className="flex justify-between font-bold text-white"><span>Neto</span><span>${fmt(net4GO)}</span></div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-1">
              <span className="font-outfit text-xs text-white/40 uppercase tracking-fire">IA University — Neto final</span>
              <span className="w-2 h-2 rounded-full bg-[#00983A]" />
            </div>
            <p className="font-outfit font-black text-white" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              ${fmt(netIAU)}
            </p>
            <div className="mt-4 space-y-2 text-xs font-outfit text-white/50">
              <div className="flex justify-between"><span>50% del resultado</span><span className="text-white">+${fmt(halfProfit)}</span></div>
              <div className="flex justify-between"><span>Reembolso recibido de 4GO</span><span className="text-[#00983A]">+${fmt(reimbursement)}</span></div>
              <hr className="border-white/10" />
              <div className="flex justify-between font-bold text-white"><span>Neto</span><span>${fmt(netIAU)}</span></div>
            </div>
          </Card>
        </div>
      </div>

      {/* ── SECCIÓN 4: GRÁFICOS GENERALES ── */}
      <div>
        <p className="font-outfit text-xs font-bold uppercase tracking-fire text-[#fc6c04] mb-4">
          04 — Análisis visual
        </p>
        <div className="grid md:grid-cols-2 gap-6">

          <Card>
            <SectionTitle icon={BarChart2} label="Inversión por empresa" />
            <BarChart
              max={grandTotal}
              color="#fc6c04"
              data={[
                { label: "IA University", value: totalIAU,  sub: `${((totalIAU / grandTotal) * 100).toFixed(1)}%` },
                { label: "4GO Academy",  value: total4GO,  sub: `${((total4GO / grandTotal) * 100).toFixed(1)}%` },
              ]}
            />
            <div className="mt-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5">
              <TrendingUp className="w-4 h-4 text-[#fc6c04] shrink-0" />
              <p className="font-outfit text-xs text-white/60">
                IA University invirtió <strong className="text-white">${fmt(invDiff)}</strong> más ({((invDiff / total4GO) * 100).toFixed(1)}%)
              </p>
            </div>
          </Card>

          <Card>
            <SectionTitle icon={BarChart2} label="Inversión por canal" />
            <BarChart
              max={grandTotal}
              color="#00983A"
              data={[
                { label: "Meta Ads",      value: totalMeta,   sub: `${((totalMeta / grandTotal) * 100).toFixed(1)}%` },
                { label: "Google Ads",    value: totalGoogle, sub: `${((totalGoogle / grandTotal) * 100).toFixed(1)}%` },
                { label: "API Disparos",  value: totalApi,    sub: `${((totalApi / grandTotal) * 100).toFixed(1)}%` },
              ]}
            />
            <div className="mt-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5">
              <TrendingDown className="w-4 h-4 text-[#00983A] shrink-0" />
              <p className="font-outfit text-xs text-white/60">
                Meta Ads concentra el <strong className="text-white">{((totalMeta / grandTotal) * 100).toFixed(1)}%</strong> del presupuesto
              </p>
            </div>
          </Card>

          <Card>
            <SectionTitle icon={DollarSign} label="Distribución por empresa" />
            <DonutChart centerLabel="INVERSIÓN" slices={[
              { label: "IA University", value: totalIAU,  color: "#00983A" },
              { label: "4GO Academy",  value: total4GO,  color: "#fc6c04" },
            ]} />
          </Card>

          <Card>
            <SectionTitle icon={DollarSign} label="Distribución por canal" />
            <DonutChart centerLabel="CANALES" slices={[
              { label: "Meta Ads",     value: totalMeta,          color: "#1877F2" },
              { label: "Google Ads",   value: totalGoogle,        color: "#fc6c04" },
              { label: "API Disparos", value: totalApi || 0.001,  color: "#a78bfa" },
            ]} />
          </Card>
        </div>
      </div>

      <p className="font-outfit text-xs text-white/20 text-center pb-6">
        Todos los valores en USD · © 2026 4GO Academy — IA University
      </p>
    </div>
  </div>
)

export default Financiero
