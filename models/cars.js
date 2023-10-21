const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarsSchema = Schema({
  platenumber: String,
  brand: String,
  state: Boolean,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('cars', CarsSchema);