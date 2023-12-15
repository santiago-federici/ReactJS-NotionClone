export class PageController {
  constructor ({ pageModel }) {
    this.pageModel = pageModel
  }

  getAll = async (req, res) => {
    const pages = await this.pageModel.getAll()
    res.json(pages)
  }
}
