import { connection } from '../config/connection.js'

export class TableModel {
  static async getAll () {
    const [tables] = await connection.query(
      'SELECT id, title, BIN_TO_UUID(user_id) user_id FROM tables;'
    )

    return tables
  }

  static async getByUserId ({ userId }) {
    const [tables] = await connection.query(
      'SELECT id, title, BIN_TO_UUID(user_id) user_id FROM tables WHERE BIN_TO_UUID(user_id) = ?;',
      [userId]
    )

    return tables
  }

  static async getByTableId ({ tableId }) {
    const [table] = await connection.query(
      'SELECT id, title FROM tables WHERE id = ?',
      [tableId]
    )

    return table
  }

  static async create ({ userId }) {
    const [newTable] = await connection.query(
      'INSERT INTO tables (title, user_id) VALUES (?, UUID_TO_BIN(?));',
      ['Untitled', userId]
    )

    return newTable
  }

  static async updateTableTitle ({ tableId, title }) {
    const [updatedTable] = await connection.query(
      'UPDATE tables SET title = ? WHERE id = ?;',
      [title, tableId]
    )

    return updatedTable
  }

  static async delete ({ tableId }) {
    const [rowsToDelete] = await connection.query(
      'DELETE FROM table_rows WHERE table_id = ?;',
      [tableId]
    )

    const [tableToDelete] = await connection.query(
      'DELETE FROM tables WHERE id = ?;',
      [tableId]
    )

    return { rowsToDelete, tableToDelete }
  }
}
