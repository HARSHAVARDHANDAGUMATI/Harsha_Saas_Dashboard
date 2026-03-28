import { useEffect, useMemo, useState } from 'react'
import { FiActivity, FiArrowUpRight, FiLayers, FiStar } from 'react-icons/fi'
import Pagewrapper from '../components/layout/Pagewrapper'
import Loader from '../components/common/Loader'
import KPICard from '../components/Dashboard/KPICard'
import ActivityFeed from '../components/Dashboard/ActivityFeed'
import RecentTable from '../components/Dashboard/RecentTable'
import Card from '../components/common/Card'
import { getDashboardOverview } from '../services/AnalyticsService'
import DownloadButton from '../components/Reports/DownloadButton'
import { exportCSV, exportPDFMock } from '../utils/ExportHelpers'
import { formatCurrency } from '../utils/formatters'

function DashBoard() {
  const [overview, setOverview] = useState(null)

  useEffect(() => {
    getDashboardOverview().then(setOverview)
  }, [])

  const spotlight = useMemo(() => {
    if (!overview) return []
    const mrr = overview.kpis.find((item) => item.id === 'revenue')?.value ?? 0
    const users = overview.kpis.find((item) => item.id === 'users')?.value ?? 0

    return [
      {
        label: 'Runway signal',
        value: formatCurrency(mrr),
        copy: 'Monthly recurring revenue is sustaining premium-grade growth.',
        icon: FiStar,
        tone: 'cyan',
      },
      {
        label: 'User intensity',
        value: `${Math.round(users / 320)} / min`,
        copy: 'Active workspace touchpoints across the latest usage cycle.',
        icon: FiActivity,
        tone: 'orange',
      },
      {
        label: 'Pipeline depth',
        value: 'Enterprise-led',
        copy: 'Larger plans are contributing stronger account expansion.',
        icon: FiLayers,
        tone: 'violet',
      },
    ]
  }, [overview])

  if (!overview) return <Loader rows={4} />

  return (
    <Pagewrapper
      title="SaaS Dashboard"
      subtitle="A command-level overview with sharper storytelling, premium visual depth, and export-ready intelligence."
      actions={<DownloadButton onExport={(type) => {
        if (type === 'csv') exportCSV(overview.recentSubscriptions, 'dashboard-report.csv')
        else exportPDFMock('Dashboard Overview', overview.activities.map((item) => `${item.title} - ${item.meta}`), 'dashboard-report.pdf')
      }} />}
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.97),rgba(8,12,28,0.95))] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-cyan-300">Executive cockpit</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl">
                Turn today’s SaaS pulse into a premium visual control surface.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Monitor subscriptions, activity, and financial momentum through a cleaner hierarchy and a more cinematic interface designed to feel product-grade.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {spotlight.map((item) => (
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

          <div className="grid gap-4">
            {[
              ['Expansion pulse', '+32% quarterly acceleration with stronger Pro-tier conversions.'],
              ['Retention confidence', '97.8% renewal performance keeps revenue quality exceptionally stable.'],
              ['Operational lift', 'Export and search workflows are cutting friction across the team.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-3xl border border-white/8 bg-slate-950/35 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-slate-300">
                    <FiArrowUpRight />
                  </div>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overview.kpis.map((item) => <KPICard key={item.id} item={item} />)}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <RecentTable rows={overview.recentSubscriptions} />
        <ActivityFeed items={overview.activities} />
      </div>

      <Card className="relative overflow-hidden border-slate-700/70 bg-[linear-gradient(135deg,rgba(8,12,28,0.98),rgba(15,23,42,0.95))] text-white shadow-[0_26px_80px_rgba(2,6,23,0.4)]">
        <div className="absolute right-0 top-0 h-28 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative grid gap-5 md:grid-cols-3">
          {[
            ['+32%', 'Quarterly expansion', 'Stronger paid conversion from the Pro plan funnel.'],
            ['97.8%', 'Renewal retention', 'Teams are sticking with annual contracts longer.'],
            ['3.2x', 'Faster reporting', 'Export workflows and search reduce ops effort.'],
          ].map(([stat, title, copy], index) => (
            <div key={title} className={`rounded-3xl border p-5 ${index === 1 ? 'border-cyan-400/20 bg-cyan-400/8' : 'border-white/8 bg-white/[0.03]'}`}>
              <p className="text-4xl font-black text-cyan-300">{stat}</p>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </Card>
    </Pagewrapper>
  )
}

export default DashBoard
