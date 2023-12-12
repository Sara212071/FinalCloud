const profileService = require('../Services/Profile');

module.exports.getProfile = async (req, res) => {
  const userId = req.body.userId;

  try {
    const profile = await profileService.findProfileByUserId(userId);
    res.status(200).send({ profile });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.createProfile = async (req, res) => {
  const userId = req.body.userId;
  const bio = req.body.bio;
  const profileImage = req.body.profileImage;

  try {
    const createdProfile = await profileService.createProfile(userId, bio, profileImage);
    res.status(201).send({ msg: 'Profile created', profileId: createdProfile._id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.likeTrack = async (req, res) => {
  const userId = req.body.userId;
  const trackId = req.body.trackId;

  try {
    const updatedProfile = await profileService.likeTrack(userId, trackId);
    res.status(200).send({ profile: updatedProfile });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.unlikeTrack = async (req, res) => {
  const userId = req.body.userId;
  const trackId = req.body.trackId;

  try {
    const updatedProfile = await profileService.unlikeTrack(userId, trackId);
    res.status(200).send({ profile: updatedProfile });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

