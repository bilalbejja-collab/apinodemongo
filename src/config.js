import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

//Tomamos opciones de configuración del fichero .env
const SETTINGS = config()

export default app => {
    app.disable('x-powered-by')

    //Pasamos del fichero .env a variables en app
    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.env = app.get('env')
    app.locals.config = app.get('config')

    if (app.locals.env !== 'test') {
        app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded( { extended: false } ))

    //Configurar cabeceras
    app.use(cors())

}