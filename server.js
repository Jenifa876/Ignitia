const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection String
const MONGODB_URI = 'mongodb+srv://parthiban:parthiban@cluster0.yaslbwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Basic error handling
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});
