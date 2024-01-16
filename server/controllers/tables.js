import { Table, Row } from '../models/associations.js'

export class TableController {
  getAll = async (req, res) => {
    const tables = await Table.findAll({ include: Row })
    res.status(200).json(tables)
  }

  create = async (req, res) => {
    const { userId } = req.body
    const newTable = await Table.create({ userId })
    if (newTable) return res.json(newTable)
    res.status(400).json({ message: 'There was an error creating the table' })
  }
}

//   getByUserId = async (req, res) => {
//     const { userId } = req.params
//     const tables = await this.tableModel.getByUserId({ userId })
//     if (tables.length > 0) return res.json(tables)
//     res.status(404).json({ message: 'Tables not found' })
//   }

//   getByTableId = async (req, res) => {
//     const { tableId } = req.params
//     const table = await this.tableModel.getByTableId({ tableId })
//     if (table) return res.json(table)
//     res.status(404).json({ message: 'Table not found' })
//   }

//   getRowsByTableId = async (req, res) => {
//     const { tableId } = req.params
//     const tables = await this.tableModel.getRowsByTableId({ tableId })
//     if (tables.length > 0) return res.json(tables)
//     res.status(404).json({ message: 'No rows found for this table' })
//   }

//   delete = async (req, res) => {
//     const { tableId } = req.params
//     const tableToDelete = await this.tableModel.delete({ tableId })
//     if (tableToDelete) return res.json(tableToDelete)
//     res.status(404).json({ message: 'Table not found' })
//   }
