const playlistService = require('../Services/Playlist');

const playlistController = {
  getPlaylists: async (req, res) => {
    try {
      const playlists = await playlistService.findAllPlaylists();
      res.send({ playlists });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },

  addPlaylist: async (req, res) => {
    const playlistInfo = {
      name: req.body.name,
      description: req.body.description,
      creator: req.body.creator,
      
    }

    try {
      const createdPlaylist = await playlistService.addPlaylist(playlistInfo);
      res.status(201).send({
        msg: 'Playlist created',
        playlistId: createdPlaylist._id,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },



DeletePlaylist: async (req,res) => {
  const playlistInfo = req.params.playlistInfo;
  try{
  const delPlaylist = await playlistService.DeletePlaylist(playlistInfo);
  res.send({
    delPlaylist,
      msg: 'The Playlist is deleted successfully.'
  });}
  catch (err) {
      return res.status(500).send({
          error: err.message
      });
  }
},


editPlaylist: async (req, res) => {
  const playlistId = req.body.playlistId; // Assuming you have a playlistId in the route parameter
  const updatedInfo = {
    name: req.body.name,
    description: req.body.description,
    // Add other fields to update as needed
  };

  try {
    const editedPlaylist = await playlistService.editPlaylist(playlistId, updatedInfo);
    res.send({
      editedPlaylist,
      msg: 'The Playlist is edited successfully.',
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
},

};
module.exports = playlistController;

