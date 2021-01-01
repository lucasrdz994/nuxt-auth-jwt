import express from 'express'
import usersRoutes from './routes/user.routes'
import './database'

const app = express()

app.use(express.json())

app.use(usersRoutes)

export default app