import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function RoleGuard({ roles }) {
  const { user } = useAuth()
  if (!roles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />
  }
  return <Outlet />
}

export default RoleGuard
