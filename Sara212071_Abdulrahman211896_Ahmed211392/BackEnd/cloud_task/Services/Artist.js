// services/ArtistService.js
const ArtistModel = require('../models/Artist');

const artistService = {
  findAllArtists: async () => {
    try {
      const artists = await ArtistModel.find().populate('tracks').populate('albums');
      return artists;
    } catch (err) {
      throw new Error('No artists retrieved');
    }
  },

  addArtist: async (artistInfo) => {
    try {
      const artist = new ArtistModel(artistInfo);
      const createdArtist = await artist.save();
      return createdArtist;
    } catch (err) {
      throw new Error('Failed to create artist');
    }
  },
};

module.exports = artistService;
