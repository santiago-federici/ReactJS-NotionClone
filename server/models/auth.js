import { connection } from './connection.js'

export class AuthModel {
  static async register ({ input }) {
    const { username, email, password } = input

    try {
      await connection.query(
        'INSERT INTO users (username, email, user_password) VALUES (?, ?, ?)',
        [username, email, password]
      )
    } catch (error) {
      if (error && error.code === 'ER_DUP_ENTRY') {
        return { error: 'Email is already in use. Try another one.' }
      }

      return { error: 'Error registering the user' }
    }

    const [user] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, username, email, user_password FROM users WHERE email = ? AND user_password = ?;',
      [email, password]
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
