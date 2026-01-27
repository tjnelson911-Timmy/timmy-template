import { Router } from 'express'
import { userRouter } from './users.js'

export const router = Router()

router.use('/users', userRouter)
