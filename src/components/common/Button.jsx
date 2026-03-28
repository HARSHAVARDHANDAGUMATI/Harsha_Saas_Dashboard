function Button({ children, variant = 'primary', className = '', type = 'button', ...props }) {
  const variants = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-500',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
    ghost: 'bg-transparent text-[rgb(var(--text))] hover:bg-slate-100 dark:hover:bg-slate-800',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
    danger: 'bg-rose-500 text-white hover:bg-rose-400',
    auth: 'bg-[linear-gradient(90deg,#67e8f9_0%,#38bdf8_45%,#22d3ee_100%)] text-slate-950 shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_0_24px_rgba(34,211,238,0.45),0_16px_32px_rgba(14,165,233,0.28)] hover:scale-[1.01] hover:shadow-[0_0_0_1px_rgba(103,232,249,0.4),0_0_34px_rgba(34,211,238,0.55),0_20px_40px_rgba(14,165,233,0.35)]',
  }

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
