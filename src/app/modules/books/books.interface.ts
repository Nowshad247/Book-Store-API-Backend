import { Model, ObjectId } from 'mongoose'

export type Ibooks = {
  title: string
  author: string
  genre: string
  publicationDate: string
  userId: ObjectId
}
export type BookModel = Model<Ibooks, Record<string, unknown>>
