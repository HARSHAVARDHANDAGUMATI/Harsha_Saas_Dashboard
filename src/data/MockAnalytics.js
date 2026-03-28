export const analyticsByRange = {
  daily: {
    revenueTrend: [
      { name: 'Mon', revenue: 4200, signups: 32 },
      { name: 'Tue', revenue: 5100, signups: 46 },
      { name: 'Wed', revenue: 4600, signups: 41 },
      { name: 'Thu', revenue: 6100, signups: 54 },
      { name: 'Fri', revenue: 6800, signups: 61 },
      { name: 'Sat', revenue: 5200, signups: 36 },
      { name: 'Sun', revenue: 5700, signups: 43 },
    ],
    acquisition: [
      { name: 'Organic', value: 42 },
      { name: 'Paid', value: 26 },
      { name: 'Referral', value: 19 },
      { name: 'Partner', value: 13 },
    ],
    conversions: [
      { name: 'Trial', value: 110 },
      { name: 'Basic', value: 72 },
      { name: 'Pro', value: 48 },
      { name: 'Enterprise', value: 11 },
    ],
  },
  weekly: {
    revenueTrend: [
      { name: 'W1', revenue: 21000, signups: 182 },
      { name: 'W2', revenue: 24600, signups: 201 },
      { name: 'W3', revenue: 23200, signups: 194 },
      { name: 'W4', revenue: 28100, signups: 228 },
    ],
    acquisition: [
      { name: 'Organic', value: 38 },
      { name: 'Paid', value: 29 },
      { name: 'Referral', value: 18 },
      { name: 'Partner', value: 15 },
    ],
    conversions: [
      { name: 'Trial', value: 420 },
      { name: 'Basic', value: 228 },
      { name: 'Pro', value: 164 },
      { name: 'Enterprise', value: 38 },
    ],
  },
  monthly: {
    revenueTrend: [
      { name: 'Jan', revenue: 78200, signups: 718 },
      { name: 'Feb', revenue: 84100, signups: 792 },
      { name: 'Mar', revenue: 92800, signups: 864 },
      { name: 'Apr', revenue: 96400, signups: 901 },
      { name: 'May', revenue: 103800, signups: 975 },
      { name: 'Jun', revenue: 112200, signups: 1018 },
    ],
    acquisition: [
      { name: 'Organic', value: 34 },
      { name: 'Paid', value: 31 },
      { name: 'Referral', value: 21 },
      { name: 'Partner', value: 14 },
    ],
    conversions: [
      { name: 'Trial', value: 1640 },
      { name: 'Basic', value: 990 },
      { name: 'Pro', value: 672 },
      { name: 'Enterprise', value: 126 },
    ],
  },
}

export const dashboardOverview = {
  kpis: [
    { id: 'users', label: 'Active Users', value: 18429, delta: '+12.8%', tone: 'brand' },
    { id: 'revenue', label: 'MRR', value: 128400, prefix: '$', delta: '+18.2%', tone: 'success' },
    { id: 'growth', label: 'Growth Rate', value: 24.7, suffix: '%', delta: '+4.1%', tone: 'accent' },
    { id: 'subs', label: 'Subscriptions', value: 2378, delta: '+9.4%', tone: 'brand' },
  ],
  activities: [
    { id: 1, title: 'Ava onboarded 24 new users', meta: 'Team growth spike from Q2 campaign', time: '12 minutes ago' },
    { id: 2, title: 'Enterprise contract renewed', meta: 'Helio Commerce renewed for 12 months', time: '41 minutes ago' },
    { id: 3, title: 'Report exported', meta: 'Finance team downloaded the MRR summary', time: '1 hour ago' },
    { id: 4, title: 'Notification preferences updated', meta: 'Security alerts enabled for all admins', time: '3 hours ago' },
  ],
  recentSubscriptions: [
    { id: 'sub-1', company: 'PixelMint', plan: 'Pro', status: 'Active', amount: '$59', joined: 'Today' },
    { id: 'sub-2', company: 'Atlas One', plan: 'Enterprise', status: 'Trial', amount: '$129', joined: 'Yesterday' },
    { id: 'sub-3', company: 'BentoStack', plan: 'Basic', status: 'Active', amount: '$19', joined: '2 days ago' },
    { id: 'sub-4', company: 'Northstar Labs', plan: 'Pro', status: 'Pending', amount: '$59', joined: '4 days ago' },
  ],
}
