import { Router } from 'express'

import { TableController } from '../controllers/tables.js'

export const createTablesRouter = ({ tableModel }) => {
  const tablesRouter = Router()

  const tableController = new TableController({ tableModel })

  tablesRouter.get('/', tableController.getAll)
  tablesRouter.get('/:userId', tableController.getByUserId)
  tablesRouter.post('/', tableController.create)
  tablesRouter.delete('/:tableId', tableController.delete)

  return tablesRouter
}
