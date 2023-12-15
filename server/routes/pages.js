import { Router } from 'express'

import { PageController } from '../controllers/pages.js'

export const createPagesRouter = ({ pageModel }) => {
  const pagesRouter = Router()

  const pageController = new PageController({ pageModel })

  pagesRouter.get('/', pageController.getAll)
  // pagesRouter.get('/:id', pageController.getById)
  // pagesRouter.post('/', pageController.create)
  // pagesRouter.delete('/:id', pageController.delete)
  // pagesRouter.patch('/:id', pageController.update)

  return pagesRouter
}
