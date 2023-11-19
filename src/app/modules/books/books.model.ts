import mongoose from 'mongoose'
import { BookModel, Ibooks } from './books.interface'

const bookSchema = new mongoose.Schema<Ibooks>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BookUser',
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

const Book = mongoose.model<Ibooks, BookModel>('Books', bookSchema)

module.exports = Book
