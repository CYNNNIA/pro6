const request = require('supertest') // Importa Supertest para realizar solicitudes HTTP
const app = require('../index') // Importa la aplicación Express

describe('GET /api/v1/peliculas', () => {
  it('debería devolver todas las películas', async () => {
    const res = await request(app).get('/api/v1/peliculas')
    expect(res.statusCode).toEqual(200) // Verifica que el código de estado sea 200 (OK)
    expect(res.body).toBeInstanceOf(Array) // Verifica que la respuesta sea un array
  })
})

describe('POST /api/v1/peliculas', () => {
  it('debería crear una nueva película', async () => {
    const res = await request(app)
      .post('/api/v1/peliculas')
      .send({
        nombre: 'New Movie',
        categoria: 'aventura',
        plataformas: ['<ID de Plataforma>'], // Sustituye con un ID válido de una plataforma
        precio: 9.99
      })
      .set('Authorization', 'Bearer <your_token>') // Añade el token de autenticación
    expect(res.statusCode).toEqual(201) // Verifica que el código de estado sea 201 (Created)
    expect(res.body).toHaveProperty('nombre', 'New Movie') // Verifica que la película creada tiene el nombre correcto
  })
})
