import { connection } from '../config/connection.js'

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
}
