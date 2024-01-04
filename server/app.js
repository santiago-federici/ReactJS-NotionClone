import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createTablesRouter } from './routes/tables.js'

export const createApp = ({ userModel, tableModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/users', createUsersRouter({ userModel }))
  app.use('/tables', createTablesRouter({ tableModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listeting on port http://localhost:${PORT}`)
  })
}
