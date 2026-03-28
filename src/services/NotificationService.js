import { initialNotifications, liveNotificationTemplates } from '../data/MockNotifications'

export const getNotifications = async () => initialNotifications

export const createLiveNotification = () => {
  const template = liveNotificationTemplates[Math.floor(Math.random() * liveNotificationTemplates.length)]
  return {
    id: crypto.randomUUID(),
    ...template,
    time: 'Just now',
    read: false,
  }
}
