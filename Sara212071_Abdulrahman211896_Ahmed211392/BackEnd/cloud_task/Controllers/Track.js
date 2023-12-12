const trackService = require('../Services/Track');

const trackController = {
  getTracks: async (req, res) => {
    try {
      const tracks = await trackService.findAllTracks();
      res.send({ tracks });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  addTrack: async (req, res) => {
    const trackInfo = {
      title: req.body.title,
      artist: req.body.artist,
      duration: req.body.duration,
      genre: req.body.genre,
    };

    try {
      const createdTrack = await trackService.addTrack(trackInfo);
      res.status(201).send({
        msg: 'Track created',
        trackId: createdTrack._id,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  likeTrack: async (req, res) => {
    const trackId = req.params.trackId;
    const userId = req.params.userId;

    try {
      await trackService.likeTrack(trackId, userId);
      res.status(200).send({ msg: 'Track liked successfully' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  unlikeTrack: async (req, res) => {
    const trackId = req.params.trackId;
    const userId = req.params.userId;

    try {
      await trackService.unlikeTrack(trackId, userId);
      res.status(200).send({ msg: 'Track unliked successfully' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = trackController;


