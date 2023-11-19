import { z } from 'zod'

const bookZodCreateValidaton = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title should not be empty' }),
    author: z.string().min(1, { message: 'Author should not be empty' }),
    genre: z.string().min(1, { message: 'Genre should not be empty' }),
    publicationDate: z
      .string()
      .min(1, { message: 'Publication date should not be empty' }),
    userId: z.string().min(1, { message: 'User ID should not be empty' }),
  }),
})

export const bookZodVaidation = {
  bookZodCreateValidaton,
}
