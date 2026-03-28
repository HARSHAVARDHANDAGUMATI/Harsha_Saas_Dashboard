import { FiChevronRight } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
      <Link to="/dashboard" className="hover:text-cyan-600">Home</Link>
      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join('/')}`
        return (
          <span key={url} className="flex items-center gap-2">
            <FiChevronRight className="text-xs" />
            <span className={index === segments.length - 1 ? 'font-semibold text-[rgb(var(--text))]' : ''}>
              {segment.replace('-', ' ')}
            </span>
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
