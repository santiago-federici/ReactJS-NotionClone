import { useContext, useEffect } from 'react'

import { AuthContext } from '../../context/auth.jsx'
import { Header } from './Header/Header.jsx'
import { Main } from './Main.jsx'
import { useNavigate } from 'react-router-dom'

export function Landing () {
  const { currentUser } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) navigate('/dashboard')
  }, [])

  return (
    currentUser && currentUser
      ? <></>
      : <>
      <Header />

      <Main />
    </>

  )
}
