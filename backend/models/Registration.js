const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true, 
    ref: 'User' // Reference to the User model for userId
  },
  eventName: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
