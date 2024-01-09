import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { NotionCompleteLogo } from '../Icons'

import './Login.css'

export function Register ({ setUserId }) {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [userPassword, setUserPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password: userPassword })
      })
      .then(res => res.json())
      .then(data => {
        console.log('data from register: ', data)
        // setUserId(data[0].id)
        // navigate('/userdefaultpage')
      })
      .catch(err => console.log(err))
  }

  return (
    <main className='login-main'>

      <NotionCompleteLogo />

      <form className='login-form'>
        <h2>Register</h2>

        <label>
          Email
          <input type="text" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Username
          <input type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password..." onChange={(e) => setUserPassword(e.target.value)} />
        </label>

        <span className='submit-login-btn' onClick={(e) => handleSubmit(e)}>Register</span>
      </form>

      <Link to='/login'>Already have an account? Login here.</Link>
    </main>
  )
}
