import { validateUser } from '../schemas/users.js'

export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  register = async (req, res) => {
    const { username, email, password } = req.body
    const validatedUser = validateUser({ email, username, password })

    const existsUser = await this.authModel.checkUserExistance({ input: validatedUser.data })
    if (existsUser.length > 0) return res.status(400).json({ message: 'Either the username or the email already exists' })

    const newUser = await this.authModel.register({ input: validatedUser.data })
    console.log('newUser from controller: ', newUser)
    return res.status(201).json(newUser)
  }

  loginByEmail = async (req, res) => {
    const { email, password } = req.body
    const user = await this.authModel.loginByEmail({ email, password })
    if (user.length > 0) return res.status(200).json(user)
    res.status(404).json({ message: 'No user found. Check your email or password' })
  }
}
