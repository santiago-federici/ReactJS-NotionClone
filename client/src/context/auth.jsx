import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState()
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = async ({ email, password }) => {
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

    if (!data.message) {
      setCurrentUser(data)
      setError(null)
      console.log('data if !data.message: ', data)
      console.log('error if !data.message: ', error)
    } else {
      setCurrentUser(null)
      setError(data.message)
      console.log('error of data.message: ', error)
      console.log('data.message: ', data.message)
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
