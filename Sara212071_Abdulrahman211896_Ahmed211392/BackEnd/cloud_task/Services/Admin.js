// services/admin.js
const AdminModel = require('../models/Admin');
const UserModel = require('../models/userlogin');
const ArtistModel = require('../models/Artist');


  const adminService = {
    createAdmin: async (username, password) => {
      try {
        const admin = new AdminModel({ username, password });
        const createdAdmin = await admin.save();
        return createdAdmin;
      } catch (err) {
        throw new Error('Failed to create admin');
      }
    },
  
    sendNotification: async (notificationData) => {
      try {
        const { message, ...otherData } = notificationData;
  
        const users = await UserModel.find({ banned: false });
       // Assuming you want to find all artists who are not banned
        const artists = await ArtistModel.find({ banned: false });

        // Send notifications to users
        users.forEach(async (user) => {
          console.log(`Sending notification to user: ${user.username}`);
          await UserModel.findByIdAndUpdate(user._id, {
            $push: { notifications: { message, ...otherData } },
          });
        });
  
        // Send notifications to artists
        artists.forEach(async (artist) => {
          console.log(`Sending notification to artist: ${artist.name}`);
          await ArtistModel.findByIdAndUpdate(artist._id, {
            $push: { notifications: { message, ...otherData } },
          });
        });
  
        console.log('Sending notifications:', notificationData);
        return { message, ...otherData };
      } catch (err) {
        throw new Error('Failed to send notification: ' + err.message);
      }
    },

  
    suspendUser: async (userId) => {
      try {
        // Fetch the user data first
        const user = await UserModel.findById(userId);
  
        if (!user) {
          throw new Error('User not found');
        }
  
        // Update the user's suspended and banned fields
        user.suspended = true;
        user.banned = true;
  
        // Save the changes to the database
        await user.save();
  
        console.log('Suspending user:', userId);
      } catch (err) {
        throw new Error('Failed to suspend user: ' + err.message);
      }
    },
  
    banUser: async (userId) => {
      // Logic to ban a user account
      await UserModel.updateOne({ _id: userId }, { $set: { banned: true } }).exec();
      console.log('Banning user:', userId);
    },
  
    suspendArtist: async (artistId) => {
      // Logic to suspend an artist account
      await ArtistModel.updateOne({ _id: artistId }, { $set: { suspended: true } }).exec();
      console.log('Suspending artist:', artistId);
    },
  
    banArtist: async (artistId) => {
      // Logic to ban an artist account
      await ArtistModel.updateOne({ _id: artistId }, { $set: { banned: true } }).exec();
      console.log('Banning artist:', artistId);
    },
  };
  
  module.exports = adminService;