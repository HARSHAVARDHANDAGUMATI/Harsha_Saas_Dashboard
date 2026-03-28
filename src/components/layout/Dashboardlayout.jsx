import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Dashboardlayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-transparent">
      <Sidebar mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />
      <div className="lg:pl-72">
        <main className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-6">
            <Header onOpenMenu={() => setMobileOpen(true)} />
            <Outlet />
          </div>
        </main>
      </div>
      {mobileOpen ? <div className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setMobileOpen(false)} /> : null}
    </div>
  )
}

export default Dashboardlayout
