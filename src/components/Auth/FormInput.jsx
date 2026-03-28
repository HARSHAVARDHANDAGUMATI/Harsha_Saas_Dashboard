function FormInput({ label, error, className = '', inputClassName = '', rightElement, ...props }) {
  return (
    <label className="block space-y-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">{label}</span>
      <div className={`flex items-center rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3.5 transition focus-within:border-cyan-400 focus-within:bg-slate-900 ${className}`}>
        <input
          className={`w-full bg-transparent text-sm text-slate-100 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 placeholder:text-slate-500 ${inputClassName}`}
          {...props}
        />
        {rightElement ? <div className="ml-3 shrink-0">{rightElement}</div> : null}
      </div>
      {error ? <span className="text-xs text-rose-400">{error}</span> : null}
    </label>
  )
}

export default FormInput
