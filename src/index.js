import express from 'express'
import config from './config'
import router from './router'
import mongoose from 'mongoose'

let _server

const server = {
  start() {
    const mongoAtlasUri =
      "mongodb+srv://admin:YedTLxpoW1P9DNxe@clusterbilal.dwnnz.mongodb.net/Songs?retryWrites=true&w=majority";

    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {

        const app = express()

        //Configuración .env
        config(app)

        //Añadir router.js
        router(app)

        _server = app.listen(process.env.PORT, () => {
          if (app.locals.env !== 'test') {
            console.log('Servidor express arrancado http://localhost:9000')
          }
        })
      });

  },
  close() {
    _server.close()
  }
}

export default server
if (!module.parent) {
  server.start()
}




