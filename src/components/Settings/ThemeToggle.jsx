import ThemeSwitch from '../layout/ThemeSwitch'
import useTheme from '../../hooks/useTheme'

function ThemeToggle() {
  const { theme } = useTheme()

  return (
    <div className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/40 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Appearance</p>
        <h3 className="mt-2 text-2xl font-bold text-white capitalize">{theme} mode active</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Switch between a luminous dark interface and a cleaner light presentation without leaving the dashboard.
        </p>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default ThemeToggle
