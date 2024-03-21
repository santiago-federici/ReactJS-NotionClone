export class TableController {
  constructor ({ tableModel }) {
    this.tableModel = tableModel
  }

  getAll = async (req, res) => {
    const table = await this.tableModel.getAll()
    if (table && table.rows.length > 0) return res.status(200).json(table)
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const tables = await this.tableModel.getByUserId({ userId })
    if (tables && tables.rows.length > 0) return res.status(200).json(tables)
    return res.status(404).json({ message: 'Tables not found' })
  }

  getByTableId = async (req, res) => {
    const { tableId } = req.params
    const table = await this.tableModel.getByTableId({ tableId })
    if (table && table.rows.length > 0) return res.status(200).json(table)
    return res.status(404).json({ message: 'Table not found' })
  }

  create = async (req, res) => {
    const { userId } = req.body
    const newTable = await this.tableModel.create({ userId })
    if (newTable && newTable.rows.length > 0) return res.status(200).json(newTable)
    return res.status(400).json({ message: 'There was an error creating the table' })
  }

  updateTableTitle = async (req, res) => {
    const { tableId } = req.params
    const { title } = req.body
    const updatedTable = await this.tableModel.updateTableTitle({ tableId, title })
    if (updatedTable && updatedTable.rows.length > 0) return res.status(200).json(updatedTable)
    return res.status(400).json({ message: 'There was an error updating the table' })
  }

  delete = async (req, res) => {
    const { tableId } = req.params
    const tableToDelete = await this.tableModel.delete({ tableId })
    if (tableToDelete && tableToDelete.rows.length > 0) return res.status(200).json(tableToDelete)
    return res.status(404).json({ message: 'Table not found' })
  }
}
