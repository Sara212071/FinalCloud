// routes/AlbumRoutes.js
const { Router } = require('express');
const albumController = require('../Controllers/useralbum');
const albumRouter = Router();

albumRouter.get('/', albumController.getAlbums);
albumRouter.post('/', albumController.addAlbum);

module.exports = albumRouter;
