// src/services/UserService.js
import Service from './Service.js'
import prisma from '../models/prisma.js'
import bcrypt from 'bcrypt'

class UserService extends Service {
  constructor() {
    super(prisma.user)
  }

  async create(data) {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(data.password, salt)
    data.password = hashPassword
    return super.create(data)
  }
}

export default new UserService()
