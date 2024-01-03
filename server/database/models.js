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

  static async loginByUsername ({ username, password }) {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email, user_password FROM users WHERE username = ? AND user_password = ?;',
      [username, password]
    )

    return users
  }
}

export class PageModel {
  static async getAll () {
    const [pages] = await connection.query(
      'SELECT id, title, parent_page_id, BIN_TO_UUID(user_id) user_id FROM pages;'
    )

    return pages
  }

  static async getByUserId ({ userId }) {
    const [pages] = await connection.query(
      'SELECT id, title, parent_page_id, icon FROM pages WHERE user_id = UUID_TO_BIN(?);',
      [userId]
    )

    console.log(pages)

    if (pages.length === 0) return null

    return pages
  }
}
