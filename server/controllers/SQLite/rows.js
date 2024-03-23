const checkUpdatedRow = (updatedRow, res) => {
  if (updatedRow.err) return res.status(400).json({ message: 'There was an error updating the row' })
  if (updatedRow && updatedRow.rowsAffected === 1) return res.status(200).json({ message: 'Row updated successfully' })
  return res.status(404).json({ message: 'Row not found' })
}

export class RowController {
  constructor ({ rowModel }) {
    this.rowModel = rowModel
  }

  getRowsByTableId = async (req, res) => {
    const { tableId } = req.params
    const rows = await this.rowModel.getRowsByTableId({ tableId })
    if (rows.err) return res.status(400).json({ message: 'There was an error getting the rows', error: rows.err })
    if (rows && rows.rows.length > 0) return res.status(200).json(rows.rows)
    return res.status(404).json({ message: 'No rows found for this table' })
  }

  createRow = async (req, res) => {
    const { tableId } = req.body
    const newRow = await this.rowModel.createRow({ tableId })
    if (newRow.err) return res.status(400).json({ message: 'There was an error creating the row', error: newRow.err })
    if (newRow.rowsAffected === 1) return res.status(200).json({ message: 'Row created successfully' })
  }

  updateStatusRow = async (req, res) => {
    const { status } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateStatusRow({ status, rowId })
    checkUpdatedRow(updatedRow, res)
  }

  updatePriorityRow = async (req, res) => {
    const { priority } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updatePriorityRow({ priority, rowId })
    checkUpdatedRow(updatedRow, res)
  }

  updateMainContentRow = async (req, res) => {
    const { mainContent } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateMainContentRow({ mainContent, rowId })
    checkUpdatedRow(updatedRow, res)
  }

  updateDescriptionRow = async (req, res) => {
    const { description } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateDescriptionRow({ description, rowId })
    checkUpdatedRow(updatedRow, res)
  }

  updateDueRow = async (req, res) => {
    const { due } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateDueRow({ due, rowId })
    checkUpdatedRow(updatedRow, res)
  }

  deleteRow = async (req, res) => {
    const { rowId } = req.params
    const rowToDelete = await this.rowModel.deleteRow({ rowId })
    if (rowToDelete.err) return res.status(400).json({ message: 'There was an error deleting the row', error: rowToDelete.err })
    if (rowToDelete.rowsAffected === 1) return res.json({ message: 'Row deleted successfully' })
    return res.status(404).json({ message: 'Error deleting the row. Row not found' })
  }
}
