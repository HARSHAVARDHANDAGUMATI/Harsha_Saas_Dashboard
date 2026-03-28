export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19,
    description: 'For lean teams shipping their first product dashboard.',
    cta: 'Start Basic',
    featured: false,
    seats: 5,
    features: ['5 team members', 'Email support', 'Starter analytics', 'CSV exports'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59,
    description: 'For scaling SaaS teams that need deeper analytics and workflow tools.',
    cta: 'Upgrade to Pro',
    featured: true,
    seats: 20,
    features: ['20 team members', 'Advanced analytics', 'Realtime notifications', 'Priority support'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 129,
    description: 'For large organizations managing multiple workspaces and custom roles.',
    cta: 'Contact Sales',
    featured: false,
    seats: 'Unlimited',
    features: ['Unlimited users', 'Custom roles', 'Dedicated success manager', 'SLA + audit logs'],
  },
]

export const currentPlanId = 'pro'
