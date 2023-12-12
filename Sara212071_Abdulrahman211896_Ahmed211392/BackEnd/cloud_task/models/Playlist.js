const { Schema, model } = require('mongoose');

const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'userlogin',
    required: true,
  },
  tracks: {
    type: [Schema.Types.ObjectId],
    ref: 'Track',
  },
  
});

const PlaylistModel = model('Playlist', PlaylistSchema);

module.exports = PlaylistModel;
