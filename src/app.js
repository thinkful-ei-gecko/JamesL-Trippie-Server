require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const tripsRouter = require('./trips/trips-router');
const plansRouter = require('./plans/plans-router');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/trips', tripsRouter);
app.use('/api/plans', plansRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

app.use(function errorHandler(error, req, res, next)  {
  let response;
  if(NODE_ENV === 'production') {
    response = {error: {message: 'server error'}}
  }
  else {
    console.log(error)
    response = {message: error.message, error}
  }
  res.status(500).json(response)
});

module.exports = app;