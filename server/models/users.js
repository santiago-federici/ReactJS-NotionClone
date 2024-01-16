import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/database.js'

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  updatedAt: false,
  modelName: 'User'
})
