import type { Request, Response, NextFunction } from 'express'
import { UserService } from '../services/userService.js'
import { createUserSchema, updateUserSchema } from '../types/user.js'

export const UserController = {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAll()
      res.json({ data: users })
    } catch (error) {
      next(error)
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.getById(req.params.id)
      if (!user) {
        res.status(404).json({ error: 'User not found' })
        return
      }
      res.json({ data: user })
    } catch (error) {
      next(error)
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createUserSchema.parse(req.body)
      const user = await UserService.create(data)
      res.status(201).json({ data: user })
    } catch (error) {
      next(error)
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = updateUserSchema.parse(req.body)
      const user = await UserService.update(req.params.id, data)
      if (!user) {
        res.status(404).json({ error: 'User not found' })
        return
      }
      res.json({ data: user })
    } catch (error) {
      next(error)
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted = await UserService.delete(req.params.id)
      if (!deleted) {
        res.status(404).json({ error: 'User not found' })
        return
      }
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  },
}
