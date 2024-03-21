import { client } from '../config/SQLite/connection.js'

export class TableModel {
  static async getAll () {
    const tables = await client.execute({
      sql: 'SELECT id, title, BIN_TO_UUID(user_id) user_id FROM tables;'
    })

    return tables
  }

  static async getByUserId ({ userId }) {
    const tables = await client.execute({
      sql: 'SELECT id, title, BIN_TO_UUID(user_id) user_id FROM tables WHERE BIN_TO_UUID(user_id) = ?;',
      args: [userId]
    })

    return tables
  }

  static async getByTableId ({ tableId }) {
    const table = await client.execute({
      sql: 'SELECT id, title FROM tables WHERE id = ?',
      args: [tableId]
    })

    return table
  }

  static async create ({ userId }) {
    const newTable = await client.execute({
      sql: 'INSERT INTO tables (title, user_id) VALUES (?, UUID_TO_BIN(?));',
      args: ['Untitled', userId]
    })

    return newTable
  }

  static async updateTableTitle ({ tableId, title }) {
    const updatedTable = await client.execute({
      sql: 'UPDATE tables SET title = ? WHERE id = ?;',
      args: [title, tableId]
    })

    return updatedTable
  }

  static async delete ({ tableId }) {
    const rowsToDelete = await client.execute({
      sql: 'DELETE FROM table_rows WHERE table_id = ?;',
      args: [tableId]
    })

    const tableToDelete = await client.execute({
      sql: 'DELETE FROM tables WHERE id = ?;',
      args: [tableId]
    })

    return { rowsToDelete, tableToDelete }
  }
}
