const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentsSchema = Schema({
  rentnumber: Number,
  username: String,
  platenumber: String,
  rentdate: Date,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('rents', RentsSchema);