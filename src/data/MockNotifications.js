export const initialNotifications = [
  {
    id: 'notif-1',
    title: 'New enterprise lead',
    message: 'Northstar Labs requested a product demo from the billing page.',
    time: '2m ago',
    type: 'success',
    read: false,
  },
  {
    id: 'notif-2',
    title: 'Revenue milestone hit',
    message: 'Monthly recurring revenue crossed $120k this morning.',
    time: '8m ago',
    type: 'info',
    read: false,
  },
  {
    id: 'notif-3',
    title: 'Payment retry scheduled',
    message: 'One failed renewal will retry automatically in 24 hours.',
    time: '18m ago',
    type: 'warning',
    read: true,
  },
]

export const liveNotificationTemplates = [
  { title: 'Team invitation accepted', message: 'A new analyst joined the dashboard workspace.', type: 'info' },
  { title: 'Plan upgraded', message: 'A customer moved from Basic to Pro.', type: 'success' },
  { title: 'Usage threshold warning', message: 'Storage consumption reached 82% of the monthly cap.', type: 'warning' },
]
