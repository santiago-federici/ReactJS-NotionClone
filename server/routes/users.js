import { Router } from 'express'

import { UserController } from '../controllers/SQLite/users.js' // <-- Change folder between MySQL and SQLite as needed

export const createUsersRouter = ({ userModel }) => {
  const usersRouter = Router()

  const userController = new UserController({ userModel })

  usersRouter.get('/', userController.getAll)
  usersRouter.get('/:id', userController.getById)

  return usersRouter
}
