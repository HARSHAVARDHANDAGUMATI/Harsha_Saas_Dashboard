function Modal({ open, title, children, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 p-4 sm:items-center" onClick={onClose}>
      <div className="surface-card w-full max-w-lg p-6" onClick={(event) => event.stopPropagation()}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-muted transition hover:text-cyan-600">Close</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
