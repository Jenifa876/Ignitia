const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Parse incoming JSON

// MongoDB Connection using Atlas URI from .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Serve static files from frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Serve static files from frontend/src
app.use(express.static(path.join(__dirname, '../frontend/src')));

// Mongoose model (just needed for /api/register, optional)
const User = require('./models/User');

// Route to serve sample.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/sample.html'));
});

// Test route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Basic user registration test route
app.post('/api/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed', error: err });
    }
});

// Load API routes from /routes/User.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
