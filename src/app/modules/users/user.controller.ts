import { Request, RequestHandler, Response } from 'express'
import { userService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body
    const result = await userService.createUser(data)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'get Sucess',
      data: result,
    })
  },
)

export const userController = {
  createUser,
}
