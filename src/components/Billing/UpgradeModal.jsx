import Modal from '../common/Modal'
import Button from '../common/Button'

function UpgradeModal({ open, plan, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose} title={`${plan?.name || 'Plan'} workflow`}>
      <div className="space-y-5">
        <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-4">
          <p className="text-sm leading-6 text-slate-300">
            Confirm this subscription action to continue the mock billing workflow for the <span className="font-semibold text-white">{plan?.name}</span> plan.
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="auth" onClick={() => onConfirm(plan)}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default UpgradeModal
