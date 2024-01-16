import { Router } from 'express'
import { AuthController } from '../controllers/auth.js'

export const createAuthRouter = () => {
  const authRouter = Router()

  const authController = new AuthController()

  authRouter.post('/register', authController.register)
  authRouter.post('/login', authController.login)
  authRouter.post('/logout', authController.logout)

  return authRouter
}
