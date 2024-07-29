import Controller from './Controller.js'
import AuthService from '../services/AuthService.js'

class AuthController extends Controller {
  async login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' })
    }

    try {
      const { token } = await AuthService.login(email, password)
      return res.status(200).json({ token })
    } catch (error) {
      return res.status(401).json({ error: error.message })
    }
  }
}

export default new AuthController()
