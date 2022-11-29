const express = require('express');

const router = express.Router();

const Message = require('../models/messages');

router.post('/api/sendMessage/:id', async (req, res) => {
  try {
    const message = await Message.create({
      sender: req.params.id,
      recipient: req.body.recipient,
      title: req.body.title,
      messageBody: req.body.messageBody,
      sentTime: new Date().toLocaleString(),
    });
    return res.status(202).json(message);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get('/api/getMessages/:id', async (req, res) => {
  const message = await Message.find({ recipient: req.params.id });
  res.json(message);
});

router.get('/api/getMessages/', async (req, res) => {
  const message = await Message.find();
  res.json(message);
});

module.exports = router;
