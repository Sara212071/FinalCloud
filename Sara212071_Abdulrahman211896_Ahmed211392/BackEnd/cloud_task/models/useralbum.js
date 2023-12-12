// models/Album.js
const { Schema, model } = require('mongoose');

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
  },
  genre: {
    type: String,
  },
  // Additional album properties can be added here
});

const AlbumModel = model('useralbum', AlbumSchema);

module.exports = AlbumModel;