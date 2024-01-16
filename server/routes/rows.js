import { Router } from 'express'

import { RowController } from '../controllers/rows.js'

export const createRowsRouter = () => {
  const rowsRouter = Router()

  const rowController = new RowController()

  rowsRouter.get('/', rowController.getAll)
  rowsRouter.post('/', rowController.create)

  return rowsRouter
}
