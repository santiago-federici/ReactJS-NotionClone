import { Row } from '../models/associations.js'

export class RowController {
  getAll = async (req, res) => {
    const rows = await Row.findAll()
    if (rows.length > 0) return res.status(200).json(rows)
    return res.status(404).json({ message: 'No rows found' })
  }

  create = async (req, res) => {
    const { tableId, mainContent, rowDescription, rowStatus, rowPriority, rowDue } = req.body
    const newRow = await Row.create({ tableId, mainContent, rowDescription, rowStatus, rowPriority, rowDue })
    console.log('--------------------------------newRow from controller: ', newRow)
    if (newRow) return res.json(newRow)
    return res.status(400).json({ message: 'There was an error creating the row' })
  }
}
