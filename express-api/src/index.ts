import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/index.js'
import { errorHandler } from './middleware/errorHandler.js'

const app = express()
const port = process.env.PORT || 3000

// Security middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', router)

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Error handling
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export { app }
