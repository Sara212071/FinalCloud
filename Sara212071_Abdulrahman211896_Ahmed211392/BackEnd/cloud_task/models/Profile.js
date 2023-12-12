const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'userlogin',
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: '',
  },
  profileImage: {
    type: String,
    default: '',
  },
  likedTracks: [{
    type: Schema.Types.ObjectId,
    ref: 'Track',
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'userlogin',
  }],
});

const ProfileModel = model('Profile', ProfileSchema);

module.exports = ProfileModel;
