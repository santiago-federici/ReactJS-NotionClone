import { Router } from 'express'

import { UserController } from '../controllers/users.js'

export const createUsersRouter = ({ userModel }) => {
  const usersRouter = Router()

  const userController = new UserController({ userModel })

  usersRouter.get('/', userController.getAll)
  usersRouter.get('/:id', userController.getById)

  return usersRouter
}
