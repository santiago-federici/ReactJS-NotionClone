import { client } from '../config/SQLite/connection.js'

export class UserModel {
  static async getAll () {
    const users = await client.execute({
      sql: 'SELECT id, username, email FROM users;'
    })

    return users
  }

  static async getById ({ id }) {
    const user = await client.execute({
      sql: 'SELECT id, username, email, user_password FROM users WHERE id = (?);',
      args: [id]
    })

    return user
  }
}
