import { useMemo, useState } from 'react'
import { FiBell, FiLock, FiUser, FiZap } from 'react-icons/fi'
import Pagewrapper from '../components/layout/Pagewrapper'
import Card from '../components/common/Card'
import SettinsTabs from '../components/Settings/SettinsTabs'
import ProfileForm from '../components/Settings/ProfileForm'
import PasswordForm from '../components/Settings/PasswordForm'
import NotificationSettings from '../components/Settings/NotificationSettings'
import ThemeToggle from '../components/Settings/ThemeToggle'
import useAuth from '../hooks/useAuth'

function Settings() {
  const [tab, setTab] = useState('Profile')
  const { user, updateProfile, updatePassword } = useAuth()

  const highlights = useMemo(
    () => [
      { label: 'Identity', value: user?.name || 'Operator', icon: FiUser, tone: 'cyan' },
      { label: 'Security', value: 'Protected', icon: FiLock, tone: 'orange' },
      { label: 'Alerts', value: 'Realtime', icon: FiBell, tone: 'violet' },
      { label: 'Theme', value: 'Adaptive', icon: FiZap, tone: 'cyan' },
    ],
    [user],
  )

  return (
    <Pagewrapper title="Settings" subtitle="Manage profile, password, notifications, and appearance with a more premium control surface.">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.97),rgba(8,12,28,0.95))] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.48)] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">{item.label}</p>
                <div className={`rounded-2xl p-2 ${
                  item.tone === 'orange'
                    ? 'bg-orange-400/15 text-orange-300'
                    : item.tone === 'violet'
                      ? 'bg-violet-400/15 text-violet-300'
                      : 'bg-cyan-400/15 text-cyan-300'
                }`}>
                  <item.icon />
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <SettinsTabs value={tab} onChange={setTab} />

      <Card className="border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.84))] shadow-[0_24px_80px_rgba(2,6,23,0.42)]">
        {tab === 'Profile' ? <ProfileForm user={user} onSave={updateProfile} /> : null}
        {tab === 'Password' ? <PasswordForm onSave={updatePassword} /> : null}
        {tab === 'Notifications' ? <NotificationSettings /> : null}
        {tab === 'Theme' ? <ThemeToggle /> : null}
      </Card>
    </Pagewrapper>
  )
}

export default Settings
