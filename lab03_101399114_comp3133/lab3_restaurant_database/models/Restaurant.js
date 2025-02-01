const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    street: String,
    zipcode: String
  },
  city: String,
  cuisine: String,
  name: String,
  restaurant_id: String
});

// Explicitly specify the collection name as 'restaurant_db'
module.exports = mongoose.model('Restaurant', RestaurantSchema, 'restaurant_db');
