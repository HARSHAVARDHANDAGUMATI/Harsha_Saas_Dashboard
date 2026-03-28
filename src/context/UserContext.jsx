/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from 'react'
import { getUsers } from '../services/userService'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  const value = useMemo(
    () => ({
      users,
      toggleStatus: (id) => setUsers((current) => current.map((user) => (user.id === id ? { ...user, status: user.status === 'Active' ? 'Blocked' : 'Active' } : user))),
      deleteUser: (id) => setUsers((current) => current.filter((user) => user.id !== id)),
      saveUser: (payload) => setUsers((current) => current.map((user) => (user.id === payload.id ? { ...user, ...payload } : user))),
    }),
    [users],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
