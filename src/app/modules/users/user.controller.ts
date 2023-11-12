import { Request, RequestHandler, Response } from 'express'
import { userService } from './user.service'

const createUser: RequestHandler = async (req: Request, res: Response) => {
  const data = req.body
  const result = await userService.createUser(data)
  res.send(result)
}

export const userController = {
  createUser,
}
