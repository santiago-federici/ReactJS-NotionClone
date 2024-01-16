import { User, Table, Row } from '../models/associations.js'

export class UserController {
  getAll = async (req, res) => {
    const users = await User.findAll({ include: [{ model: Table, include: Row }] })
    if (users.length > 0) return res.json(users)
    return res.status(404).json({ message: 'No users found' })
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id, { include: Table })
    if (user) return res.json(user)
    return res.status(404).json({ message: 'User not found' })
  }
}
