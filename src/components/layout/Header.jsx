import { FiBell, FiMenu } from 'react-icons/fi'
import Breadcrumb from '../common/Breadcrumb'
import GlobalSearch from '../Search/GlobalSearch'
import useNotification from '../../hooks/UseNotification'
import NotificationPanel from '../notifications/NotificationPanel'
import ThemeSwitch from './ThemeSwitch'

function Header({ onOpenMenu }) {
  const { notifications, unreadCount, panelOpen, setPanelOpen, markAllAsRead, toggleRead } = useNotification()

  return (
    <header className="relative z-20 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 lg:hidden">
          <button className="glass-panel rounded-2xl p-3" onClick={onOpenMenu}>
            <FiMenu />
          </button>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-3xl items-center justify-center gap-3">
            <GlobalSearch />
            <button className="glass-panel relative rounded-2xl p-3" onClick={() => setPanelOpen(!panelOpen)}>
              <FiBell />
              {unreadCount ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <ThemeSwitch />
        </div>
      </div>

      <Breadcrumb />

      {panelOpen ? (
        <div className="absolute right-0 top-24 z-30 w-full max-w-md max-[440px]:left-0 max-[440px]:max-w-full">
          <NotificationPanel notifications={notifications} onToggleRead={toggleRead} onMarkAllAsRead={markAllAsRead} />
        </div>
      ) : null}
    </header>
  )
}

export default Header
