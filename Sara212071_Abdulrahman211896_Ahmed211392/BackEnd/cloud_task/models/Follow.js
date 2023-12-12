const { Schema, model } = require('mongoose');

const FollowSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: 'userlogin',
    required: true,
  },
  followingUser: {
    type: Schema.Types.ObjectId,
    ref: 'userlogin',
  },
  followingArtist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
  },
  
});

const FollowModel = model('Follow', FollowSchema);

module.exports = FollowModel;