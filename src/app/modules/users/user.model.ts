import mongoose, { Schema } from 'mongoose'
import Iuser from './user.interface'

const userSchema = new Schema<Iuser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
})

const UserModel = mongoose.model('BookUser', userSchema)

export default UserModel
