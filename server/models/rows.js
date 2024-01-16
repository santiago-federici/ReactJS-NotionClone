import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database.js'

export class Row extends Model {}

Row.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mainContent: {
    type: DataTypes.STRING
  },
  rowDescription: {
    type: DataTypes.STRING
  },
  rowStatus: {
    type: DataTypes.STRING
  },
  rowPriority: {
    type: DataTypes.STRING
  },
  rowDue: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Row'
})
