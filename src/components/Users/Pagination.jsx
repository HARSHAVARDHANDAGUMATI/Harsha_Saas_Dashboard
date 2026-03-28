function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <p className="text-muted">Page {page} of {totalPages}</p>
      <div className="flex gap-2">
        <button className="rounded-2xl border px-4 py-2" disabled={page === 1} onClick={() => onChange(page - 1)}>Previous</button>
        <button className="rounded-2xl border px-4 py-2" disabled={page === totalPages} onClick={() => onChange(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
