const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Serve static files from frontend/src
app.use(express.static(path.join(__dirname, '../frontend/src')));

// Route to serve sample.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/sample.html'));
});

// API example (optional)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
