import express from 'express'
import config from './config'
import router from './router'
import mongoose from 'mongoose'

let _server

const server = {
  start() {

    mongoose
      .connect("mongodb://localhost:27017/Songs", { useNewUrlParser: true })
      .then(() => {
        
            const app = express()

            //Configuración .env
            config(app)

            //Añadir router.js
            router(app)

            _server = app.listen(app.locals.config.PORT, () => {
              if (app.locals.env !== 'test') {
                console.log('Servidor express arrancado http://localhost:9000')
              }
            })
    })

  },
  close() {
    _server.close()
  }
}

export default server
if (!module.parent) {
  server.start()
}




