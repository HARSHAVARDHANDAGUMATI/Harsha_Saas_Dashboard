import { FiArrowUpRight } from 'react-icons/fi'
import Card from '../common/Card'
import Badge from '../common/Badge'
import AnimatedCounter from './animated-counter'

function KPICard({ item }) {
  const accentStyles = {
    success: 'from-emerald-400/25 via-emerald-400/5 to-transparent',
    accent: 'from-orange-400/25 via-orange-400/5 to-transparent',
    brand: 'from-cyan-400/25 via-cyan-400/5 to-transparent',
  }

  return (
    <Card className="group relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.82))] shadow-[0_20px_70px_rgba(2,6,23,0.36)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(2,6,23,0.5)]">
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-r ${accentStyles[item.tone === 'accent' ? 'accent' : item.tone === 'success' ? 'success' : 'brand']} blur-2xl`} />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{item.label}</p>
          <h3 className="mt-4 text-3xl font-black text-white">
            <AnimatedCounter value={item.value} prefix={item.prefix} suffix={item.suffix} />
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">Updated live</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Badge tone={item.tone === 'success' ? 'success' : item.tone === 'accent' ? 'warning' : 'brand'}>
            {item.delta}
          </Badge>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition group-hover:text-white">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default KPICard
