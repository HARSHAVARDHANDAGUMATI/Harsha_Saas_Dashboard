import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import Button from '../common/Button'
import ExportModal from './ExportModal'

function DownloadButton({ onExport }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)} className="gap-2">
        <FiDownload />
        Download report
      </Button>
      <ExportModal
        open={open}
        onClose={() => setOpen(false)}
        onExport={(type) => {
          onExport(type)
          setOpen(false)
        }}
      />
    </>
  )
}

export default DownloadButton
