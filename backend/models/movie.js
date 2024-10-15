const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);
