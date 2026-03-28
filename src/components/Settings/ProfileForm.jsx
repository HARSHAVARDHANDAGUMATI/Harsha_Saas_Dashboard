import { useState } from 'react'
import Button from '../common/Button'

function ProfileForm({ user, onSave }) {
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' })
  const [saved, setSaved] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave(form)
    setSaved(true)
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Identity</p>
        <div className="mt-4 grid gap-4">
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-4 text-base text-white" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-4 text-base text-white" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        </div>
      </div>
      {saved ? <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">Profile updated successfully.</p> : null}
      <Button type="submit" variant="auth" className="px-6 py-3">Save profile</Button>
    </form>
  )
}

export default ProfileForm
