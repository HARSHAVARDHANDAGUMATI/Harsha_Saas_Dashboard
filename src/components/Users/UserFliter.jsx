function UserFliter({ query, status, onQueryChange, onStatusChange }) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_180px]">
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search by name, email, location..."
        className="glass-panel rounded-2xl px-4 py-3 text-sm"
      />
      <select value={status} onChange={(event) => onStatusChange(event.target.value)} className="glass-panel rounded-2xl px-4 py-3 text-sm">
        <option value="All">All statuses</option>
        <option value="Active">Active</option>
        <option value="Blocked">Blocked</option>
      </select>
    </div>
  )
}

export default UserFliter
