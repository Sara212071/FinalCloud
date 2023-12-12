const lyricsService = require('../Services/Lyrics');

const lyricsController = {
  getLyrics: async (req, res) => {
    try {
      const trackId = req.params.trackId;
      const lyrics = await lyricsService.getLyrics(trackId);
      res.status(200).send({ lyrics });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
  addLyrics: async (req, res) => {
    try {
      const trackId = req.params.trackId;
      const newLyrics = req.body.newLyrics;
      const lyrics = await lyricsService.addLyrics(trackId, newLyrics);
      res.status(201).send({ msg: 'Lyrics added successfully', lyrics });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
  updateLyrics: async (req, res) => {
    try {
      const trackId = req.params.trackId;
      const updatedLyrics = req.body.updatedLyrics;
      const lyrics = await lyricsService.updateLyrics(trackId, updatedLyrics);
      res.status(200).send({ msg: 'Lyrics updated successfully', lyrics });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  deleteLyrics: async (req, res) => {
    try {
      const trackId = req.params.trackId;
      await lyricsService.deleteLyrics(trackId);
      res.status(200).send({ msg: 'Lyrics deleted successfully' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = lyricsController;