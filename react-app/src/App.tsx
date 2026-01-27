import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('react')

  const templates = [
    { id: 'react', name: 'React', stack: 'Vite + React 19 + TypeScript', color: '#61dafb' },
    { id: 'next', name: 'Next.js', stack: 'Next.js 15 + Turbopack + App Router', color: '#000' },
    { id: 'express', name: 'Express', stack: 'Express 5 + TypeScript + Zod', color: '#68a063' },
    { id: 'fullstack', name: 'Fullstack', stack: 'Next.js + Prisma + NextAuth', color: '#8b5cf6' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">TIMMY TEMPLATE</span>
        </div>
        <nav className="nav">
          <a href="#templates">Templates</a>
          <a href="#features">Features</a>
          <a href="#quickstart">Quick Start</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Build Faster with<br /><span className="gradient">Timmy Template</span></h1>
          <p className="subtitle">
            Production-ready project scaffolding for modern web development.
            React, Next.js, Express, and full-stack apps in seconds.
          </p>
          <div className="hero-actions">
            <code className="command">newproject fullstack my-app</code>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </section>

        <section id="templates" className="templates">
          <h2>Choose Your Stack</h2>
          <div className="template-tabs">
            {templates.map(t => (
              <button
                key={t.id}
                className={`tab ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => setActiveTab(t.id)}
                style={{ '--accent': t.color } as React.CSSProperties}
              >
                {t.name}
              </button>
            ))}
          </div>
          <div className="template-card">
            {templates.filter(t => t.id === activeTab).map(t => (
              <div key={t.id}>
                <h3 style={{ color: t.color }}>{t.name} Template</h3>
                <p className="stack">{t.stack}</p>
                <div className="features-grid">
                  <div className="feature">
                    <span className="feature-icon">📁</span>
                    <span>Organized Structure</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🔷</span>
                    <span>TypeScript Ready</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">⚡</span>
                    <span>Fast Dev Server</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🧪</span>
                    <span>Testing Setup</span>
                  </div>
                </div>
                <code className="command">newproject {t.id} my-{t.id}-app</code>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>Everything You Need</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Modern Styling</h3>
              <p>CSS variables, dark mode support, and responsive layouts out of the box.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔐</div>
              <h3>Auth Ready</h3>
              <p>NextAuth.js integration with session management and OAuth providers.</p>
            </div>
            <div className="card">
              <div className="card-icon">🗄️</div>
              <h3>Database</h3>
              <p>Prisma ORM with SQLite for development, ready for PostgreSQL in production.</p>
            </div>
            <div className="card">
              <div className="card-icon">📡</div>
              <h3>API Routes</h3>
              <p>Type-safe API endpoints with Zod validation and error handling.</p>
            </div>
          </div>
        </section>

        <section id="quickstart" className="quickstart">
          <h2>Quick Start</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <code>newproject fullstack my-app</code>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <code>cd my-app && npm install</code>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <code>npm run dev</code>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with 🚀 by Timmy Template</p>
      </footer>
    </div>
  )
}

export default App
