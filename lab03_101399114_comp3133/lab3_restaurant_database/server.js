const express = require('express');
const connectDB = require('./db');
const restaurantRoutes = require('./routes/restaurant');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api', restaurantRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
