const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

require('dotenv').config(); // Ensure you have dotenv installed and your .env file properly set up.

const app = express();
const port = 8081;

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.post('/users', async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).send({ message: 'User created successfully', user });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
