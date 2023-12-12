// controllers/AlbumController.js
const albumService = require('../Services/useralbum');

const albumController = {
  getAlbums: async (req, res) => {
    try {
      const albums = await albumService.findAllAlbums();
      res.send({ albums });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  addAlbum: async (req, res) => {
    const albumInfo = {
      title: req.body.title,
      artist: req.body.artist,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre,
      // Additional album properties from the request
    };

    try {
      const createdAlbum = await albumService.addAlbum(albumInfo);
      res.status(201).send({
        msg: 'Album created',
        albumId: createdAlbum._id,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
  
};

module.exports = albumController;