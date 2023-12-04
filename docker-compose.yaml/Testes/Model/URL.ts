const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  originURL: { type: String, required: true },
  shortURL: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const URLModel = mongoose.model('URL', urlSchema);

module.exports = URLModel;
