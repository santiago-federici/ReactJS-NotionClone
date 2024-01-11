import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

import { NotionCompleteLogo } from '../Icons'

import './Login.css'

export function Login () {
  const [email, setEmail] = useState()
  const [userPassword, setUserPassword] = useState()
  const navigate = useNavigate()

  const { error, currentUser, login } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password: userPassword })
      if (currentUser !== null && currentUser !== undefined) {
        navigate('/userdefaultpage')
      }
    } catch (err) {
      console.log('catch from login', err)
    }
  }

  return (
    <main className='login-main'>

      <NotionCompleteLogo />

      <form className='login-form'>
        <h2>Log in</h2>

        <label>
          Email
          <input type="text" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password..." onChange={(e) => setUserPassword(e.target.value)} />
        </label>

        <span className='submit-login-btn' onClick={(e) => handleSubmit(e)}>Login</span>

        <p className='incorrect-user'>{error && error}</p>

      </form>

      <Link to='/register'>Don`t have an account yet? Register here.</Link>
    </main>
  )
}
