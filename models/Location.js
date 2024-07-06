// models/Book.js

const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  location_url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

LocationSchema.index({ name: 'text', phone_number: 'text', address: 'text', description: 'text' });


module.exports = Location = mongoose.model('location', LocationSchema);