import Service from './Service.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '../models/prisma.js'
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.JWT_SECRET

class AuthService extends Service {
  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios')
    }

    const user = await prisma.user.findUnique({ where: { email } })

    // verfica se o usuário existe
    if (!user) {
      throw new Error('Email ou senha incorretos')
    }

    // comparando senha encriptada
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Email ou senha incorretos')
    }

    // retorna o token com id, secret e tempo que expira
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1m' })

    return { token }
  }
}

export default new AuthService()
