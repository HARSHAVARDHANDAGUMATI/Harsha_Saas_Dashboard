import { useEffect, useMemo, useState } from 'react'
import { FiCheckCircle, FiCreditCard, FiShield, FiTrendingUp } from 'react-icons/fi'
import Pagewrapper from '../components/layout/Pagewrapper'
import Card from '../components/common/Card'
import PlanCard from '../components/Billing/PlanCard'
import PaymentHistory from '../components/Billing/PaymentHistory'
import UpgradeModal from '../components/Billing/UpgradeModal'
import Loader from '../components/common/Loader'
import { getBillingData } from '../services/BillingService'
import { formatCurrency } from '../utils/formatters'

function Billing() {
  const [data, setData] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [toast, setToast] = useState('')

  useEffect(() => {
    getBillingData().then(setData)
  }, [])

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(''), 2800)
    return () => clearTimeout(timer)
  }, [toast])

  const highlights = useMemo(() => {
    if (!data) return []
    return [
      {
        label: 'Next invoice',
        value: formatCurrency(data.billingSummary.nextInvoiceAmount),
        copy: `Scheduled on ${data.billingSummary.nextInvoiceDate}`,
        icon: FiCreditCard,
        tone: 'cyan',
      },
      {
        label: 'Seat efficiency',
        value: `${data.billingSummary.seatsUsed} / ${data.billingSummary.seatLimit}`,
        copy: 'Workspace capacity in active use right now.',
        icon: FiTrendingUp,
        tone: 'orange',
      },
      {
        label: 'Billing confidence',
        value: 'Secure',
        copy: 'Protected renewals, audit readiness, and stable payment coverage.',
        icon: FiShield,
        tone: 'violet',
      },
    ]
  }, [data])

  const handleConfirm = (plan) => {
    setToast(`Your ${plan?.name} plan request has been queued successfully.`)
    setSelectedPlan(null)
  }

  if (!data) return <Loader rows={3} />

  return (
    <Pagewrapper title="Subscription & Billing" subtitle="A more premium commercial cockpit for plans, renewals, and finance visibility.">
      {toast ? (
        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          {toast}
        </div>
      ) : null}

      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.97),rgba(8,12,28,0.95))] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-cyan-300">Revenue operations</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl">
              Make billing feel like a premium growth engine, not a settings page.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Surface plan value, renewal confidence, and finance clarity with a cleaner hierarchy and a stronger product narrative.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <div className={`rounded-2xl p-2 ${
                    item.tone === 'orange'
                      ? 'bg-orange-400/15 text-orange-300'
                      : item.tone === 'violet'
                        ? 'bg-violet-400/15 text-violet-300'
                        : 'bg-cyan-400/15 text-cyan-300'
                  }`}>
                    <item.icon />
                  </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.22fr_0.78fr]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} current={plan.id === data.currentPlanId} onSelect={setSelectedPlan} />
          ))}
        </div>

        <Card className="relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.97),rgba(15,23,42,0.84))] shadow-[0_24px_80px_rgba(2,6,23,0.42)]">
          <div className="absolute right-0 top-0 h-28 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Active contract</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Current Subscription</h3>
            </div>

            <div className="rounded-[1.6rem] border border-cyan-400/18 bg-cyan-400/10 p-5">
              <p className="text-sm text-slate-300">Next invoice</p>
              <p className="mt-2 text-4xl font-black text-white">{formatCurrency(data.billingSummary.nextInvoiceAmount)}</p>
              <p className="mt-2 text-sm text-slate-300">Scheduled on {data.billingSummary.nextInvoiceDate}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Seats used</p>
                <p className="mt-3 text-2xl font-bold text-white">{data.billingSummary.seatsUsed} / {data.billingSummary.seatLimit}</p>
              </div>
              <div className="rounded-[1.4rem] border border-emerald-400/16 bg-emerald-400/8 p-4">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-emerald-300" />
                  <p className="text-sm font-semibold text-emerald-200">Renewal health is stable</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">Payment history indicates steady renewals and healthy subscription continuity.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <PaymentHistory rows={data.paymentHistory} />

      <UpgradeModal
        open={Boolean(selectedPlan)}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onConfirm={handleConfirm}
      />
    </Pagewrapper>
  )
}

export default Billing
