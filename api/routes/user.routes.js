import { Router } from 'express'
import {
  login,
  register,
  user,
  refresh
} from '../controllers/userController'

const router = Router()

router.post('/login', login)

router.post('/register', register)

router.get('/user', user)

router.post('/refresh', refresh)

export default router