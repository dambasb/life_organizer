import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'
import connectDB from './config/db.js'

import todoRoutes from './routes/todoRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Api is running...')
})

app.use('/api/todos', todoRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
})
