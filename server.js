import express from 'express'
import dotenv from 'dotenv' 
import connectDB from './db.js'

import tourRoutes from './routes/tourRoutes.js'


dotenv.config({path : './config.env'})

connectDB()

const app = express()
app.use(express.json())

app.use('/api/tours', tourRoutes)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Hello world")
})


