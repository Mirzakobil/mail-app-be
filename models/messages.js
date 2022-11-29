const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  messageBody: {
    type: String,
    required: true,
  },
  sentTime: Date,
});

module.exports = mongoose.model('Messages', MessageSchema);
