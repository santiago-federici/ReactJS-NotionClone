import { useNavigate } from 'react-router-dom'
import { logout } from '../services/auth'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'

export function useAuth () {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useContext(AuthContext)

  const logoutUser = () => {
    logout()
      .then(data => {
        if (data.message) {
          setCurrentUser(null)
          navigate('/')
        }
      })
      .catch(err => console.log('err from hook: ', err))
  }

  return { currentUser, logoutUser }
}
