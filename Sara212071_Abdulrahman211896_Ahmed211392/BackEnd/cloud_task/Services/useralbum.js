// services/AlbumService.js
const AlbumModel = require('../models/useralbum');

const albumService = {
  findAllAlbums: async () => {
    try {
      const albums = await AlbumModel.find();
      return albums;
    } catch (err) {
      throw new Error('No albums retrieved');
    }
  },

  addAlbum: async (albumInfo) => {
    try {
      const album = new AlbumModel(albumInfo);
      const createdAlbum = await album.save();
      return createdAlbum;
    } catch (err) {
      throw new Error('Failed to create album');
    }
  },
};

module.exports = albumService;