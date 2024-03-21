import { connection } from '../config/MySQL/connection.js'

export class RowModel {
  static async getRowsByTableId ({ tableId }) {
    const [rows] = await connection.query(
      'SELECT id, main_content, description, status, priority, due FROM table_rows where table_id = ?',
      [tableId]
    )

    return rows
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

  static async updateDescriptionRow ({ description, rowId }) {
    const [updatedRow] = await connection.query(
      'UPDATE table_rows SET description = ? WHERE id = ?;',
      [description, rowId]
    )

    return updatedRow
  }

  static async updateDueRow ({ due, rowId }) {
    const [updatedRow] = await connection.query(
      'UPDATE table_rows SET due = ? WHERE id = ?;',
      [due, rowId]
    )

    return updatedRow
  }

  static async deleteRow ({ rowId }) {
    const [rowToDelete] = await connection.query(
      'DELETE FROM table_rows WHERE id = ?;',
      [rowId]
    )

    return rowToDelete
  }
}
