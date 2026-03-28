/* eslint-disable react-refresh/only-export-components */
import { createContext, useMemo, useState } from 'react'
import { mockUsers } from '../data/mock-users'
import { paymentHistory } from '../data/MockBilling'
import { dashboardOverview } from '../data/MockAnalytics'
import { plans } from '../data/Plans'

export const SearchContext = createContext(null)

const searchableItems = [
  ...mockUsers.map((user) => ({ id: `user-${user.id}`, label: user.name, category: 'Users', path: '/users', meta: user.email })),
  ...paymentHistory.map((invoice) => ({ id: invoice.id, label: invoice.id, category: 'Billing', path: '/billing', meta: `${invoice.plan} ${invoice.status}` })),
  ...dashboardOverview.activities.map((item) => ({ id: `activity-${item.id}`, label: item.title, category: 'Activity', path: '/dashboard', meta: item.meta })),
  ...plans.map((plan) => ({ id: plan.id, label: `${plan.name} plan`, category: 'Plans', path: '/billing', meta: plan.description })),
]

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const results = useMemo(() => {
    if (!query.trim()) return []
    const normalized = query.toLowerCase()
    return searchableItems.filter((item) => `${item.label} ${item.meta}`.toLowerCase().includes(normalized))
  }, [query])

  return <SearchContext.Provider value={{ query, setQuery, isOpen, setIsOpen, results }}>{children}</SearchContext.Provider>
}
