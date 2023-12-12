const { Router } = require('express');
const playlistController = require('../Controllers/Playlist');
const playlistRouter = Router();

playlistRouter.get('/', playlistController.getPlaylists);
playlistRouter.post('/', playlistController.addPlaylist);
playlistRouter.delete('/', playlistController.DeletePlaylist);
playlistRouter.put('/', playlistController.editPlaylist);



module.exports = playlistRouter;
