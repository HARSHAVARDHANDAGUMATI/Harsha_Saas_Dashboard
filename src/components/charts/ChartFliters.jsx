import { filterOptions } from '../../utils/constants'

function ChartFliters({ value, onChange }) {
  return (
    <div className="inline-flex rounded-2xl border border-slate-700 bg-slate-950/70 p-1 shadow-[0_12px_30px_rgba(2,6,23,0.28)]">
      {filterOptions.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-2xl px-4 py-2 text-sm font-semibold capitalize transition ${
            value === option
              ? 'bg-[linear-gradient(90deg,#22d3ee_0%,#0891b2_100%)] text-white shadow-[0_8px_20px_rgba(34,211,238,0.28)]'
              : 'text-slate-400 hover:text-cyan-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default ChartFliters
