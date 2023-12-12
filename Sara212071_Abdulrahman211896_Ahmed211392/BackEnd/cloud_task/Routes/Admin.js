// routes/admin.js
const { Router } = require('express');
const adminController = require('../Controllers/Admin');
const adminRouter = Router();

// Route for authenticating an admin
adminRouter.post('/create', adminController.createAdmin);
// Routes for admin actions
adminRouter.post('/send-notification', adminController.sendNotification);
adminRouter.post('/suspend-user/:userId', adminController.suspendUser);
adminRouter.post('/ban-user/:userId', adminController.banUser);
adminRouter.post('/suspend-artist/:artistId', adminController.suspendArtist);
adminRouter.post('/ban-artist/:artistId', adminController.banArtist);

module.exports = adminRouter;