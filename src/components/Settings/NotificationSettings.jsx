import { useState } from 'react'
import { notificationChannels } from '../../utils/constants'

function NotificationSettings() {
  const [channels, setChannels] = useState(
    notificationChannels.reduce((accumulator, item) => ({ ...accumulator, [item.id]: true }), {}),
  )

  return (
    <div className="grid gap-4">
      {notificationChannels.map((item) => (
        <label key={item.id} className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
          <div>
            <p className="font-semibold text-white">{item.label}</p>
            <p className="mt-1 text-sm text-slate-400">Keep this notification stream active in your workspace.</p>
          </div>
          <input
            type="checkbox"
            checked={channels[item.id]}
            onChange={() => setChannels({ ...channels, [item.id]: !channels[item.id] })}
            className="h-5 w-5 accent-cyan-500"
          />
        </label>
      ))}
    </div>
  )
}

export default NotificationSettings
