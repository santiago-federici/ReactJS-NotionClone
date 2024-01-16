import express, { json } from 'express'
import cookieParser from 'cookie-parser'

import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createAuthRouter } from './routes/auth.js'
import { createTablesRouter } from './routes/tables.js'
import { createRowsRouter } from './routes/rows.js'

export const createApp = () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    next()
  })
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  app.use(cookieParser())

  app.use('/users', createUsersRouter())
  app.use('/auth', createAuthRouter())
  app.use('/tables', createTablesRouter())
  app.use('/rows', createRowsRouter())

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
  })
}
