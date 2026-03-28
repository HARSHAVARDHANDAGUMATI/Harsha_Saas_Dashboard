function SettinsTabs({ value, onChange }) {
  const tabs = ['Profile', 'Password', 'Notifications', 'Theme']

  return (
    <div className="rounded-[1.8rem] border border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(15,23,42,0.82))] p-2 shadow-[0_16px_50px_rgba(2,6,23,0.35)]">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
              value === tab
                ? 'bg-[linear-gradient(90deg,#22d3ee_0%,#0891b2_100%)] text-white shadow-[0_10px_26px_rgba(34,211,238,0.24)]'
                : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SettinsTabs
