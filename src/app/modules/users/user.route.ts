import express from 'express'
import { userController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import userZodValidation from './user.zodValidation'
const router = express.Router()

router.post(
  '/create-user',
  validateRequest(userZodValidation),
  userController.createUser,
)

export const UserRoutes = router
