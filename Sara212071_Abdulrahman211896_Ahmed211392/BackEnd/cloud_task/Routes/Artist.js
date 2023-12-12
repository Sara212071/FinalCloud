// routes/ArtistRoutes.js
const { Router } = require('express');
const artistController = require('../Controllers/Artist');
const artistRouter = Router();

artistRouter.get('/', artistController.getArtists);
artistRouter.post('/', artistController.addArtist);

module.exports = artistRouter;
