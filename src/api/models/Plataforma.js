const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: 'plataformas' }
)

const Plataforma = mongoose.model('Plataforma', plataformaSchema, 'plataformas')
module.exports = Plataforma
