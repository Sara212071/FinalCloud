// models/Artist.js
const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tracks: [{
    type: Schema.Types.ObjectId,
    ref: 'Track',
  }],
  albums: [{
    type: Schema.Types.ObjectId,
    ref: 'useralbum',
  }],
});

const ArtistModel = model('Artist', ArtistSchema);

module.exports = ArtistModel;
