import { Badge, Card, Table } from '../common'
import { formatCurrency, formatDate } from '../../utils/formatters'

function PaymentHistory({ rows }) {
  return (
    <Card className="relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.97),rgba(15,23,42,0.86))] shadow-[0_24px_80px_rgba(2,6,23,0.42)]">
      <div className="absolute left-0 top-0 h-28 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Finance log</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Payment History</h3>
            <p className="mt-1 text-sm text-slate-400">Invoices, payment states, and renewal records with a cleaner premium presentation.</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            4 invoices tracked
          </div>
        </div>
        <Table
          columns={['Invoice', 'Plan', 'Date', 'Method', 'Amount', 'Status']}
          rows={rows}
          renderRow={(row) => (
            <tr key={row.id} className="border-t border-slate-800">
              <td className="px-4 py-4 font-semibold text-white">{row.id}</td>
              <td className="px-4 py-4 text-slate-300">{row.plan}</td>
              <td className="px-4 py-4 text-slate-300">{formatDate(row.date)}</td>
              <td className="px-4 py-4 text-slate-400">{row.method}</td>
              <td className="px-4 py-4 font-medium text-white">{formatCurrency(row.amount)}</td>
              <td className="px-4 py-4">
                <Badge tone={row.status === 'Paid' ? 'success' : row.status === 'Refunded' ? 'warning' : 'danger'}>
                  {row.status}
                </Badge>
              </td>
            </tr>
          )}
        />
      </div>
    </Card>
  )
}

export default PaymentHistory
