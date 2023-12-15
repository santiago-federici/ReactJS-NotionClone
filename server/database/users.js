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
}

export class PageModel {
  static async getAll () {
    const [pages] = await connection.query(
      'SELECT id, title, parent_page_id, BIN_TO_UUID(user_id) user_id FROM pages;'
    )

    return pages
  }
}
