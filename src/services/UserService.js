import prisma from '../models/prisma.js'
import bcrypt from 'bcrypt'
import Service from './Service.js' // Certifique-se de que o caminho está correto

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

  async findMany() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        // Exclui o campo 'password'
        password: false,
      },
    })
  }
}

export default new UserService()
