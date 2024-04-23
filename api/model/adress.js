// models/Location.js

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  ip_from: {
    type: Number,
    required: true
  },
  ip_to: {
    type: Number,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  country_name: {
    type: String,
    required: true
  },
  region_name: {
    type: String
  },
  city_name: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  zip_code: {
    type: Number
  },
  time_zone: {
    type: String
  }
});

const LocationModel = mongoose.model('adresses', locationSchema);

module.exports = LocationModel;
