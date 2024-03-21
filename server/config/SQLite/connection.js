import dotenv from 'dotenv'
import { createClient } from '@libsql/client'

dotenv.config()

export const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN
})
