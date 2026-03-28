import Card from '../common/Card'

function ActivityFeed({ items }) {
  return (
    <Card className="relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))] shadow-[0_24px_80px_rgba(2,6,23,0.4)]">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative space-y-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Live timeline</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Recent Activity</h3>
          <p className="mt-1 text-sm text-slate-400">A more immersive snapshot of team, billing, and reporting movement.</p>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="relative rounded-[1.4rem] border border-slate-800 bg-slate-950/40 p-4 transition hover:border-cyan-400/30">
              <div className="absolute left-4 top-5 h-[calc(100%-2.5rem)] w-px bg-slate-800" />
              <div className="relative flex items-start gap-4">
                <div className={`mt-1 h-3 w-3 rounded-full ${index % 2 === 0 ? 'bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.6)]' : 'bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.5)]'}`} />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold text-white">{item.title}</p>
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default ActivityFeed
