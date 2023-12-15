export class PageController {
  constructor ({ pageModel }) {
    this.pageModel = pageModel
  }

  getAll = async (req, res) => {
    const pages = await this.pageModel.getAll()
    res.json(pages)
  }

  getByUserId = async (req, res) => {
    const { userId } = req.params
    const page = await this.pageModel.getByUserId({ userId })
    if (page) return res.json(page)
    res.status(404).json({ message: 'Page not found' })
  }
}
