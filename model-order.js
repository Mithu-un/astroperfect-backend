const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  question: String,
  reply: String,
  userId: String,
  astrologerId: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);