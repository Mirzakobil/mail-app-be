require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

const message = require('./services/messages');

require('./database');

const logger = (req, res, next) => {
  console.log(
    `${new Date().toString()} - ${req.method} ${req.path} ${req.originalUrl}`
  );
  next();
};
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(message);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
