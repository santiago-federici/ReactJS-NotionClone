import { client } from '../../config/SQLite/connection.js'

export class TableModel {
  static async getAll () {
    try {
      const tables = await client.execute({
        sql: 'SELECT id, title, user_id FROM tables;',
        args: []
      })

      return tables
    } catch (err) {
      return { err: 'Error getting the tables', error: err }
    }
  }

  static async getByUserId ({ userId }) {
    try {
      const tables = await client.execute({
        sql: 'SELECT id, title, user_id FROM tables WHERE user_id = ?;',
        args: [userId]
      })

      return tables
    } catch (err) {
      return { err: 'Error getting the tables', error: err }
    }
  }

  static async getByTableId ({ tableId }) {
    try {
      const table = await client.execute({
        sql: 'SELECT id, title FROM tables WHERE id = ?',
        args: [tableId]
      })

      return table
    } catch (err) {
      return { err: 'Error getting the table', error: err }
    }
  }

  static async create ({ userId }) {
    try {
      const newTable = await client.execute({
        sql: 'INSERT INTO tables (title, user_id) VALUES (?, ?);',
        args: ['Untitled', userId]
      })

      const createdTable = await client.execute({
        sql: 'SELECT id, title FROM tables WHERE id = ?;',
        args: [newTable.lastInsertRowid]
      })

      return createdTable
    } catch (err) {
      return { err: 'Error creating the table', error: err }
    }
  }

  static async updateTableTitle ({ tableId, title }) {
    try {
      const updatedTable = await client.execute({
        sql: 'UPDATE tables SET title = ? WHERE id = ?;',
        args: [title, tableId]
      })

      return updatedTable
    } catch (err) {
      return { err: 'Error updating the table', error: err }
    }
  }

  static async delete ({ tableId }) {
    try {
      const rowsToDelete = await client.execute({
        sql: 'DELETE FROM table_rows WHERE table_id = ?;',
        args: [tableId]
      })

      const tableToDelete = await client.execute({
        sql: 'DELETE FROM tables WHERE id = ?;',
        args: [tableId]
      })

      return { rowsToDelete, tableToDelete }
    } catch (err) {
      return { err: 'Error deleting the table', error: err }
    }
  }
}
