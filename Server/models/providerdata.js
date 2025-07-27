// models/Provider.js
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  streetName: {
    type: String,
    required: true
  },
  city: String,
  state: String,
  zipCode: String,
  chargerType: {
    type: String,
    enum: ['Nexon', 'MgHector', 'Ola', 'Bmw'],
    required: true
  },
  availabilityHours: String,
  ratePerHour: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Provider', providerSchema);