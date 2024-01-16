import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database.js'

export class Table extends Model {}

Table.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: 'Untitled'
  }
}, {
  sequelize,
  modelName: 'Table'
})
