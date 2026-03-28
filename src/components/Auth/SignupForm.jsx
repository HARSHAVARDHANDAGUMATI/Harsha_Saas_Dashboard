import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './FormInput'
import PasswordStrenght from './PasswordStrenght'
import Button from '../common/Button'
import useAuth from '../../hooks/useAuth'
import { validateAuthForm } from '../../utils/Validators'

function SignupForm() {
  const navigate = useNavigate()
  const { signup, isLoading, logout } = useAuth()
  const [values, setValues] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateAuthForm(values, 'signup')
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    try {
      await signup(values)
      logout()
      navigate('/login')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <FormInput
        label="Name"
        placeholder="Harsha"
        value={values.name}
        error={errors.name}
        onChange={(event) => setValues({ ...values, name: event.target.value })}
      />
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
        placeholder="Create a secure password"
        value={values.password}
        error={errors.password}
        onChange={(event) => setValues({ ...values, password: event.target.value })}
        rightElement={
          <button type="button" className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 transition hover:text-cyan-200" onClick={() => setShowPassword((value) => !value)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        }
      />
      <PasswordStrenght value={values.password} />
      <FormInput
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        onChange={(event) => setValues({ ...values, confirmPassword: event.target.value })}
        rightElement={
          <button type="button" className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 transition hover:text-cyan-200" onClick={() => setShowConfirmPassword((value) => !value)}>
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        }
      />
      {message ? <p className="rounded-2xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{message}</p> : null}
      <Button type="submit" variant="auth" className="w-full py-3.5 uppercase tracking-[0.2em]" disabled={isLoading}>
        {isLoading ? 'Signup...' : 'Signup'}
      </Button>
      <p className="text-center text-sm text-slate-400">
        Existing operator?{' '}
        <Link to="/login" className="font-semibold text-cyan-300 transition hover:text-cyan-200">
          Login
        </Link>
      </p>
    </form>
  )
}

export default SignupForm
