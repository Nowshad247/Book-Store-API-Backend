import express from 'express'
import { bookController } from './books.controller'

const router = express.Router()

router.post('/create-books', bookController.createBooks)

export const BooksRoutes = router
