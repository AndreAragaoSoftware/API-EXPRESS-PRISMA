import express from 'express'
import cors from 'cors' // Importar a biblioteca CORS
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors()) // Usar o middleware CORS
app.use(express.json())

routes(app)

export default app
