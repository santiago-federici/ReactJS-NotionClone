import { connection } from './connection.js'

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

  static async getRowsByTableId ({ tableId }) {
    const [tables] = await connection.query(
      'SELECT id, row_main_content, row_description FROM table_rows where table_id = ?',
      [tableId]
    )

    return tables
  }

  static async create ({ userId }) {
    const [newTable] = await connection.query(
      'INSERT INTO tables (title, user_id) VALUES (?, UUID_TO_BIN(?));',
      ['Untitled', userId]
    )

    return newTable
  }

  static async delete ({ tableId }) {
    const [tableToDelete] = await connection.query(
      'DELETE FROM tables WHERE id = ?;',
      [tableId]
    )

    return tableToDelete
  }
}
