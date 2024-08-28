require('dotenv').config()
const mongoose = require('mongoose')
const Pelicula = require('./src/models/Pelicula')
const Plataforma = require('./src/models/Plataforma')
const connectDB = require('./src/config/db')

connectDB()

const seedData = async () => {
  try {
    const netflix = await Plataforma.create({
      nombre: 'Netflix',
      descripcion: 'Streaming de películas y series'
    })
    const amazonPrime = await Plataforma.create({
      nombre: 'Amazon Prime',
      descripcion: 'Servicio de video bajo demanda'
    })
    const disneyPlus = await Plataforma.create({
      nombre: 'Disney+',
      descripcion: 'Películas y series de Disney'
    })

    const peliculas = [
      {
        nombre: 'The Matrix',
        categoria: 'aventura',
        plataformas: [netflix._id, amazonPrime._id],
        precio: 7.99
      },
      {
        nombre: 'Avengers: Endgame',
        categoria: 'aventura',
        plataformas: [disneyPlus._id],
        precio: 12.99
      },
      {
        nombre: 'Toy Story',
        categoria: 'infantil',
        plataformas: [disneyPlus._id],
        precio: 5.99
      },
      {
        nombre: 'Breaking Bad',
        categoria: 'entretenimiento',
        plataformas: [netflix._id],
        precio: 9.99
      }
    ]

    await Pelicula.insertMany(peliculas)
    console.log('Base de datos poblada con éxito')
    mongoose.connection.close()
  } catch (error) {
    console.error('Error al poblar la base de datos:', error)
    mongoose.connection.close()
  }
}

seedData()
