import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.jsx'

import { NotionCompleteLogo } from '../../components/Icons.jsx'

import './Auth.css'

export function Auth () {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [userPassword, setUserPassword] = useState()
  const [authAttempted, setAuthAttempted] = useState(false)

  const navigate = useNavigate()

  const { error, currentUser, login, register } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser && currentUser.id) navigate('/dashboard')
  }, [authAttempted])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isLoginForm) {
        await login({ email, password: userPassword })
      } else {
        await register({ email, username, password: userPassword })
      }

      if (currentUser !== null && currentUser !== undefined) {
        navigate('/userdefaultpage')
      }

      setAuthAttempted(!authAttempted)
    } catch (err) {
      console.log('catch from login', err)
    }
  }

  return (
    !currentUser
      ? <main className='auth-main'>

        <NotionCompleteLogo />

        <form className='auth-form'>

          <h2>{isLoginForm ? 'Log in' : 'Register'}</h2>

          <label>
            Email
            <input type="text" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)} />
          </label>

          {
            isLoginForm
              ? <></>
              : <label>
                  Username
                  <input type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
                </label>
          }

          <label>
            Password
            <input type="password" placeholder="Enter your password..." onChange={(e) => setUserPassword(e.target.value)} />
          </label>

          <span className='submit-auth-btn' onClick={(e) => handleSubmit(e)}>{isLoginForm ? 'Login' : 'Register'}</span>

          <p className='incorrect-user'>{error && error}</p>

        </form>

        <p className='login-to-register-btn'>{isLoginForm ? 'Don`t have an account yet?' : 'Already have an account'} <span onClick={() => setIsLoginForm(!isLoginForm)}>{isLoginForm ? 'Register' : 'Login'} here.</span></p>
      </main>
      : <></>
  )
}
