import { useEffect, useState } from 'react'
import { NotionCompleteLogo } from '../Icons'
import './Login.css'

export function Login () {
  const [username, setUsername] = useState()
  const [userPassword, setUserPassword] = useState()
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    console.log(username)
    console.log(userPassword)

    fetch(`http://localhost:3000/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          console.log('user not found')
        } else {
          for (let i = 0; i < data.length; i++) {
            if (data[i].user_password === userPassword) {
              console.log('correct')
              console.log('userEmail: ', data[i].email)
            } else {
              console.log('incorrect')
            }
          }
        }
      })
  }, [submit])

  return (
    <main className='login-main'>

      <NotionCompleteLogo />

      <form className='login-form'>
        <h2>Log in</h2>

        <label>
          Username
          <input type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password..." onChange={(e) => setUserPassword(e.target.value)} />
        </label>

        <span className='submit-login-btn' onClick={() => setSubmit(true)}>Login</span>
      </form>
    </main>
  )
}
