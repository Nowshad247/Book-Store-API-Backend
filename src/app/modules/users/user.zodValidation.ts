import { z } from 'zod'

const userZodValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10),
    password: z.string(),
    role: z.enum(['admin', 'user']),
  }),
})
export const userZodloginValidation = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
})

export default userZodValidation
