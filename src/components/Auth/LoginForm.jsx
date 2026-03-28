import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './FormInput'
import Button from '../common/Button'
import useAuth from '../../hooks/useAuth'
import { validateAuthForm } from '../../utils/Validators'

function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isLoading } = useAuth()
  const [values, setValues] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateAuthForm(values, 'login')
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    try {
      await login(values)
      navigate(location.state?.from || '/dashboard')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormInput
        label="Email"
        type="email"
        placeholder="operator@pulsestack.dev"
        value={values.email}
        error={errors.email}
        onChange={(event) => setValues({ ...values, email: event.target.value })}
      />
      <FormInput
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your secure password"
        value={values.password}
        error={errors.password}
        onChange={(event) => setValues({ ...values, password: event.target.value })}
        rightElement={
          <button type="button" className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 transition hover:text-cyan-200" onClick={() => setShowPassword((value) => !value)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        }
      />
      <div className="flex items-center justify-between text-xs text-slate-400">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-900 accent-cyan-400" />
          Remember me
        </label>
        <Link to="/forgot-password" className="font-semibold uppercase tracking-[0.18em] text-cyan-300 transition hover:text-cyan-200">
          Forgot password
        </Link>
      </div>
      {message ? <p className="rounded-2xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{message}</p> : null}
      <Button type="submit" variant="auth" className="w-full py-3.5 uppercase tracking-[0.2em]" disabled={isLoading}>
        {isLoading ? 'Login...' : 'Login'}
      </Button>
      <p className="text-center text-sm text-slate-400">
        New operator?{' '}
        <Link to="/signup" className="font-semibold text-cyan-300 transition hover:text-cyan-200">
          Signup
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
