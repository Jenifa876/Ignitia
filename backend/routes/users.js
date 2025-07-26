//backend/routes/user.js
const express = require('express');
const User = require('../models/User'); // Assuming User model is in models/User.js
const shortid = require('shortid');

const router = express.Router();

// Route to create a new user
router.post('/create', async (req, res) => {
  const { name, email, phone, department } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If the user does not exist, create a new user
      user = new User({
        userId: shortid.generate(),  // Generate a unique user ID
        name,
        email,
        phone,
        department,
      });

      await user.save();
      res.status(200).json({ success: true, message: 'User created successfully', user });
    } else {
      res.status(400).json({ success: false, message: 'User already exists' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
});

module.exports = router;
