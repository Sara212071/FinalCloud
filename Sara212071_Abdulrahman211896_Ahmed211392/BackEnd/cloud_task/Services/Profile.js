const ProfileModel = require('../models/Profile');

module.exports.findProfileByUserId = async (userId) => {
  try {
    const profile = await ProfileModel.findOne({ user: userId });
    return profile;
  } catch (error) {
    throw new Error(`Failed to find profile: ${error.message}`);
  }
};

module.exports.createProfile = async (userId, bio, profileImage) => {
  try {
    return await ProfileModel.create({ user: userId, bio, profileImage });
  } catch (error) {
    throw new Error(`Failed to create profile: ${error.message}`);
  }
};

module.exports.likeTrack = async (userId, trackId) => {
  try {
    const profile = await ProfileModel.findOneAndUpdate(
      { user: userId },
      { $addToSet: { likedTracks: trackId } },
      { new: true }
    );
    return profile;
  } catch (error) {
    throw new Error(`Failed to like track: ${error.message}`);
  }
};

module.exports.unlikeTrack = async (userId, trackId) => {
  try {
    const profile = await ProfileModel.findOneAndUpdate(
      { user: userId },
      { $pull: { likedTracks: trackId } },
      { new: true }
    );
    return profile;
  } catch (error) {
    throw new Error(`Failed to unlike track: ${error.message}`);
  }
};
