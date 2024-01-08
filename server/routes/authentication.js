import { Router } from 'express'
import { AuthenticationController } from '../controllers/authentication.js'

export const createAuthenticationRouter = ({ authenticationModel }) => {
  const authenticationRouter = Router()

  const authenticationController = new AuthenticationController({ authenticationModel })

  authenticationRouter.post('/login', authenticationController.loginByEmail)

  return authenticationRouter
}
