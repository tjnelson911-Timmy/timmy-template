import type { User, CreateUser, UpdateUser } from '../types/user.js'

// In-memory store (replace with database)
const users: Map<string, User> = new Map()

export const UserService = {
  async getAll(): Promise<User[]> {
    return Array.from(users.values())
  },

  async getById(id: string): Promise<User | null> {
    return users.get(id) || null
  },

  async create(data: CreateUser): Promise<User> {
    const id = crypto.randomUUID()
    const user: User = { id, ...data, createdAt: new Date() }
    users.set(id, user)
    return user
  },

  async update(id: string, data: UpdateUser): Promise<User | null> {
    const existing = users.get(id)
    if (!existing) return null
    const updated = { ...existing, ...data, updatedAt: new Date() }
    users.set(id, updated)
    return updated
  },

  async delete(id: string): Promise<boolean> {
    return users.delete(id)
  },
}
