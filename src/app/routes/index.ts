import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { BooksRoutes } from '../modules/books/books.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BooksRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
