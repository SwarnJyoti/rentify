const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  seller: {
    type: String,
    required: true
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
