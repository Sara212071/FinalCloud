const { Router } = require('express');
const trackController = require('../Controllers/Track');
const trackRouter = Router();

trackRouter.get('/', trackController.getTracks);
trackRouter.post('/', trackController.addTrack);
trackRouter.post('/like', trackController.likeTrack);
trackRouter.post('/unlike', trackController.unlikeTrack);

module.exports = trackRouter;
