import ApiError from '../../../errors/ApiErrors'
import Iuser from './user.interface'
import UserModel from './user.model'

const createUser = async (payload: Iuser) => {
  try {
    const result = await UserModel.create(payload)
    return result
  } catch (error) {
    throw new ApiError(404, 'Faiedl to create new User')
  }
}

export const userService = {
  createUser,
}
