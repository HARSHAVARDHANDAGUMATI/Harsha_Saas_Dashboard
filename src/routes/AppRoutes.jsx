import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import RoleGuard from './RoleGuard'
import Dashboardlayout from '../components/layout/Dashboardlayout'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Dashboard from '../pages/dashboard'
import Analytics from '../pages/Analytics'
import UserManagement from '../pages/UserManagement'
import Billing from '../pages/Billing'
import Settings from '../pages/Settings'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Dashboardlayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route element={<RoleGuard roles={['Admin']} />}>
            <Route path="/users" element={<UserManagement />} />
          </Route>
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
