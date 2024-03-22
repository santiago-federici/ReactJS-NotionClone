export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    if (users.err) return res.status(404).json({ message: 'Users not found' })
    if (users && users.rows.length > 0) return res.status(200).json(users.rows)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getById({ id })
    if (user.err) return res.status(404).json({ message: 'User not found' })
    if (user && user.rows.length > 0) return res.status(200).json(user.rows[0])
  }
}
