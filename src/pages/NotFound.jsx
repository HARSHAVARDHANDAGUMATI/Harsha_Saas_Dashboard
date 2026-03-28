import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel max-w-lg rounded-[2rem] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted">The route you requested is not part of the dashboard workspace.</p>
        <Link to="/dashboard" className="mt-6 inline-block">
          <Button>Back to dashboard</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
