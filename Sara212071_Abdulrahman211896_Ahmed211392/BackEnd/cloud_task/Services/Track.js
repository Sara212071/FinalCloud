
const TrackModel = require('../models/Track');

const trackService = {
  findAllTracks: async () => {
    try {
      const tracks = await TrackModel.find().populate('album');
      return tracks;
    } catch (err) {
      throw new Error('No tracks retrieved');
    }
  },

  addTrack: async (trackInfo) => {
    try {
      const track = new TrackModel(trackInfo);
      const createdTrack = await track.save();
      return createdTrack;
    } catch (err) {
      throw new Error('Failed to create track');
    }
  },

  likeTrack: async (trackId, userId) => {
    try {
      const track = await TrackModel.findById(trackId);

      if (!track) {
        throw new Error('Track not found');
      }

      if (!track.likes.includes(userId)) {
        track.likes.push(userId);
        await track.save();
      }

      return track;
    } catch (err) {
      throw new Error(`Failed to like track: ${err.message}`);
    }
  },

  unlikeTrack: async (trackId, userId) => {
    try {
      const track = await TrackModel.findById(trackId);

      if (!track) {
        throw new Error('Track not found');
      }

      track.likes = track.likes.filter((likedUserId) => likedUserId.toString() !== userId.toString());
      await track.save();

      return track;
    } catch (err) {
      throw new Error(`Failed to unlike track: ${err.message}`);
    }
  },
};

module.exports = trackService;