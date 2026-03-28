import { FiBarChart2, FiCreditCard, FiGrid, FiSettings, FiUsers } from 'react-icons/fi'

export const appName = 'PulseStack'
export const filterOptions = ['daily', 'weekly', 'monthly']

export const navItems = [
  { path: '/dashboard', label: 'Overview', icon: FiGrid },
  { path: '/analytics', label: 'Analytics', icon: FiBarChart2 },
  { path: '/users', label: 'Users', icon: FiUsers, roles: ['Admin'] },
  { path: '/billing', label: 'Billing', icon: FiCreditCard },
  { path: '/settings', label: 'Settings', icon: FiSettings },
]

export const notificationChannels = [
  { id: 'product', label: 'Product updates' },
  { id: 'security', label: 'Security alerts' },
  { id: 'billing', label: 'Billing reminders' },
  { id: 'reports', label: 'Report digests' },
]

export const chartPalette = ['#0891b2', '#f97316', '#22c55e', '#8b5cf6']
