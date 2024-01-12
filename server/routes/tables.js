import { Router } from 'express'

import { TableController } from '../controllers/tables.js'

export const createTablesRouter = ({ tableModel }) => {
  const tablesRouter = Router()

  const tableController = new TableController({ tableModel })

  tablesRouter.get('/', tableController.getAll)
  tablesRouter.get('/:userId', tableController.getByUserId)
  tablesRouter.get('/findTable/:tableId', tableController.getByTableId)
  tablesRouter.get('/rows/:tableId', tableController.getRowsByTableId)
  tablesRouter.post('/', tableController.create)
  tablesRouter.delete('/:tableId', tableController.delete)

  return tablesRouter
}
