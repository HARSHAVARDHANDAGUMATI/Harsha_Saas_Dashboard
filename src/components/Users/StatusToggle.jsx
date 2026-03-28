function StatusToggle({ status, onToggle }) {
  const active = status === 'Active'

  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${active ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${active ? 'translate-x-8' : 'translate-x-1'}`} />
    </button>
  )
}

export default StatusToggle
