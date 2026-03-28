const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/

export const validateEmail = (value) => emailRegex.test(value)
export const validateStrongPassword = (value) => strongPasswordRegex.test(value)

export const getPasswordChecks = (value) => ({
  length: value.length >= 8,
  uppercase: /[A-Z]/.test(value),
  lowercase: /[a-z]/.test(value),
  number: /\d/.test(value),
  special: /[^A-Za-z\d]/.test(value),
})

export const validateAuthForm = ({ name, email, password, confirmPassword }, mode = 'login') => {
  const errors = {}
  if (mode === 'signup' && !name?.trim()) errors.name = 'Name is required.'
  if (!validateEmail(email || '')) errors.email = 'Enter a valid email address.'
  if (mode !== 'forgot' && !validateStrongPassword(password || '')) {
    errors.password = 'Use 8+ chars with upper, lower, number and symbol.'
  }
  if (mode === 'signup' && password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.'
  }
  return errors
}
