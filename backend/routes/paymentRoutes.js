//backend
const express = require('express');
const multer = require('multer');
const path = require('path');
const Payment = require('../models/Payment');
const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/upload-payment', upload.single('screenshot'), async (req, res) => {
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
});

module.exports = router;
