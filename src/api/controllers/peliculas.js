const Pelicula = require('../models/Pelicula')

const getPeliculas = async (req, res, next) => {
  try {
    const peliculas = await Pelicula.find().populate('plataformas')
    return res.status(200).json(peliculas)
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las películas' })
  }
}

const getPeliculasbyId = async (req, res, next) => {
  try {
    const { id } = req.params
    const pelicula = await Pelicula.findById(id).populate('plataformas')
    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' })
    }
    return res.status(200).json(pelicula)
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la película' })
  }
}

const getPeliculasByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const peliculas = await Pelicula.find({ precio })
    return res.status(200).json(peliculas)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener las películas por precio' })
  }
}

const getPeliculasByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params
    const peliculas = await Pelicula.find({ categoria })
    return res.status(200).json(peliculas)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener las películas por categoría' })
  }
}

const getPeliculasByPlatform = async (req, res, next) => {
  try {
    const { plataforma } = req.params
    const peliculas = await Pelicula.find({ plataformas: plataforma }).populate(
      'plataformas'
    )
    return res.status(200).json(peliculas)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error al obtener las películas por plataforma' })
  }
}

const postPelicula = async (req, res, next) => {
  try {
    const newPelicula = new Pelicula(req.body)
    const peliculaSaved = await newPelicula.save()
    return res.status(201).json(peliculaSaved)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const putPelicula = async (req, res, next) => {
  try {
    const { id } = req.params
    const peliculaUpdate = await Pelicula.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).populate('plataformas')
    if (!peliculaUpdate) {
      return res.status(404).json({ error: 'Película no encontrada' })
    }
    return res.status(200).json(peliculaUpdate)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const deletePelicula = async (req, res, next) => {
  try {
    const { id } = req.params
    const peliculaDelete = await Pelicula.findByIdAndDelete(id)
    if (!peliculaDelete) {
      return res.status(404).json({ error: 'Película no encontrada' })
    }
    return res.status(204).send()
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la película' })
  }
}

module.exports = {
  getPeliculas,
  getPeliculasbyId,
  getPeliculasByPrice,
  getPeliculasByCategory,
  getPeliculasByPlatform,
  postPelicula,
  putPelicula,
  deletePelicula
}
