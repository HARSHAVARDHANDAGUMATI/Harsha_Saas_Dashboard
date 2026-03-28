/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
import { forgotPasswordRequest, loginRequest, signupRequest } from '../services/authService'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('pulse-user', null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (credentials) => {
    setIsLoading(true)
    try {
      const nextUser = await loginRequest(credentials)
      setUser(nextUser)
      return nextUser
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (payload) => {
    setIsLoading(true)
    try {
      const nextUser = await signupRequest(payload)
      setUser(nextUser)
      return nextUser
    } finally {
      setIsLoading(false)
    }
  }

  const forgotPassword = async (email) => {
    setIsLoading(true)
    try {
      return await forgotPasswordRequest(email)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        signup,
        logout: () => setUser(null),
        forgotPassword,
        updateProfile: (payload) => setUser((current) => ({ ...current, ...payload })),
        updatePassword: async () => ({ success: true }),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
