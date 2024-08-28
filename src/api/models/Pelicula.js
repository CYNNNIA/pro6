const mongoose = require('mongoose')

const peliculasSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre de la película es obligatorio'],
      minlength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    categoria: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      enum: {
        values: [
          'romantica',
          'aventura',
          'entretenimiento',
          'infantil',
          'terror'
        ],
        message: 'Categoría no válida'
      }
    },
    plataformas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plataforma',
        required: [
          true,
          'La película debe estar asociada a al menos una plataforma'
        ]
      }
    ],
    precio: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: [0, 'El precio no puede ser negativo']
    }
  },
  { timestamps: true, collection: 'peliculas' }
)

peliculasSchema.pre('save', function (next) {
  this.plataformas = [
    ...new Set(this.plataformas.map((plataforma) => plataforma.toString()))
  ]
  next()
})

const Pelicula = mongoose.model('Pelicula', peliculasSchema, 'peliculas')
module.exports = Pelicula
