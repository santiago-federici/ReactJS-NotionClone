import express, { json } from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'

import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createTablesRouter } from './routes/tables.js'
import { createAuthenticationRouter } from './routes/authentication.js'

export const createApp = ({ userModel, tableModel, authenticationModel }) => {
  const app = express()
  app.use(cookieParser())
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
    }
  }))

  const isAuthenticated = (req, res, next) => {
    if (req.session.isAuth) {
      return next()
    } else {
      res.sendStatus(401).json({ message: 'Unauthorized' })
    }
  }

  app.use('/users', isAuthenticated, createUsersRouter({ userModel }))
  app.use('/tables', createTablesRouter({ tableModel }))
  app.use('/authentication', createAuthenticationRouter({ authenticationModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
  })
}
