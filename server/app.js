import express, { json } from 'express'
import cookieParser from 'cookie-parser'

import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createTablesRouter } from './routes/tables.js'
import { createAuthRouter } from './routes/auth.js'

export const createApp = ({ userModel, tableModel, authModel }) => {
  const app = express()

  app.use(cookieParser())
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/users', createUsersRouter({ userModel }))
  app.use('/tables', createTablesRouter({ tableModel }))
  app.use('/auth', createAuthRouter({ authModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
  })
}
