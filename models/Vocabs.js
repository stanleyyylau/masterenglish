const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VocabsSchema = new mongoose.Schema({
  spelling: String,
  meaning: String,
  source: String,
  memory_trick: String,
  created_at: {
    type: Date,
    default: new Date()
  }
})

var Vocabs = mongoose.model('Vocabs', VocabsSchema);

module.exports = Vocabs;
