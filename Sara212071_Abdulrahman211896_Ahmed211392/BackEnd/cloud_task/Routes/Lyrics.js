// Routes/Lyrics.js
const { Router } = require('express');
const lyricsController = require('../Controllers/Lyrics'); // Make sure the path is correct

const lyricsRouter = Router();

// Endpoint to get lyrics for a specific track
lyricsRouter.get('/', lyricsController.getLyrics);

// Endpoint to add lyrics for a specific track
lyricsRouter.post('/', lyricsController.addLyrics);

// Endpoint to update lyrics for a specific track
lyricsRouter.put('/', lyricsController.updateLyrics);

// Endpoint to delete lyrics for a specific track
lyricsRouter.delete('/', lyricsController.deleteLyrics);

module.exports = lyricsRouter;
