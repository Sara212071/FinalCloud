const PlaylistModel = require('../models/Playlist');

const playlistService = {
  findAllPlaylists: async () => {
    try {
      const playlists = await PlaylistModel.find().populate('creator').populate('tracks');
      return playlists;
    } catch (err) {
      throw new Error('No playlists retrieved');
    }
  },

  addPlaylist: async (playlistInfo) => {
    try {
      const playlist = new PlaylistModel(playlistInfo);
      const createdPlaylist = await playlist.save();
      return createdPlaylist;
    } catch (err) {
      throw new Error('Failed to create playlist');
    }
  },

  DeletePlaylist: async (playlistInfo) => {
    try {
      await PlaylistModel.deleteOne({ playlistInfo });
    } catch (err) {
      throw new Error('Could not delete the playlist.');
    }
},

editPlaylist: async (playlistId, updatedInfo) => {
  try {
    const editedPlaylist = await PlaylistModel.findByIdAndUpdate(
      playlistId,
      { $set: updatedInfo },
      { new: true }
    );

    if (!editedPlaylist) {
      throw new Error('Playlist not found');
    }

    return editedPlaylist;
  } catch (err) {
    throw new Error('Failed to edit playlist');
  }
},

};



module.exports = playlistService;
