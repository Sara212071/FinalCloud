const mongoose = require('mongoose');

const LyricsSchema = new mongoose.Schema({
  trackId: { type: mongoose.Schema.Types.ObjectId, ref: 'Track' },
  lyrics: { type: String, required: true },
});

const LyricsModel = mongoose.model('Lyrics', LyricsSchema);

module.exports = LyricsModel;