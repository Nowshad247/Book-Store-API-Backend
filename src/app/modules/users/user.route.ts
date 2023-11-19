import express from 'express'
import { userController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import userZodValidation, { userZodloginValidation } from './user.zodValidation'
const router = express.Router()

router.post(
  '/create-user',
  validateRequest(userZodValidation),
  userController.createUser,
)
router.post(
  '/login/',
  validateRequest(userZodloginValidation),
  userController.login,
)
router.get('/profile/:id', userController.userProfile)
router.get('/allUser', userController.allUser)

export const UserRoutes = router
