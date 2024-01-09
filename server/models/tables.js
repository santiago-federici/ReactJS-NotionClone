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
