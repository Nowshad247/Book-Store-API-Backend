import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'

const createBooks: RequestHandler = catchAsync(async (req, res) => {
  res.send('working')
})

export const bookController = {
  createBooks,
}
