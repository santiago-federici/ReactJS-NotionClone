import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NotionCompleteLogo } from '../Icons'

import './Login.css'

export function Login ({ setUserId }) {
  const [email, setEmail] = useState()
  const [userPassword, setUserPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password: userPassword })
      })
      .then(res => res.json())
      .then(data => {
        const message = document.querySelector('.incorrect-user')
        if (data.length > 0) {
          setUserId(data[0].id)
          message.style.display = 'none'
          navigate('/userdefaultpage')
        } else {
          message.style.display = 'block'
        }
      })
      .catch(err => console.log(err))
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

        <p className='incorrect-user'>Incorrect user or password. Try again.</p>
      </form>
    </main>
  )
}
