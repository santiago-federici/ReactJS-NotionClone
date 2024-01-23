import { Router } from 'express'
import { RowController } from '../controllers/rows.js'

export const createRowsRouter = ({ rowModel }) => {
  const rowsRouter = Router()

  const rowController = new RowController({ rowModel })

  rowsRouter.get('/:tableId', rowController.getRowsByTableId)
  rowsRouter.post('/', rowController.createRow)
  rowsRouter.patch('/status/:rowId', rowController.updateStatusRow)
  rowsRouter.patch('/priority/:rowId', rowController.updatePriorityRow)
  rowsRouter.patch('/mainContent/:rowId', rowController.updateMainContentRow)
  rowsRouter.patch('/description/:rowId', rowController.updateDescriptionRow)
  rowsRouter.patch('/due/:rowId', rowController.updateDueRow)
  rowsRouter.delete('/:rowId', rowController.deleteRow)

  return rowsRouter
}
