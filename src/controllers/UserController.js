// src/controllers/UserController.js
import Controller from './Controller.js'
import userService from '../services/userService.js'

class UserController extends Controller {
  constructor() {
    super(userService)
  }
}

export default new UserController()
