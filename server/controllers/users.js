export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll()
    res.json(users)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const user = await this.userModel.getById({ id })
    if (user.length > 0) return res.json(user)
    res.status(404).json({ message: 'User not found' })
  }

  loginByEmail = async (req, res) => {
    const { email, password } = req.body
    const user = await this.userModel.loginByEmail({ email, password })
    if (user.length > 0) return res.json(user)
    res.status(404).json({ message: 'Wrong email or password' })
  }
}
