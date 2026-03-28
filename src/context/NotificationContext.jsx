/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from 'react'
import { createLiveNotification, getNotifications } from '../services/NotificationService'

export const NotificationContext = createContext(null)

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([])
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    getNotifications().then(setNotifications)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setNotifications((current) => [createLiveNotification(), ...current].slice(0, 8))
    }, 18000)
    return () => clearInterval(timer)
  }, [])

  const unreadCount = notifications.filter((item) => !item.read).length
  const value = useMemo(
    () => ({
      notifications,
      unreadCount,
      panelOpen,
      setPanelOpen,
      markAllAsRead: () => setNotifications((current) => current.map((item) => ({ ...item, read: true }))),
      toggleRead: (id) => setNotifications((current) => current.map((item) => (item.id === id ? { ...item, read: !item.read } : item))),
    }),
    [notifications, unreadCount, panelOpen],
  )

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}
