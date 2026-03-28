import Modal from '../common/Modal'
import Button from '../common/Button'

function ExportModal({ open, onClose, onExport }) {
  return (
    <Modal open={open} onClose={onClose} title="Download report">
      <div className="space-y-4">
        <p className="text-sm text-muted">Choose a format for your current analytics snapshot.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="primary" onClick={() => onExport('csv')}>Export CSV</Button>
          <Button variant="outline" onClick={() => onExport('pdf')}>Export PDF</Button>
        </div>
      </div>
    </Modal>
  )
}

export default ExportModal
