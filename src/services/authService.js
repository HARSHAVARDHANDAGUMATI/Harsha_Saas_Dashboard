const wait = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms))
const USERS_KEY = 'pulse-auth-users'

const defaultUsers = [
  { email: 'admin@pulsestack.dev', password: 'Admin@123', name: 'Harsha Admin', role: 'Admin', plan: 'Enterprise' },
  { email: 'user@pulsestack.dev', password: 'User@1234', name: 'Pulse User', role: 'User', plan: 'Pro' },
]

const getStoredUsers = () => {
  const raw = localStorage.getItem(USERS_KEY)
  const customUsers = raw ? JSON.parse(raw) : []
  return [...defaultUsers, ...customUsers]
}

const persistCustomUser = (user) => {
  const raw = localStorage.getItem(USERS_KEY)
  const current = raw ? JSON.parse(raw) : []
  localStorage.setItem(USERS_KEY, JSON.stringify([...current, user]))
}

export const loginRequest = async (credentials) => {
  await wait()
  const match = getStoredUsers().find(
    (user) => user.email.toLowerCase() === credentials.email.toLowerCase() && user.password === credentials.password,
  )

  if (!match) {
    throw new Error('Invalid email or password.')
  }

  return {
    id: crypto.randomUUID(),
    name: match.name,
    email: match.email,
    role: match.role,
    plan: match.plan,
  }
}

export const signupRequest = async ({ name, email, password }) => {
  await wait()
  const users = getStoredUsers()
  const exists = users.some((user) => user.email.toLowerCase() === email.toLowerCase())
  if (exists) {
    throw new Error('An account with this email already exists.')
  }

  const newUser = {
    email,
    password,
    name,
    role: 'User',
    plan: 'Basic',
  }

  persistCustomUser(newUser)

  return {
    id: crypto.randomUUID(),
    name,
    email,
    role: 'User',
    plan: 'Basic',
  }
}

export const forgotPasswordRequest = async () => {
  await wait()
  return { success: true }
}
