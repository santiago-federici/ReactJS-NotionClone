import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'admin',
  database: 'notionclone_db'
}

export const connection = await mysql.createConnection(config)
