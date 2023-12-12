// services/LyricsService.js
const LyricsModel = require('../models/Lyrics');

const lyricsService = {
  getLyrics: async (trackId) => {
    try {
      const lyrics = await LyricsModel.findOne({ trackId });
      return lyrics ? lyrics.lyrics : null;
    } catch (err) {
      throw new Error('Failed to retrieve lyrics');
    }
  },

  addLyrics: async (trackId, newLyrics) => {
    try {
      const existingLyrics = await LyricsModel.findOne({ trackId });

      if (existingLyrics) {
        throw new Error('Lyrics already exist for this track');
      }

      const lyrics = new LyricsModel({ trackId, lyrics: newLyrics });
      await lyrics.save();

      return lyrics;
    } catch (err) {
      throw new Error('Failed to add lyrics');
    }
  },

  updateLyrics: async (trackId, updatedLyrics) => {
    try {
      const lyrics = await LyricsModel.findOne({ trackId });

      if (!lyrics) {
        throw new Error('Lyrics not found');
      }

      lyrics.lyrics = updatedLyrics;
      await lyrics.save();

      return lyrics;
    } catch (err) {
      throw new Error('Failed to update lyrics');
    }
  },

  deleteLyrics: async (trackId) => {
    try {
      const lyrics = await LyricsModel.findOne({ trackId });

      if (!lyrics) {
        throw new Error('Lyrics not found');
      }

      await lyrics.remove();

      return { msg: 'Lyrics deleted successfully' };
    } catch (err) {
      throw new Error('Failed to delete lyrics');
    }
  },
};

module.exports = lyricsService;
