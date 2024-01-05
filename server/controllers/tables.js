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
    res.status(404).json({ message: 'Table not found' })
  }

  create = async (req, res) => {
    const { userId } = req.body
    const newTable = await this.tableModel.create({ userId })
    console.log(newTable)
    if (newTable) return res.json(newTable)
    res.status(400).json({ message: 'There was an error creating the table' })
  }
}
