import { Router } from 'express'

import { TableController } from '../controllers/tables.js'

export const createTablesRouter = () => {
  const tablesRouter = Router()

  const tableController = new TableController()

  tablesRouter.get('/', tableController.getAll)
  tablesRouter.post('/', tableController.create)

  //   tablesRouter.get('/:userId', tableController.getByUserId)
  //   tablesRouter.get('/findTable/:tableId', tableController.getByTableId)
  //   tablesRouter.get('/rows/:tableId', tableController.getRowsByTableId)
  //   tablesRouter.delete('/:tableId', tableController.delete)

  return tablesRouter
}
