const mongoose = require("mongoose")

const songSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, trim: true, required: true},
    author: { type: String, trim:true, required: true},
    release_date: { type: String},
    vote_average: { type: Number },
    vote_count: { type: Number },
    original_language: { type: String, trim:true},
    genre: { type: String, trim:true, required: true},
    album: { type: String, trim:true},
    duration: { type: String, trim:true},
  }, 
  {
    strict: false,
    versionKey: false
  }
)

const Song = mongoose.model('Song', songSchema)
export default Song
