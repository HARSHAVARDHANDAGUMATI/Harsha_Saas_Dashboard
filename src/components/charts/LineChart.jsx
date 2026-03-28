import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function LineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.35} vertical={false} />
        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '16px', color: '#e2e8f0' }}
          cursor={{ stroke: '#22d3ee', strokeOpacity: 0.25 }}
        />
        <Legend wrapperStyle={{ paddingTop: 12 }} />
        <Area type="monotone" dataKey="revenue" fill="url(#revenueFill)" stroke="transparent" />
        <Line type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={4} dot={{ r: 2, fill: '#22d3ee' }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="signups" stroke="#fb923c" strokeWidth={3} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default LineChart
