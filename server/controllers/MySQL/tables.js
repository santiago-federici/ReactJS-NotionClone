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
}
