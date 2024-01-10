import { validateUser } from '../schemas/users.js'
import jwt from 'jsonwebtoken'

export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  register = async (req, res) => {
    const { username, email, password } = req.body
    const validatedUser = validateUser({ username, email, password })

    const newUser = await this.authModel.register({ input: validatedUser.data })
    if (newUser.length > 0) return res.status(201).json(newUser)
    return res.status(400).json({ message: newUser.error })
  }

  loginByEmail = async (req, res) => {
    const { email, password } = req.body
    const user = await this.authModel.loginByEmail({ email, password })
    if (user.length > 0) {
      const { id, username, email } = user[0]

      const token = jwt.sign({ id }, 'secretkey')

      return res.cookie('accesToken', token, {
        httpOnly: true
      }).status(200).json({ id, username, email })
    }
    res.status(400).json({ message: 'No user found. Check your email or password.' })
  }

  logout = async (req, res) => {
    return res.clearCookie('accesToken', {
      secure: true,
      sameSite: 'none'
    }).status(200).json({ message: 'User logged out successfully' })
  }
}
