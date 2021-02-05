import express from 'express'
import Song from '../models/Song'

const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Rutas ----------------------------------------------------

//Todas las canciones
router.get('/', async(req, res, next) => {
    let allSongs = await Song.find()
    res
    .status(200)
    .json(allSongs)
})

//Añadir canción
router.post('/', async(req, res, next) => {
    console.log('Body recibido', req.body)

    //Se manda en Postman como raw -> json
    const newSong = new Song({
      id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      release_date: req.body.release_date,
      vote_average: req.body.vote_average,
      vote_count: req.body.vote_count,
      original_language: req.body.original_language,
      genre: req.body.genre,
      album: req.body.album,
      duration: req.body.duration,
    })
    await newSong.save()
  
    res
    .status(201)
    .json(newSong)
})

//Canción por título
router.get('/:id', async(req, res, next) => {
    let aSong = await Song.findOne({ id: req.params.id })
    res
    .status(200)
    .json(aSong)
	
})

//Borrar canción por título
router.delete('/:id', async(req, res, next) => {
  let aSong = await Song.deleteOne({ id: req.params.id })
  res
  .status(204)
  .json({ message: 'Song deleted.'})

})
//FIN Rutas

export default router