// Common type definitions
import { z } from 'zod'

// User schemas
export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  password: z.string().min(8),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type CreateUser = z.infer<typeof createUserSchema>
export type LoginCredentials = z.infer<typeof loginSchema>

// API response types
export interface ApiResponse<T> {
  data?: T
  error?: string
}
