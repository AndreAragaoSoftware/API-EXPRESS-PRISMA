import { Router } from 'express'
import UserController from '../controllers/UserController.js'
import authMiddleware from '../middleware/auth.js'

const router = Router()

router.use(authMiddleware)

router.get('/listar-usuarios', UserController.findMany)
router.post('/cadastro', UserController.create)

export default router
