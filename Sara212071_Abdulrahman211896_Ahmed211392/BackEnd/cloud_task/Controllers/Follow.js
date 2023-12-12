
const followService = require('../Services/Follow');

const followController = {
  followUser: async (req, res) => {
    const followerId = req.params.followerId;
    const userIdToFollow = req.body.userIdToFollow;

    try {
      await followService.followUser(followerId, userIdToFollow);
      res.status(200).send({ msg: 'User followed successfully' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  followArtist: async (req, res) => {
    const followerId = req.body.followerId;
    const artistIdToFollow = req.body.artistIdToFollow;

    try {
      await followService.followArtist(followerId, artistIdToFollow);
      res.status(200).send({ msg: 'Artist followed successfully' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = followController;