export class RowController {
  constructor ({ rowModel }) {
    this.rowModel = rowModel
  }

  getRowsByTableId = async (req, res) => {
    const { tableId } = req.params
    const rows = await this.rowModel.getRowsByTableId({ tableId })
    if (rows.length > 0) return res.json(rows)
    res.status(404).json({ message: 'No rows found for this table' })
  }

  createRow = async (req, res) => {
    const { tableId } = req.body
    const newRow = await this.rowModel.createRow({ tableId })
    if (newRow) return res.json(newRow)
    return res.status(400).json({ message: 'There was an error creating the row' })
  }

  updateStatusRow = async (req, res) => {
    const { status } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateStatusRow({ status, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updatePriorityRow = async (req, res) => {
    const { priority } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updatePriorityRow({ priority, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updateMainContentRow = async (req, res) => {
    const { mainContent } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateMainContentRow({ mainContent, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updateDescriptionRow = async (req, res) => {
    const { description } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateDescriptionRow({ description, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updateDueRow = async (req, res) => {
    const { due } = req.body
    const { rowId } = req.params
    const updatedRow = await this.rowModel.updateDueRow({ due, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  deleteRow = async (req, res) => {
    const { rowId } = req.params
    const rowToDelete = await this.rowModel.deleteRow({ rowId })
    if (rowToDelete) return res.json(rowToDelete)
    res.status(404).json({ message: 'Row not found' })
  }
}
