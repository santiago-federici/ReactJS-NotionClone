import { useContext, useEffect } from 'react'
import { AsideMenu } from '../../AsideMenu'
import { UntitledTable } from '../../UntitledTable'
import './UserDefaultPage.css'
import { AuthContext } from '../../../context/auth'
import { useNavigate } from 'react-router-dom'

export function UserDefaultPage () {
  const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [])

  return (
    currentUser && currentUser
      ? <main className="user-main">
      <AsideMenu />
      <UntitledTable />
    </main>
      : <></>
  )
}
