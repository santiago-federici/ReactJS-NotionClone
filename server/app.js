import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createUsersRouter } from './routes/users.js'
import { createPagesRouter } from './routes/pages.js'

export const createApp = ({ userModel, pageModel }) => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')

  app.use('/users', createUsersRouter({ userModel }))
  app.use('/pages', createPagesRouter({ pageModel }))

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server listeting on port http://localhost:${PORT}`)
  })
}
