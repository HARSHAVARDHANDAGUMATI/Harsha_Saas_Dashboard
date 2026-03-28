import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { Badge, Table } from '../common'
import StatusToggle from './StatusToggle'

function UserTable({ rows, onEdit, onDelete, onToggleStatus }) {
  return (
    <Table
      columns={['User', 'Role', 'Plan', 'Location', 'Joined', 'Status', 'Actions']}
      rows={rows}
      emptyText="No users match the selected filters."
      renderRow={(user) => (
        <tr key={user.id} className="border-t border-slate-200 dark:border-slate-800">
          <td className="px-4 py-4">
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-muted">{user.email}</p>
          </td>
          <td className="px-4 py-4">{user.role}</td>
          <td className="px-4 py-4">{user.plan}</td>
          <td className="px-4 py-4">{user.location}</td>
          <td className="px-4 py-4">{user.joined}</td>
          <td className="px-4 py-4">
            <div className="flex items-center gap-3">
              <Badge tone={user.status === 'Active' ? 'success' : 'danger'}>{user.status}</Badge>
              <StatusToggle status={user.status} onToggle={() => onToggleStatus(user.id)} />
            </div>
          </td>
          <td className="px-4 py-4">
            <div className="flex gap-2">
              <button className="rounded-xl border p-2" onClick={() => onEdit(user)}><FiEdit2 /></button>
              <button className="rounded-xl border p-2 text-rose-500" onClick={() => onDelete(user.id)}><FiTrash2 /></button>
            </div>
          </td>
        </tr>
      )}
    />
  )
}

export default UserTable
