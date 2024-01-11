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

      setError(null)
      if (!data.message) {
        setCurrentUser(data)
        setError(null)
      } else {
        setCurrentUser(null)
        setError(data.message)
      }
    } catch (err) {
      setCurrentUser(null)
      setError('An error ocurred during login')
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
