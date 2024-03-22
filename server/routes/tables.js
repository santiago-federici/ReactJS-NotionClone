import { Router } from 'express'

import { TableController } from '../controllers/SQLite/tables.js' // <-- Change folder between MySQL and SQLite as needed

export const createTablesRouter = ({ tableModel }) => {
  const tablesRouter = Router()

  const tableController = new TableController({ tableModel })

  tablesRouter.get('/', tableController.getAll)
  tablesRouter.get('/:userId', tableController.getByUserId)
  tablesRouter.get('/findTable/:tableId', tableController.getByTableId)

  tablesRouter.post('/', tableController.create)

  tablesRouter.patch('/title/:tableId', tableController.updateTableTitle)

  tablesRouter.delete('/:tableId', tableController.delete)

  return tablesRouter
}
