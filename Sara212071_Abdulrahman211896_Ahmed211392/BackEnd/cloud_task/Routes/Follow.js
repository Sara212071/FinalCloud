const { Router } = require('express');
const followController = require('../Controllers/Follow');
const followRouter = Router();

followRouter.post('/user', followController.followUser);
followRouter.post('/artist', followController.followArtist);

module.exports = followRouter;