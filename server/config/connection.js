import mysql from 'mysql2/promise'

const DB_HOST = process.env.DB_HOST ?? 'localhost'
const DB_USER = process.env.DB_USER ?? 'root'
const DB_PORT = process.env.DB_PORT ?? 3306
const DB_PASSWORD = process.env.DB_PASSWORD ?? 'admin'
const DB_NAME = process.env.DB_NAME ?? 'notionclone_db'

const config = {
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME
}

export const connection = await mysql.createConnection(config)
