import { client } from '../../config/SQLite/connection.js'

export class AuthModel {
  static async register ({ username, email, password }) {
    try {
      await client.execute({
        sql: 'INSERT INTO users (username, email, user_password) VALUES (?, ?, ?)',
        args: [username, email, password]
      })
    } catch (err) {
      if (err && err.code === 'SQLITE_CONSTRAINT') {
        return { err: 'Email is already in use. Try another one.' }
      }

      return { err: 'Error registering the user', error: err }
    }

    const user = await client.execute({
      sql: 'SELECT id, username, email, user_password FROM users WHERE email = ? AND user_password = ?;',
      args: [email, password]
    })

    return user
  }

  static async loginByEmail ({ email }) {
    const users = await client.execute({
      sql: 'SELECT id, username, email, user_password FROM users WHERE email = ?;',
      args: [email]
    })

    return users
  }
}
