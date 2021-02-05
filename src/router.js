import songs from './routes/songs'

//Grupo de rutas /songs
export default app => {
    app.use('/songs', songs)
}

