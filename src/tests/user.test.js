import request from 'supertest'
import app from '../app'

describe('POST /public/cadastro', () => {
  it('deve cadastrar um novo usuário', async () => {
    const response = await request(app).post('/cadastro').send({
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.email).toBe('test@example.com')
  })
})
