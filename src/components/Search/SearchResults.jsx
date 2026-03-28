import { Link } from 'react-router-dom'

function SearchResults({ results, onSelect }) {
  if (!results.length) {
    return <div className="rounded-2xl p-4 text-sm text-muted">No matching results yet.</div>
  }

  return (
    <div className="space-y-2">
      {results.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          onClick={onSelect}
          className="block rounded-2xl border border-slate-200 p-3 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-slate-800 dark:hover:bg-slate-800"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-medium">{item.label}</p>
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-600">{item.category}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{item.meta}</p>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
