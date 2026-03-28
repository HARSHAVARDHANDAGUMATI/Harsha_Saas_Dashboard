import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import { Badge, Button, Card } from '../common'
import { formatCurrency } from '../../utils/formatters'

function PlanCard({ plan, current, onSelect }) {
  return (
    <Card className={`group relative flex h-full flex-col overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.84))] shadow-[0_22px_70px_rgba(2,6,23,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(2,6,23,0.52)] ${plan.featured ? 'ring-1 ring-cyan-300/60' : ''}`}>
      <div className={`absolute inset-x-0 top-0 h-28 blur-2xl ${plan.featured ? 'bg-cyan-400/18' : plan.name === 'Enterprise' ? 'bg-violet-400/16' : 'bg-orange-400/12'}`} />

      <div className="relative flex h-full flex-col">
        <div className="min-h-[9.75rem]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">{plan.name} tier</p>
              <h3 className="mt-2 text-3xl font-black text-white">{plan.name}</h3>
            </div>
            {current ? <Badge tone="brand">Current</Badge> : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">{plan.description}</p>
        </div>

        <div className="relative mt-3 flex items-end gap-2">
          <span className="text-5xl font-black text-white">{formatCurrency(plan.price)}</span>
          <span className="pb-2 text-sm text-slate-400">/ month</span>
        </div>

        <div className="relative mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Seat capacity</p>
          <p className="mt-2 text-lg font-semibold text-white">{plan.seats}</p>
        </div>

        <ul className="relative mt-5 flex-1 space-y-3 text-sm text-slate-300">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="relative mt-7 w-full gap-2" variant={current ? 'outline' : 'auth'} onClick={() => onSelect(plan)}>
          {current ? 'Manage plan' : plan.cta}
          <FiArrowUpRight />
        </Button>
      </div>
    </Card>
  )
}

export default PlanCard
