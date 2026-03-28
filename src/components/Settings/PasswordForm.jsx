import { useState } from 'react'
import Button from '../common/Button'
import { validateStrongPassword } from '../../utils/Validators'

function PasswordForm({ onSave }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validateStrongPassword(newPassword)) {
      setMessage('New password must be strong.')
      return
    }
    await onSave({ currentPassword, newPassword })
    setMessage('Password updated successfully.')
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Security</p>
        <div className="mt-4 grid gap-4">
          <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-4">
            <input type={showCurrent ? 'text' : 'password'} placeholder="Current password" className="w-full bg-transparent text-base text-white placeholder:text-slate-500" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} />
            <button type="button" className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300" onClick={() => setShowCurrent((value) => !value)}>{showCurrent ? 'Hide' : 'Show'}</button>
          </div>
          <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-4">
            <input type={showNew ? 'text' : 'password'} placeholder="New password" className="w-full bg-transparent text-base text-white placeholder:text-slate-500" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
            <button type="button" className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300" onClick={() => setShowNew((value) => !value)}>{showNew ? 'Hide' : 'Show'}</button>
          </div>
        </div>
      </div>
      {message ? <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">{message}</p> : null}
      <Button type="submit" variant="auth" className="px-6 py-3">Change password</Button>
    </form>
  )
}

export default PasswordForm
