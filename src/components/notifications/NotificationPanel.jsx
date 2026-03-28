import { Button, Card, Badge } from '../common'

function NotificationPanel({ notifications, onToggleRead, onMarkAllAsRead }) {
  return (
    <Card className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-sm text-muted">Mock real-time updates across the dashboard.</p>
        </div>
        <Button variant="ghost" onClick={onMarkAllAsRead}>Mark all read</Button>
      </div>

      <div className="space-y-3">
        {notifications.map((item) => (
          <button
            key={item.id}
            onClick={() => onToggleRead(item.id)}
            className="w-full rounded-2xl border border-slate-200 p-4 text-left transition hover:border-cyan-400 dark:border-slate-800"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.message}</p>
              </div>
              <Badge tone={item.read ? 'neutral' : 'brand'}>{item.read ? 'Read' : 'New'}</Badge>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">{item.time}</p>
          </button>
        ))}
      </div>
    </Card>
  )
}

export default NotificationPanel
