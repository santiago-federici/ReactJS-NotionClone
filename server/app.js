import express, { json } from 'express'
import cookieParser from 'cookie-parser'

import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createTablesRouter } from './routes/tables.js'
import { createAuthRouter } from './routes/auth.js'
import { createRowsRouter } from './routes/rows.js'

export const createApp = ({ userModel, tableModel, rowModel, authModel }) => {
  const app = express()

  app.use(corsMiddleware())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    next()
  })

  app.options('*', corsMiddleware())

  app.use((req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Type, Authorization')
    next()
  })

  app.use(json())
  app.use(cookieParser())
  app.disable('x-powered-by')

  app.use('/users', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  }, createUsersRouter({ userModel }))
  app.use('/tables', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  }, createTablesRouter({ tableModel }))
  app.use('/rows', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  }, createRowsRouter({ rowModel }))
  app.use('/auth', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  }, createAuthRouter({ authModel }))

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
  })
}
