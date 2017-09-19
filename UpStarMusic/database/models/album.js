// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTrack: Number,
  image: String,
  revenue: Number
});

const Album = mongoose.model('album', AlbumSchema);

module.exports = Album;