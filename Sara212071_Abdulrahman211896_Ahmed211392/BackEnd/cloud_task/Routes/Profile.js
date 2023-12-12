const { Router } = require('express');
const profileController = require('../Controllers/Profile');
const profileRouter = Router();

profileRouter.get('/', profileController.getProfile);
profileRouter.post('/', profileController.createProfile);
profileRouter.post('/like', profileController.likeTrack);
profileRouter.post('/unlike', profileController.unlikeTrack);

module.exports = profileRouter;
