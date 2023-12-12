const FollowModel = require('../models/Follow');

const followService = {
  followUser: async (followerId, userIdToFollow) => {
    try {
      const existingFollow = await FollowModel.findOne({
        follower: followerId,
        followingUser: userIdToFollow,
      });

      if (existingFollow) {
        throw new Error('User is already being followed');
      }

      const follow = new FollowModel({
        follower: followerId,
        followingUser: userIdToFollow
      });

      await follow.save();
    } catch (err) {
      throw new Error(err.message);
    }
  },

  followArtist: async (followerId, artistIdToFollow) => {
    try {
      const existingFollow = await FollowModel.findOne({
        follower: followerId,
        followingArtist: artistIdToFollow
      });

      if (existingFollow) {
        throw new Error('Artist is already being followed');
      }

      const follow = new FollowModel({
        follower: followerId,
        followingArtist: artistIdToFollow
      });

      await follow.save();
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

module.exports = followService;