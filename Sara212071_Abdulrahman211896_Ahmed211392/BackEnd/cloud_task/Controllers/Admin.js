// controllers/admin.js
const adminService = require('../Services/Admin');

const adminController = {
    createAdmin: async (req, res) => {
        try {
          const { username, password } = req.body;
          const createdAdmin = await adminService.createAdmin(username, password);
    
          res.status(201).send({
            msg: 'Admin account created successfully.',
            admin: createdAdmin,
          });
        } catch (err) {
          res.status(500).send({ error: err.message });
        }
      },
    
  sendNotification: async (req, res) => {
    try {
      const notificationData = req.body.notificationData;
      await adminService.sendNotification(notificationData);
      res.status(200).send({ msg: 'Notification sent successfully.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  suspendUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      await adminService.suspendUser(userId);
      res.status(200).send({ msg: 'User suspended successfully.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  banUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      await adminService.banUser(userId);
      res.status(200).send({ msg: 'User banned successfully.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  suspendArtist: async (req, res) => {
    try {
      const artistId = req.params.artistId;
      await adminService.suspendArtist(artistId);
      res.status(200).send({ msg: 'Artist suspended successfully.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  banArtist: async (req, res) => {
    try {
      const artistId = req.params.artistId;
      await adminService.banArtist(artistId);
      res.status(200).send({ msg: 'Artist banned successfully.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = adminController;
