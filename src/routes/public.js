// src/routes/public.js
import express from 'express'
import userController from '../controllers/UserController.js'

const router = express.Router()

// Cadastro
router.post('/cadastro', userController.create)

export default router
