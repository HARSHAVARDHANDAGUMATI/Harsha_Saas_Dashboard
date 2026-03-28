import { Badge, Card, Table } from '../common'

function RecentTable({ rows }) {
  return (
    <Card className="relative overflow-hidden border-slate-700/70 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.82))] shadow-[0_24px_80px_rgba(2,6,23,0.4)]">
      <div className="absolute left-0 top-0 h-32 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Revenue stream</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Recent Subscriptions</h3>
            <p className="mt-1 text-sm text-slate-400">Latest commercial momentum flowing through your workspace pipeline.</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            4 fresh accounts
          </div>
        </div>
        <Table
          columns={['Company', 'Plan', 'Status', 'Amount', 'Joined']}
          rows={rows}
          renderRow={(row) => (
            <tr key={row.id} className="border-t border-slate-800">
              <td className="px-4 py-4 font-semibold text-white">{row.company}</td>
              <td className="px-4 py-4 text-slate-300">{row.plan}</td>
              <td className="px-4 py-4">
                <Badge tone={row.status === 'Active' ? 'success' : row.status === 'Trial' ? 'warning' : 'brand'}>
                  {row.status}
                </Badge>
              </td>
              <td className="px-4 py-4 font-medium text-white">{row.amount}</td>
              <td className="px-4 py-4 text-slate-400">{row.joined}</td>
            </tr>
          )}
        />
      </div>
    </Card>
  )
}

export default RecentTable
