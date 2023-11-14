import { Model } from 'mongoose'

type Iuser = {
  name: string
  email: string
  phone: string
  password: string
  role: 'admin' | 'user'
}
export type UserModel = Model<Iuser, Record<string, unknown>>
export default Iuser
