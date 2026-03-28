import {
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart as RechartsBarChart,
} from 'recharts'

const barColors = ['#22d3ee', '#38bdf8', '#fb923c', '#8b5cf6']

function BarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 10, right: 0, left: -18, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.35} vertical={false} />
        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', color: '#e2e8f0' }} />
        <Bar dataKey="value" radius={[14, 14, 6, 6]}>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={barColors[index % barColors.length]} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export default BarChart
