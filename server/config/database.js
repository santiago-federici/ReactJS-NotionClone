import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'notionclone_db',
  'root',
  'admin',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
)
