import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'admin',
  database: 'notionclone_db'
}

const connection = await mysql.createConnection(config)

export class UserModel {
  static async getAll () {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email FROM users;'
    )

    return users
  }

  static async getById ({ id }) {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email, user_password FROM users WHERE id = UUID_TO_BIN(?);',
      [id]
    )

    return users
  }

  static async loginByEmail ({ email, password }) {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email, user_password FROM users WHERE email = ? AND user_password = ?;',
      [email, password]
    )

    return users
  }
}

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
