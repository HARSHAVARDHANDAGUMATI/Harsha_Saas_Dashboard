import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { Badge, Button, Table } from '../common'
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
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="gap-2 px-3 py-2 text-xs" onClick={() => onEdit(user)}>
                <FiEdit2 />
                Edit
              </Button>
              <Button variant="danger" className="gap-2 px-3 py-2 text-xs" onClick={() => onDelete(user)}>
                <FiTrash2 />
                Delete
              </Button>
            </div>
          </td>
        </tr>
      )}
    />
  )
}

export default UserTable
