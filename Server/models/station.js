// models/station.js
const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  stationName: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],  // [longitude, latitude]
      required: true
    }
  },  
  provider_info:{
    name:String,
    charger_type:String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

stationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Station', stationSchema);