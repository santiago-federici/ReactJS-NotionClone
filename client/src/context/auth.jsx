import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState()
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = async ({ email, password }) => {
    try {
      const res = await fetch('http://localhost:3000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include'
        })

      const data = await res.json()

      if (res.ok) {
        setCurrentUser(data)
        setError(null)
      } else {
        setError('No user found. Check your email or password.')
        setCurrentUser(null)
      }
    } catch (err) {
      setError('An error occurred during login: ', err)
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ error, currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
