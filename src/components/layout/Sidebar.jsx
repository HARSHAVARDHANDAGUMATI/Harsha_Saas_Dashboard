import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { appName, navItems } from '../../utils/constants'
import useAuth from '../../hooks/useAuth'
import { canAccess } from '../../utils/RoleHelpers'

function Sidebar({ mobileOpen, closeMobile }) {
  const { user, logout } = useAuth()

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-white/10 bg-slate-950/90 p-5 text-white transition duration-300 lg:translate-x-0 lg:rounded-r-[2rem] ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex h-full flex-col">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">SaaS Suite</p>
            <h2 className="text-2xl font-bold">{appName}</h2>
          </div>
          <button className="lg:hidden" onClick={closeMobile}>Close</button>
        </div>

        <div className="mb-8 rounded-3xl bg-white/5 p-4">
          <p className="text-sm text-slate-300">Signed in as</p>
          <p className="mt-1 font-semibold">{user?.name}</p>
          <p className="text-sm text-cyan-300">{user?.role}</p>
        </div>

        <nav className="space-y-2">
          {navItems
            .filter((item) => canAccess(user?.role, item.roles))
            .map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-cyan-500 text-slate-950' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <item.icon />
                {item.label}
              </NavLink>
            ))}
        </nav>

        <button
          onClick={logout}
          className="mt-auto flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
