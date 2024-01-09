import { connection } from './connection.js'

export class AuthModel {
  static async checkUserExistance ({ input }) {
    const { username, email } = input

    const [existsUser] = await connection.query(
      'SELECT username, email FROM users WHERE username = ? OR email = ?',
      [username, email]
    )

    return existsUser
  }

  static async register ({ input }) {
    const { username, email, password } = input

    const [user] = await connection.query(
      'INSERT INTO users (username, email, user_password) VALUES (?, ?, ?)',
      [username, email, password]
    )

    return user
  }

  static async loginByEmail ({ email, password }) {
    const [users] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email, user_password FROM users WHERE email = ? AND user_password = ?;',
      [email, password]
    )

    return users
  }
}
