require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const peliculasRouter = require('./src/api/routes/peliculas')
const plataformaRouter = require('./src/api/routes/plataformas')

const app = express()

// Conectar a la base de datos
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err)
    process.exit(1)
  })

// Middleware para parsear JSON
app.use(express.json())

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Películas y Plataformas!')
})

// Usar los enrutadores sin autenticación
app.use('/api/v1/peliculas', peliculasRouter)
app.use('/api/v1/plataformas', plataformaRouter)

// Manejar rutas no encontradas
app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not found' })
})

// Iniciar el servidor
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`)
})
