const express = require('express');
const Registration = require('../models/Registration'); // Assuming Registration model is in models/Registration.js
const User = require('../models/User'); // Assuming User model is in models/User.js
const Event = require('../models/Event'); // Assuming Event model is in models/Event.js

const router = express.Router();

// Route to register a user for an event
router.post('/register', async (req, res) => {
  const { name, email, phone, department, eventName } = req.body;

  try {
    // Check if the user already exists by email
    let user = await User.findOne({ email });

    if (!user) {
      // If the user does not exist, create a new user and save to the User collection
      user = new User({
        name,
        email,
        phone,
        department,
      });
      await user.save();
    }

    // Check if the user has already registered for the event
    const existingRegistration = await Registration.findOne({ userId: user._id, eventName });
    if (existingRegistration) {
      return res.status(400).json({ success: false, message: 'User has already registered for this event.' });
    }

    // Find the event in the Event collection
    const event = await Event.findOne({ name: eventName });

    if (!event) {
      // If the event doesn't exist, create a new event (optional)
      const newEvent = new Event({ name: eventName });
      await newEvent.save();
    }

    // Now save the registration
    const registration = new Registration({
      userId: user._id,  // Link to user by ID
      name,              // Name of the registrant
      eventName,         // The event they're registering for
    });

    await registration.save();  // Save to the Registration collection

    res.status(200).json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Error during registration' });
  }
});

// Route to get all registrations for a specific event
router.get('/:eventName', async (req, res) => {
  const { eventName } = req.params;

  try {
    // Fetch all registrations for the specified event
    const registrations = await Registration.find({ eventName });

    if (!registrations || registrations.length === 0) {
      return res.status(404).json({ success: false, message: 'No registrations found for this event.' });
    }

    res.status(200).json(registrations);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ success: false, message: 'Error fetching registrations' });
  }
});

module.exports = router;
