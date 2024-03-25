export class TableController {
  constructor ({ tableModel }) {
    this.tableModel = tableModel
  }

  getAll = async (req, res) => {
    const tables = await this.tableModel.getAll()
    if (tables.err) return res.status(404).json({ message: 'There was an error getting the tables', error: tables.err })
    if (tables && tables.rows.length > 0) return res.status(200).json(tables.rows)
    return res.status(404).json({ message: 'No tables found' })
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const tables = await this.tableModel.getByUserId({ userId })
    if (tables.err) return res.status(404).json({ message: 'There was an error getting the tables', error: tables.err })
    if (tables && tables.rows.length > 0) return res.status(200).json(tables.rows)
    return res.status(404).json({ message: 'No tables found' })
  }

  getByTableId = async (req, res) => {
    const { tableId } = req.params
    const table = await this.tableModel.getByTableId({ tableId })
    if (table.err) return res.status(404).json({ message: 'There was an error getting the table', error: table.err })
    if (table && table.rows.length > 0) return res.status(200).json(table.rows[0])
    return res.status(404).json({ message: 'Table not found' })
  }

  create = async (req, res) => {
    const { userId } = req.body
    const newTable = await this.tableModel.create({ userId })
    if (newTable.err) return res.status(400).json({ message: 'There was an error creating the table' })
    if (newTable && newTable.rows.length > 0) return res.status(200).json(newTable.rows[0])
  }

  updateTableTitle = async (req, res) => {
    const { tableId } = req.params
    const { title } = req.body
    const updatedTable = await this.tableModel.updateTableTitle({ tableId, title })

    if (updatedTable.err) return res.status(400).json({ error: updatedTable.err })
    if (updatedTable && updatedTable.rowsAffected === 1) return res.status(200).json({ updatedTitle: title })
    return res.status(400).json({ message: 'There was an error updating the table' })
  }

  delete = async (req, res) => {
    const { tableId } = req.params
    const { tableToDelete } = await this.tableModel.delete({ tableId })
    if (tableToDelete.err) return res.status(400).json({ error: tableToDelete.err })
    if (tableToDelete && tableToDelete.rowsAffected === 1) return res.status(200).json({ message: 'Table deleted successfully' })
    return res.status(404).json({ message: 'Table not found' })
  }
}
