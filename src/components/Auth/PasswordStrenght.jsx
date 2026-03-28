import { validateStrongPassword } from '../../utils/Validators'

function PasswordStrenght({ value }) {
  if (!value) return null

  const isStrong = validateStrongPassword(value)

  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
        isStrong
          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
          : 'border-rose-500/30 bg-rose-500/10 text-rose-400'
      }`}
    >
      {isStrong ? 'Strong password' : 'Weak password'}
    </div>
  )
}

export default PasswordStrenght
