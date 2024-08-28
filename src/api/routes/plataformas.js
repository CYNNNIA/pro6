const express = require('express')
const {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
} = require('../controllers/plataformas')

const plataformaRouter = express.Router()

// Definir las rutas para plataformas
plataformaRouter.get('/', getPlataformas)
plataformaRouter.get('/:id', getPlataformaById)
plataformaRouter.post('/', postPlataforma)
plataformaRouter.put('/:id', putPlataforma)
plataformaRouter.delete('/:id', deletePlataforma)

module.exports = plataformaRouter
