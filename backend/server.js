const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection using Atlas URI from .env
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(express.static(path.join(__dirname, '../frontend/src')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Routes imports
const userRoutes = require('./routes/users');
const registrationRoutes = require('./routes/registrations');
const eventRoutes = require('./routes/events');

// API routes
app.use('/api/users', userRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/events', eventRoutes);

// Payment Upload Route (new)
const Payment = require('./models/Payment');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

app.post('/api/upload-payment', upload.single('screenshot'), async (req, res) => {
    try {
        const { name, email, event } = req.body;
        const filePath = req.file.path;

        const payment = new Payment({
            name,
            email,
            event,
            screenshotPath: filePath,
            verified: false,
        });

        await payment.save();
        res.json({ message: 'Payment uploaded successfully!' });
    } catch (error) {
        console.error('Upload failed:', error);
        res.status(500).json({ message: 'Upload failed' });
    }
});

// Route to serve sample.html (optional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/sample.html'));
});

// Test route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
