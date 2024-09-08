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

    // Obtener la película actual de la base de datos
    const pelicula = await Pelicula.findById(id).populate('plataformas')
    if (!pelicula) {
      return res.status(404).json({ error: 'Película no encontrada' })
    }

    // Combinar las plataformas actuales con las nuevas, evitando duplicados
    const nuevasPlataformas = req.body.plataformas || []
    const plataformasExistentes = pelicula.plataformas.map((plataforma) =>
      plataforma.toString()
    )

    // Evitar duplicados combinando las plataformas existentes y las nuevas
    const plataformasCombinadas = [
      ...new Set([...plataformasExistentes, ...nuevasPlataformas])
    ]

    // Actualizar la película con las plataformas combinadas
    const peliculaUpdate = await Pelicula.findByIdAndUpdate(
      id,
      {
        ...req.body,
        plataformas: plataformasCombinadas
      },
      {
        new: true,
        runValidators: true
      }
    ).populate('plataformas')

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
