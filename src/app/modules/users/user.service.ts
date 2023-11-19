import Iuser, { IuserPassword } from './user.interface'
import UserModel from './user.model'

const createUser = async (payload: Iuser): Promise<Iuser | null> => {
  const result = await UserModel.create(payload)
  return result
}
const userProfileData = async (
  payload: string | null,
): Promise<Iuser | null> => {
  const result = await UserModel.findById(payload).select('-password')
  return result
}
const loginData = async (payload: IuserPassword): Promise<Iuser | null> => {
  const { email, password } = payload

  //find user by email,
  const getByEamil = await UserModel.findOne({ email: email })

  if (getByEamil?.password == password) {
    return getByEamil
  } else {
    return null
  }
}
const GetAllUser = async () => {
  const result = await UserModel.find().select('-password')
  return result
}

export const userService = {
  createUser,
  userProfileData,
  loginData,
  GetAllUser,
}
