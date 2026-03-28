import { useContext, useMemo, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Pagewrapper from '../components/layout/Pagewrapper'
import Card from '../components/common/Card'
import UserFliter from '../components/Users/UserFliter'
import UserTable from '../components/Users/UserTable'
import Pagination from '../components/Users/Pagination'
import UserModal from '../components/Users/UserModal'
import usePagination from '../hooks/UsePagination'

function UserManagement() {
  const { users, toggleStatus, deleteUser, saveUser } = useContext(UserContext)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')
  const [selectedUser, setSelectedUser] = useState(null)

  const filtered = useMemo(
    () =>
      users.filter((user) => {
        const matchesQuery = `${user.name} ${user.email} ${user.location}`.toLowerCase().includes(query.toLowerCase())
        const matchesStatus = status === 'All' || user.status === status
        return matchesQuery && matchesStatus
      }),
    [users, query, status],
  )

  const { currentItems, page, setPage, totalPages } = usePagination(filtered, 5)

  return (
    <Pagewrapper title="User Management" subtitle="Role-based admin workspace with search, filters, pagination, and action controls.">
      <Card className="space-y-4">
        <UserFliter query={query} status={status} onQueryChange={setQuery} onStatusChange={setStatus} />
        <UserTable rows={currentItems} onEdit={setSelectedUser} onDelete={deleteUser} onToggleStatus={toggleStatus} />
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </Card>
      <UserModal
        open={Boolean(selectedUser)}
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onSave={(payload) => {
          saveUser(payload)
          setSelectedUser(null)
        }}
      />
    </Pagewrapper>
  )
}

export default UserManagement
