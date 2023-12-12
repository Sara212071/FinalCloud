// controllers/ArtistController.js
const artistService = require('../Services/Artist');

const artistController = {
  getArtists: async (req, res) => {
    try {
      const artists = await artistService.findAllArtists();
      res.send({ artists });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  addArtist: async (req, res) => {
    const artistInfo = {
      name: req.body.name,
      tracks: req.body.tracks,
      albums: req.body.albums
    };

    try {
      const createdArtist = await artistService.addArtist(artistInfo);
      res.status(201).send({
        msg: 'Artist created',
        artistId: createdArtist._id,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = artistController;
