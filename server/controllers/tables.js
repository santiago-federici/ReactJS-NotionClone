export class TableController {
  constructor ({ tableModel }) {
    this.tableModel = tableModel
  }

  getAll = async (req, res) => {
    const table = await this.tableModel.getAll()
    res.json(table)
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const tables = await this.tableModel.getByUserId({ userId })
    if (tables.length > 0) return res.json(tables)
    res.status(404).json({ message: 'Tables not found' })
  }

  getByTableId = async (req, res) => {
    const { tableId } = req.params
    const table = await this.tableModel.getByTableId({ tableId })
    if (table) return res.json(table)
    res.status(404).json({ message: 'Table not found' })
  }

  getRowsByTableId = async (req, res) => {
    const { tableId } = req.params
    const tables = await this.tableModel.getRowsByTableId({ tableId })
    if (tables.length > 0) return res.json(tables)
    res.status(404).json({ message: 'No rows found for this table' })
  }

  create = async (req, res) => {
    const { userId } = req.body
    const newTable = await this.tableModel.create({ userId })
    if (newTable) return res.json(newTable)
    res.status(400).json({ message: 'There was an error creating the table' })
  }

  updateTableTitle = async (req, res) => {
    const { tableId } = req.params
    const { title } = req.body
    const updatedTable = await this.tableModel.updateTableTitle({ tableId, title })
    if (updatedTable) return res.json(updatedTable)
    return res.status(400).json({ message: 'There was an error updating the table' })
  }

  delete = async (req, res) => {
    const { tableId } = req.params
    const tableToDelete = await this.tableModel.delete({ tableId })
    if (tableToDelete) return res.json(tableToDelete)
    res.status(404).json({ message: 'Table not found' })
  }

  createRow = async (req, res) => {
    const { tableId } = req.body
    const newRow = await this.tableModel.createRow({ tableId })
    if (newRow) return res.json(newRow)
    return res.status(400).json({ message: 'There was an error creating the row' })
  }

  updateStatusRow = async (req, res) => {
    const { status } = req.body
    const { rowId } = req.params
    const updatedRow = await this.tableModel.updateStatusRow({ status, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updatePriorityRow = async (req, res) => {
    const { priority } = req.body
    const { rowId } = req.params
    const updatedRow = await this.tableModel.updatePriorityRow({ priority, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }

  updateMainContentRow = async (req, res) => {
    const { mainContent } = req.body
    const { rowId } = req.params
    const updatedRow = await this.tableModel.updateMainContentRow({ mainContent, rowId })
    if (updatedRow) return res.json(updatedRow)
    return res.status(400).json({ message: 'There was an error updating the row' })
  }
}
