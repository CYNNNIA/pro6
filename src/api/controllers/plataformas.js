const Plataforma = require('../models/Plataforma')

const getPlataformas = async (req, res) => {
  try {
    const plataformas = await Plataforma.find()
    return res.status(200).json(plataformas)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const getPlataformaById = async (req, res) => {
  try {
    const { id } = req.params
    const plataforma = await Plataforma.findById(id)
    return res.status(200).json(plataforma)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const postPlataforma = async (req, res) => {
  try {
    const newPlataforma = new Plataforma(req.body)
    const plataformaSaved = await newPlataforma.save()
    return res.status(201).json(plataformaSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const putPlataforma = async (req, res) => {
  try {
    const { id } = req.params
    const plataformaUpdate = await Plataforma.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.status(200).json(plataformaUpdate)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deletePlataforma = async (req, res) => {
  try {
    const { id } = req.params
    await Plataforma.findByIdAndDelete(id)
    return res.status(204).send()
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}
