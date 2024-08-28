const express = require('express')
const {
  getPeliculas,
  getPeliculasbyId,
  getPeliculasByPrice,
  getPeliculasByCategory,
  getPeliculasByPlatform,
  postPelicula,
  putPelicula,
  deletePelicula
} = require('../controllers/peliculas')

const peliculasRouter = express.Router()

peliculasRouter.get('/:id', getPeliculasbyId)
peliculasRouter.get('/precio/:precio', getPeliculasByPrice)
peliculasRouter.get('/categoria/:categoria', getPeliculasByCategory)
peliculasRouter.get('/plataforma/:plataforma', getPeliculasByPlatform)
peliculasRouter.get('/', getPeliculas)
peliculasRouter.post('/', postPelicula)
peliculasRouter.put('/:id', putPelicula)
peliculasRouter.delete('/:id', deletePelicula)

module.exports = peliculasRouter
