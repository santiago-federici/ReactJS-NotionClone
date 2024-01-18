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

  static async getRowsByTableId ({ tableId }) {
    const [tables] = await connection.query(
      'SELECT id, main_content, description, status, priority, due FROM table_rows where table_id = ?',
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

  static async createRow ({ tableId }) {
    const [newRow] = await connection.query(
      'INSERT INTO table_rows (status, priority, table_id) VALUES (?, ?, ?);',
      ['To Do', 'Low', tableId]
    )

    return newRow
  }

  static async updateStatusRow ({ status, rowId }) {
    const [updatedRow] = await connection.query(
      'UPDATE table_rows SET status = ? WHERE id = ?;',
      [status, rowId]
    )

    return updatedRow
  }

  static async updatePriorityRow ({ priority, rowId }) {
    const [updatedRow] = await connection.query(
      'UPDATE table_rows SET priority = ? WHERE id = ?;',
      [priority, rowId]
    )

    return updatedRow
  }

  static async updateMainContentRow ({ mainContent, rowId }) {
    const [updatedRow] = await connection.query(
      'UPDATE table_rows SET main_content = ? WHERE id = ?;',
      [mainContent, rowId]
    )

    return updatedRow
  }
}
