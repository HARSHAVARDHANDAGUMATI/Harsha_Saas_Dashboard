import { Cell, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { chartPalette } from '../../utils/constants'

function PieChart({ data }) {
  return (
    <div className="grid h-full items-center gap-5 lg:grid-cols-[1fr_1.1fr]">
      <div className="flex h-full min-h-[240px] items-center justify-center overflow-visible">
        <ResponsiveContainer width="100%" height={240}>
          <RechartsPieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={64}
              outerRadius={108}
              paddingAngle={4}
              stroke="#0f172a"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={chartPalette[index % chartPalette.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', color: '#e2e8f0' }} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/45 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: chartPalette[index % chartPalette.length] }} />
              <span className="text-sm font-medium text-slate-200">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChart
