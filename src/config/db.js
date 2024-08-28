const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Conectado a la base de datos')
  } catch (error) {
    console.error('Error al conectar a la base de datos')
    console.error(error)
  }
}

module.exports = connect
