const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');


router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/restaurants/Delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'Delicatessen',
      city: { $ne: 'Brooklyn' }
    })
      .select('cuisine name city -_id')
      .sort({ name: 1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/restaurants', async (req, res) => {
  try {
    if (req.query.sortBy) {
      const sortOrder = req.query.sortBy === 'DESC' ? -1 : 1;
      const restaurants = await Restaurant.find()
        .select('_id restaurant_id cuisines name city')
        .sort({ restaurant_id: sortOrder });
      res.json(restaurants);
    } else {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
