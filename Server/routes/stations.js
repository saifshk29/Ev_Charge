// routes/stations.js
const express = require('express');
const router = express.Router();
const Station = require('../models/station');

// Get Request to get all stations
router.get('/', async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new station
router.post('/', async (req, res) => {
  const station = new Station(req.body);
  try {
    const newStation = await station.save();
    res.status(201).json(newStation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Find by station ID
router.get('/:id', async (req, res) => {
  try{
    const station = await Station.findById(req.params.id);
    res.status(201).json(station);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Find nearby stations
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, radius = 5000 } = req.query; // radius in meters
    
    const stations = await Station.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: parseInt(radius)
        }
      }
    });
    
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Add booking endpoint
router.post('/book', async (req, res) => {
  try {
    const { stationId, chargerId, startTime, duration, userId, price } = req.body;
    
    // Add your booking logic here
    // This should update the station's availability and create a booking record
    
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;