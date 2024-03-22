import { client } from '../../config/SQLite/connection.js'

export class UserModel {
  static async getAll () {
    try {
      const users = await client.execute({
        sql: 'SELECT id, username, email FROM users;',
        args: []
      })

      console.log('users from model: ', users)

      return users
    } catch (err) {
      console.error('error from model: ', err)
      return { err: 'Error getting the users', error: err }
    }
  }

  static async getById ({ id }) {
    try {
      const user = await client.execute({
        sql: 'SELECT id, username, email, user_password FROM users WHERE id = (?);',
        args: [id]
      })

      return user
    } catch (err) {
      return { err: 'Error getting the user', error: err }
    }
  }
}
