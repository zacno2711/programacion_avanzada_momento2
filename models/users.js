const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = Schema({
  username: String,
  name: String,
  password: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', UsersSchema);