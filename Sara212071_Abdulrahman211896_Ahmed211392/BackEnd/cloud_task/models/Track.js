const { Schema, model } = require('mongoose');

const TrackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'useralbum',
  },
  duration: {
    type: String,
  },
  genre: {
    type: String,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'userlogin',
    },
  ],
});

const TrackModel = model('Track', TrackSchema);

module.exports = TrackModel;