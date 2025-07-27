// routes/provider.js
const express = require('express');
const router = express.Router();
const Provider = require('../models/providerdata');
const User = require('../models/user');
const auth = require('../middleware/auth');

// Register as provider
router.post('/register-provider', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingProvider = await Provider.findOne({ userId: req.userId });
    if (existingProvider) {
      return res.status(400).json({ message: 'User is already registered as a provider' });
    }

    const emailExists = await Provider.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email is already registered as a provider' });
    }

    const provider = new Provider({
      ...req.body,
      userId: req.userId,
      email: user.email,
      fullName: user.name
    });

    await provider.save();

    res.status(201).json({
      message: 'Successfully registered as provider',
      provider: {
        id: provider._id,
        fullName: provider.fullName,
        email: provider.email,
        phoneNumber: provider.phoneNumber,
        address: provider.address,
        chargerType: provider.chargerType,
        ratePerHour: provider.ratePerHour
      }
    });

  } catch (error) {
    console.error('Provider registration error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Provider with this email already exists' });
    }
    res.status(500).json({ message: 'Server error during provider registration' });
  }
});

router.get('/provider-profile', auth, async (req, res) => {
  try {
    const provider = await Provider.findOne({ userId: req.userId });
    if (!provider) {
      return res.status(404).json({ message: 'Provider profile not found' });
    }

    res.json({ provider });
  } catch (error) {
    console.error('Get provider profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/provider-profile', auth, async (req, res) => {
  try {
    const provider = await Provider.findOne({ userId: req.userId });
    if (!provider) {
      return res.status(404).json({ message: 'Provider profile not found' });
    }

    const updates = ['phoneNumber', 'address', 'streetName', 'city', 'state', 
                    'zipCode', 'chargerType', 'ratePerHour', 'availabilityHours'];
    
    updates.forEach(field => {
      if (req.body[field] !== undefined) {
        provider[field] = req.body[field];
      }
    });

    await provider.save();
    res.json({ message: 'Provider profile updated successfully', provider });
  } catch (error) {
    console.error('Update provider profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;