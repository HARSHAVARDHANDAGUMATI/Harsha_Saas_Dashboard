import Card from '../common/Card'

function Chartcard({ title, subtitle, eyebrow, accent = 'cyan', action, children, className = '' }) {
  const accentStyles = {
    cyan: 'from-cyan-400/20 via-cyan-400/5 to-transparent',
    orange: 'from-orange-400/20 via-orange-400/5 to-transparent',
    violet: 'from-violet-400/20 via-violet-400/5 to-transparent',
  }

  return (
    <Card className={`group relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(15,23,42,0.78))] shadow-[0_25px_80px_rgba(2,6,23,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(2,6,23,0.5)] ${className}`}>
      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-r ${accentStyles[accent]} opacity-90 blur-2xl`} />
      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p> : null}
          <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      <div className="relative h-80 max-[440px]:h-64">{children}</div>
    </Card>
  )
}

export default Chartcard
