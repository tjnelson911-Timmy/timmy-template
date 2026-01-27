import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const users = await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  })
  return NextResponse.json({ data: users })
}

export async function POST(request: Request) {
  const body = await request.json()

  const user = await db.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  })

  return NextResponse.json({ data: user }, { status: 201 })
}
