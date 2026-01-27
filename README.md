# 🚀 Timmy Template

Production-ready project scaffolding for modern web and mobile development.

## Templates

| Template | Stack | Command |
|----------|-------|---------|
| **react** | Vite + React 19 + TypeScript | `newproject react myapp` |
| **next** | Next.js 15 + TypeScript | `newproject next myapp` |
| **express** | Express 5 + TypeScript + Zod | `newproject express myapp` |
| **fullstack** | Next.js + Prisma + NextAuth | `newproject fullstack myapp` |
| **expo** | Expo + React Native + TypeScript | `newproject expo myapp` |

## Installation

```bash
git clone https://github.com/tjnelson911-Timmy/timmy-template ~/templates
```

Add to your PATH (add to `~/.zshrc` or `~/.bashrc`):

```bash
export PATH="$HOME/templates/scripts:$PATH"
```

## Usage

```bash
newproject <template> <project-name>
```

### Examples

```bash
# Create a React app with Vite
newproject react my-react-app

# Create a Next.js app
newproject next my-next-app

# Create an Express API
newproject express my-api

# Create a full-stack app with database and auth
newproject fullstack my-saas

# Create a mobile app with Expo
newproject expo my-mobile-app
```

Then:

```bash
cd <project-name>
npm install
npm run dev
```

## What's Included

### React Template
- Vite for fast development
- React 19 with TypeScript
- React Router DOM
- Landing page demo
- Custom hooks (`useLocalStorage`)
- API utility functions
- Light/dark mode CSS

### Next.js Template
- Next.js 15 with Turbopack
- App Router
- TypeScript configured
- Utility functions

### Express Template
- Express 5
- TypeScript
- Zod validation
- Controller/Service pattern
- Error handling middleware
- User CRUD example

### Fullstack Template
- Next.js 15 + App Router
- Prisma ORM (SQLite dev, Postgres ready)
- NextAuth.js for authentication
- API routes
- TypeScript
- Zod validation

### Expo Template
- Expo SDK 52
- React Native
- Expo Router (file-based navigation)
- Tab navigation (Home, Profile, Settings)
- TypeScript
- Custom Button component
- AsyncStorage hook
- API utility

## Customization

Edit templates directly in `~/templates/` - all future projects will use your changes.

```bash
# Edit a template
code ~/templates/react-app

# Edit the CLI script
code ~/templates/scripts/newproject
```

## License

MIT
