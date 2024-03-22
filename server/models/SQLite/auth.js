import { client } from '../../config/SQLite/connection.js'

export class AuthModel {
  static async register ({ username, email, password }) {
    try {
      await client.execute({
        sql: 'INSERT INTO users (username, email, user_password) VALUES (?, ?, ?)',
        args: [username, email, password]
      })

      const user = await client.execute({
        sql: 'SELECT id, username, email, user_password FROM users WHERE email = ? AND user_password = ?;',
        args: [email, password]
      })

      return user
    } catch (err) {
      if (err && err.code === 'SQLITE_CONSTRAINT') {
        return { err: 'Email is already in use. Try another one.' }
      }

      return { err: 'Error registering the user', error: err }
    }
  }

  static async loginByEmail ({ email }) {
    try {
      const users = await client.execute({
        sql: 'SELECT id, username, email, user_password FROM users WHERE email = ?;',
        args: [email]
      })

      return users
    } catch (err) {
      console.error(err)
      return { err: 'Error logging in the user', error: err }
    }
  }
}
