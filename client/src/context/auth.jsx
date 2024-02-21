import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState()
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const baseURL = 'https://notionclone-server.vercel.app/auth/'

  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${baseURL}login`,
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

  const register = async ({ email, username, password }) => {
    try {
      const res = await fetch(`${baseURL}register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, username, password }),
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
      setError('An error ocurred during register')
    }
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ error, currentUser, setCurrentUser, login, register }}>
      {children}
    </AuthContext.Provider>
  )
}
