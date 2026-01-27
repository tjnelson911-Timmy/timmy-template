import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to Your App</h1>
      <p>A full-stack application template with:</p>
      <ul>
        <li>Next.js 15 with App Router</li>
        <li>TypeScript</li>
        <li>Prisma ORM</li>
        <li>NextAuth.js</li>
        <li>API Routes</li>
      </ul>
      <div className="actions">
        <Link href="/login" className="button">Login</Link>
        <Link href="/dashboard" className="button secondary">Dashboard</Link>
      </div>
    </main>
  )
}
