import { Router } from 'express'
import { AuthController } from '../controllers/SQLite/auth.js' // <-- Change folder between MySQL and SQLite as needed

export const createAuthRouter = ({ authModel }) => {
  const authRouter = Router()

  const authController = new AuthController({ authModel })

  authRouter.post('/register', authController.register)
  authRouter.post('/login', authController.loginByEmail)
  authRouter.post('/logout', authController.logout)

  return authRouter
}
