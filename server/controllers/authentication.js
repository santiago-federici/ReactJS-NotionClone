export class AuthenticationController {
  constructor ({ authenticationModel }) {
    this.authenticationModel = authenticationModel
  }

  loginByEmail = async (req, res) => {
    const { email, password } = req.body
    const user = await this.authenticationModel.loginByEmail({ email, password })
    if (user.length > 0) {
      req.session.isAuth = true
      req.session.username = user[0].username
      return res.json(user)
    }
    res.status(404).json({ message: 'Wrong email or password' })
  }
}
