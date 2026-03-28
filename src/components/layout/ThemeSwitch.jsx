import { FiMoon, FiSun } from 'react-icons/fi'
import useTheme from '../../hooks/useTheme'

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className={`relative h-14 w-28 rounded-full border p-1.5 transition duration-300 ${
        isDark
          ? 'border-cyan-500/60 bg-slate-950'
          : 'border-orange-400/50 bg-slate-950'
      }`}
    >
      <span
        className={`absolute inset-y-1.5 flex h-11 w-11 items-center justify-center rounded-full text-slate-950 shadow-[0_10px_30px_rgba(14,165,233,0.35)] transition duration-300 ${
          isDark
            ? 'left-[calc(100%-3rem)] -translate-x-0 bg-[linear-gradient(135deg,#22d3ee_0%,#2563eb_100%)]'
            : 'left-1.5 bg-[linear-gradient(135deg,#fb923c_0%,#ef4444_100%)] shadow-[0_10px_30px_rgba(249,115,22,0.35)]'
        }`}
      >
        {isDark ? <FiMoon className="text-lg" /> : <FiSun className="text-lg" />}
      </span>

      <span className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 text-lg">
        <FiSun className={`${isDark ? 'text-slate-600' : 'text-transparent'}`} />
        <FiMoon className={`${isDark ? 'text-transparent' : 'text-slate-600'}`} />
      </span>
    </button>
  )
}

export default ThemeSwitch
