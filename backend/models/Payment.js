const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: String,
  screenshotPath: String,
  verified: { type: Boolean, default: false },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', PaymentSchema);
