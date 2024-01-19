import { Router } from 'express'

import { TableController } from '../controllers/tables.js'

export const createTablesRouter = ({ tableModel }) => {
  const tablesRouter = Router()

  const tableController = new TableController({ tableModel })

  tablesRouter.get('/', tableController.getAll)
  tablesRouter.get('/findTable/:tableId', tableController.getByTableId)
  tablesRouter.post('/', tableController.create)
  tablesRouter.patch('/title/:tableId', tableController.updateTableTitle)
  tablesRouter.delete('/:tableId', tableController.delete)

  tablesRouter.get('/:userId', tableController.getByUserId)

  tablesRouter.get('/rows/:tableId', tableController.getRowsByTableId)
  tablesRouter.post('/rows', tableController.createRow)
  tablesRouter.patch('/rows/status/:rowId', tableController.updateStatusRow)
  tablesRouter.patch('/rows/priority/:rowId', tableController.updatePriorityRow)
  tablesRouter.patch('/rows/mainContent/:rowId', tableController.updateMainContentRow)

  return tablesRouter
}
