const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  occupation: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);