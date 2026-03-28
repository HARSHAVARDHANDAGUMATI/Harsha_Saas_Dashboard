import { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Button from '../common/Button'

function UserModal({ open, user, onClose, onSave }) {
  const [form, setForm] = useState(user)

  useEffect(() => {
    setForm(user)
  }, [user])

  if (!form) return null

  return (
    <Modal open={open} onClose={onClose} title="Edit user">
      <div className="space-y-4">
        <input className="w-full rounded-2xl border px-4 py-3 dark:bg-slate-900" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input className="w-full rounded-2xl border px-4 py-3 dark:bg-slate-900" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <div className="grid gap-3 sm:grid-cols-2">
          <select className="rounded-2xl border px-4 py-3 dark:bg-slate-900" value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })}>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>
          <select className="rounded-2xl border px-4 py-3 dark:bg-slate-900" value={form.plan} onChange={(event) => setForm({ ...form, plan: event.target.value })}>
            <option>Basic</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSave(form)}>Save changes</Button>
        </div>
      </div>
    </Modal>
  )
}

export default UserModal
