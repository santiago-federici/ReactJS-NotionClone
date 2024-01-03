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

  loginByUsername = async (req, res) => {
    const { username, password } = req.body
    const user = await this.userModel.loginByUsername({ username, password })
    if (user.length > 0) return res.json(user)
    res.status(404).json({ message: 'Wrong user or password' })
  }

  // create = async (req, res) => {
  //   const result = validateUser(req.body)

  //   if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) })

  //   const newMovie = await this.movieModel.create({ input: result.data })

  //   res.status(201).json(newMovie)
  // }

  // delete = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.movieModel.delete({ id })

  //   if (result === false) {
  //     return res.status(404).json({ message: 'Movie Not Found' })
  //   }

  //   return res.json({ message: 'Movie Deleted', deletedMovieDetails: result })
  // }

  // update = async (req, res) => {
  //   const result = validatePartialUser(req.body)

  //   if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) })

  //   const { id } = req.params

  //   const updatedMovie = await this.movieModel.update({ id, input: result.data })

  //   if (updatedMovie === false) return res.status(404).json({ message: 'Movie not found' })

  //   return res.json({ message: 'Movie Updated', updatedMovieDetails: updatedMovie })
  // }
}
