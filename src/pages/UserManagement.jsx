import { useContext, useMemo, useState } from 'react'
import { UserContext } from '../context/UserContext'
import Pagewrapper from '../components/layout/Pagewrapper'
import Card from '../components/common/Card'
import Modal from '../components/common/Modal'
import Button from '../components/common/Button'
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
  const [userToDelete, setUserToDelete] = useState(null)

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
        <UserTable
          rows={currentItems}
          onEdit={setSelectedUser}
          onDelete={setUserToDelete}
          onToggleStatus={toggleStatus}
        />
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

      <Modal open={Boolean(userToDelete)} onClose={() => setUserToDelete(null)} title="Delete user">
        <div className="space-y-5">
          <p className="text-sm text-muted">
            Delete <span className="font-semibold text-white">{userToDelete?.name}</span> from the user list?
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setUserToDelete(null)}>Cancel</Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteUser(userToDelete.id)
                setUserToDelete(null)
              }}
            >
              Confirm Delete
            </Button>
          </div>
        </div>
      </Modal>
    </Pagewrapper>
  )
}

export default UserManagement
