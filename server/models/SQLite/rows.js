import { client } from '../../config/SQLite/connection.js'

export class RowModel {
  static async getRowsByTableId ({ tableId }) {
    try {
      const rows = await client.execute({
        sql: 'SELECT id, main_content, description, status, priority, due FROM table_rows where table_id = ?',
        args: [tableId]
      })

      return rows
    } catch (err) {
      return { err: 'Error getting the rows', error: err }
    }
  }

  static async createRow ({ tableId }) {
    try {
      const newRow = await client.execute({
        sql: 'INSERT INTO table_rows (status, priority, table_id) VALUES (?, ?, ?);',
        args: ['To Do', 'Low', tableId]
      })

      return newRow
    } catch (err) {
      return { err: 'Error creating the row', error: err }
    }
  }

  static async updateStatusRow ({ status, rowId }) {
    try {
      const updatedRow = await client.execute({
        sql: 'UPDATE table_rows SET status = ? WHERE id = ?;',
        args: [status, rowId]
      })

      return updatedRow
    } catch (err) {
      return { err: 'Error updating the row', error: err }
    }
  }

  static async updatePriorityRow ({ priority, rowId }) {
    try {
      const updatedRow = await client.execute({
        sql: 'UPDATE table_rows SET priority = ? WHERE id = ?;',
        args: [priority, rowId]
      })

      return updatedRow
    } catch (err) {
      return { err: 'Error updating the row', error: err }
    }
  }

  static async updateMainContentRow ({ mainContent, rowId }) {
    try {
      const updatedRow = await client.execute({
        sql: 'UPDATE table_rows SET main_content = ? WHERE id = ?;',
        args: [mainContent, rowId]
      })

      return updatedRow
    } catch (err) {
      return { err: 'Error updating the row', error: err }
    }
  }

  static async updateDescriptionRow ({ description, rowId }) {
    try {
      const updatedRow = await client.execute({
        sql: 'UPDATE table_rows SET description = ? WHERE id = ?;',
        args: [description, rowId]
      })

      return updatedRow
    } catch (err) {
      return { err: 'Error updating the row', error: err }
    }
  }

  static async updateDueRow ({ due, rowId }) {
    try {
      const updatedRow = await client.execute({
        sql: 'UPDATE table_rows SET due = ? WHERE id = ?;',
        args: [due, rowId]
      })

      return updatedRow
    } catch (err) {
      return { err: 'Error updating the row', error: err }
    }
  }

  static async deleteRow ({ rowId }) {
    try {
      const rowToDelete = await client.execute({
        sql: 'DELETE FROM table_rows WHERE id = ?;',
        args: [rowId]
      })

      return rowToDelete
    } catch (err) {
      return { err: 'Error deleting the row', error: err }
    }
  }
}
