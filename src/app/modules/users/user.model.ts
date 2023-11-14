import mongoose, { Schema } from 'mongoose'
import Iuser, { UserModel } from './user.interface'

const userSchema = new Schema<Iuser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
})

const UserModel = mongoose.model<Iuser, UserModel>('BookUser', userSchema)

export default UserModel
