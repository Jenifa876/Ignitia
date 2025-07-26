const express = require('express');
const Event = require('../models/Event'); // Assuming Event model is in models/Event.js
const shortid = require('shortid');

const router = express.Router();

// Route to create a new event
router.post('/create', async (req, res) => {
  const { eventName } = req.body;

  try {
    const event = new Event({
      eventId: shortid.generate(),  // Generate a unique ID for the event
      name: eventName,
    });

    await event.save();
    res.status(200).json({ success: true, message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ success: false, message: 'Error creating event' });
  }
});

// Route to get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, message: 'Error fetching events' });
  }
});

module.exports = router;
