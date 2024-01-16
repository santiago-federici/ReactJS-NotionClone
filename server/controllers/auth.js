import { validateUser } from '../schemas/users.js'
import jwt from 'jsonwebtoken'

import { User } from '../models/associations.js'

export class AuthController {
  register = async (req, res) => {
    const { username, email, userPassword } = req.body
    const validatedUser = validateUser({ username, email, userPassword })

    if (!validatedUser.success) return res.status(400).json({ message: validatedUser.error.errors[0]?.message })

    const newUser = await User.create({ username: validatedUser.data.username, email: validatedUser.data.email, userPassword: validatedUser.data.userPassword })
    if (newUser) {
      const { id, username, email } = newUser

      const token = jwt.sign({ id }, 'secretkey')

      return res.cookie('accessToken', token, {
        httpOnly: true
      }).status(200).json({ id, username, email })
    }
    return res.status(400).json({ message: newUser.error })
  }

  login = async (req, res) => {
    const { email, userPassword } = req.body
    const user = await User.findOne({ where: { email, userPassword } })
    if (user) {
      const { id, username, email } = user

      const token = jwt.sign({ id }, 'secretkey')

      return res.cookie('accessToken', token, {
        httpOnly: true
      }).status(200).json({ id, username, email })
    }
    res.status(400).json({ message: 'No user found. Check your email or password.' })
  }

  logout = async (req, res) => {
    return res.clearCookie('accessToken', {
      secure: true,
      sameSite: 'none'
    }).status(200).json({ message: 'User logged out successfully' })
  }
}
