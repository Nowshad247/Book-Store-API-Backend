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
const userProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const datas = req.params.id
    if (datas) {
      const result = await userService.userProfileData(datas)
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get Sucess',
        data: result,
      })
    } else {
      throw new Error()
    }
  },
)
const login: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (req.params) {
      const result = await userService.loginData({ email, password })

      if (result == null) {
        throw new Error()
      }

      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'get Sucess',
        data: result,
      })
    } else {
      throw new Error()
    }
  },
)
const allUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.GetAllUser()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'We Get data',
    data: result,
  })
})

export const userController = {
  createUser,
  userProfile,
  login,
  allUser,
}
