const request = require('supertest')
const app = require('../index')
describe('GET /api/v1/peliculas', () => {
  it('debería devolver todas las películas', async () => {
    const res = await request(app).get('/api/v1/peliculas')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})

describe('POST /api/v1/peliculas', () => {
  it('debería crear una nueva película', async () => {
    const res = await request(app)
      .post('/api/v1/peliculas')
      .send({
        nombre: 'New Movie',
        categoria: 'aventura',
        plataformas: ['<ID de Plataforma>'],
        precio: 9.99
      })
      .set('Authorization', 'Bearer <your_token>')
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('nombre', 'New Movie')
  })
})
