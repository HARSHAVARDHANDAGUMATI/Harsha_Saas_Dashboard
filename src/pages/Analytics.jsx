import { useEffect, useMemo, useState } from 'react'
import { FiArrowUpRight, FiLayers, FiTrendingUp, FiZap } from 'react-icons/fi'
import Pagewrapper from '../components/layout/Pagewrapper'
import ChartFliters from '../components/charts/ChartFliters'
import Chartcard from '../components/charts/Chartcard'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import PieChart from '../components/charts/PieChart'
import Loader from '../components/common/Loader'
import { getAnalyticsByRange } from '../services/AnalyticsService'
import { rangeLabels } from '../utils/ChartHelpers'
import { formatCompactNumber, formatCurrency } from '../utils/formatters'

function Analytics() {
  const [range, setRange] = useState('monthly')
  const [data, setData] = useState(null)

  useEffect(() => {
    getAnalyticsByRange(range).then(setData)
  }, [range])

  const highlights = useMemo(() => {
    if (!data) return []

    const revenueTotal = data.revenueTrend.reduce((sum, item) => sum + item.revenue, 0)
    const signupTotal = data.revenueTrend.reduce((sum, item) => sum + item.signups, 0)
    const topChannel = [...data.acquisition].sort((a, b) => b.value - a.value)[0]
    const topPlan = [...data.conversions].sort((a, b) => b.value - a.value)[0]

    return [
      {
        label: 'Revenue Pulse',
        value: formatCurrency(revenueTotal),
        meta: `${rangeLabels[range]}`,
        icon: FiTrendingUp,
        accent: 'cyan',
      },
      {
        label: 'Signup Velocity',
        value: formatCompactNumber(signupTotal),
        meta: 'Across selected period',
        icon: FiZap,
        accent: 'orange',
      },
      {
        label: 'Top Channel',
        value: topChannel.name,
        meta: `${topChannel.value}% contribution`,
        icon: FiArrowUpRight,
        accent: 'violet',
      },
      {
        label: 'Lead Plan',
        value: topPlan.name,
        meta: `${formatCompactNumber(topPlan.value)} conversions`,
        icon: FiLayers,
        accent: 'cyan',
      },
    ]
  }, [data, range])

  return (
    <Pagewrapper
      title="Analytics Command Center"
      subtitle="A cinematic view of revenue, acquisition, and plan conversion across your growth engine."
      actions={<ChartFliters value={range} onChange={setRange} />}
    >
      {!data ? (
        <Loader rows={4} />
      ) : (
        <>
          <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(10,15,30,0.94))] p-6 shadow-[0_28px_90px_rgba(2,6,23,0.45)] sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.02),transparent)]" />
            <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300">Growth Intelligence</p>
                  <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
                    Your SaaS momentum, reframed as a premium live signal board.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    Track movement across revenue, signups, acquisition mix, and plan conversions with a clearer hierarchy and stronger visual storytelling.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <div className={`rounded-2xl p-2 ${
                          item.accent === 'orange'
                            ? 'bg-orange-400/15 text-orange-300'
                            : item.accent === 'violet'
                              ? 'bg-violet-400/15 text-violet-300'
                              : 'bg-cyan-400/15 text-cyan-300'
                        }`}>
                          <item.icon />
                        </div>
                      </div>
                      <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{item.meta}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  ['Peak efficiency', 'Revenue is compounding without flattening conversion quality.'],
                  ['Acquisition balance', 'No single channel is overexposed, keeping growth healthier.'],
                  ['Plan momentum', 'Mid-market and premium tiers are contributing the strongest lift.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-3xl border border-white/8 bg-slate-950/35 p-5">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.28fr_0.72fr]">
            <Chartcard
              title="Revenue Trajectory"
              subtitle={`Revenue against signup energy for ${rangeLabels[range].toLowerCase()}.`}
              eyebrow="Performance curve"
              accent="cyan"
              action={<div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Live signal</div>}
            >
              <LineChart data={data.revenueTrend} />
            </Chartcard>
            <Chartcard
              title="Acquisition Mix"
              subtitle="Balanced channels with clearer contribution labels."
              eyebrow="Source share"
              accent="violet"
            >
              <PieChart data={data.acquisition} />
            </Chartcard>
          </div>

          <Chartcard
            title="Subscription Conversion Spectrum"
            subtitle="How plan tiers are performing across the selected date window."
            eyebrow="Pipeline movement"
            accent="orange"
            className="min-h-[26rem]"
          >
            <BarChart data={data.conversions} />
          </Chartcard>
        </>
      )}
    </Pagewrapper>
  )
}

export default Analytics
