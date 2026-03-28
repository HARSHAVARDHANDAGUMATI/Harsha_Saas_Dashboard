import { Link } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './FormInput'
import Button from '../common/Button'
import useAuth from '../../hooks/useAuth'
import { validateEmail } from '../../utils/Validators'

function ForgotPasswordForm() {
  const { forgotPassword, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validateEmail(email)) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    await forgotPassword(email)
    setMessage('Password reset link sent successfully.')
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput label="Email" type="email" value={email} error={error} onChange={(event) => setEmail(event.target.value)} />
      {message ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-600 dark:bg-emerald-500/10">{message}</p> : null}
      <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? 'Sending link...' : 'Send reset link'}</Button>
      <Link to="/login" className="block text-sm text-muted hover:text-cyan-600">Back to login</Link>
    </form>
  )
}

export default ForgotPasswordForm
