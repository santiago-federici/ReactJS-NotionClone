export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    if (users && users.rows.length > 0) return res.status(200).json(users)
    return res.status(404).json({ message: 'Users not found' })
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getById({ id })
    if (user && user.rows.length > 0) return res.status(200).json(user)
    return res.status(404).json({ message: 'User not found' })
  }
}
