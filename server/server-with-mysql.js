import { createApp } from './app.js'
import { sequelize } from './config/database.js'

(async () => {
  await sequelize.sync()
  createApp()
})()
