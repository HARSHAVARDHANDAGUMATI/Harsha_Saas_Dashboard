import { FiSearch } from 'react-icons/fi'
import useDebounce from '../../hooks/useDebounce'
import useSearch from '../../hooks/UseSearch'
import SearchResults from './SearchResults'

function GlobalSearch() {
  const { query, setQuery, isOpen, setIsOpen, results } = useSearch()
  const debounced = useDebounce(query)
  const visibleResults = debounced ? results : []

  return (
    <div className="relative w-full max-w-2xl">
      <div className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3">
        <FiSearch className="text-cyan-600" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search users, invoices, plans, activity..."
          className="w-full bg-transparent text-sm outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 placeholder:text-slate-400"
        />
      </div>

      {isOpen && query ? (
        <div className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-30 surface-card max-h-80 overflow-y-auto p-3">
          <SearchResults results={visibleResults} onSelect={() => setIsOpen(false)} />
        </div>
      ) : null}
    </div>
  )
}

export default GlobalSearch
