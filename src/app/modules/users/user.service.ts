import Iuser from './user.interface'
import UserModel from './user.model'

const createUser = async (payload: Iuser) => {
  const result = await UserModel.create(payload)
  return result
}

export const userService = {
  createUser,
}
