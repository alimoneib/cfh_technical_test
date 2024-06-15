const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Authorization,Content-Type,responseType'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const User = require('./user');
const Product = require('./product');
const Order = require('./order');

const Middleware = require('./middlewares');

app.use('/users/', User.Router, Middleware.ResponseHandler.handle);
app.use('/products/', Product.Router, Middleware.ResponseHandler.handle);
app.use('/orders/', Order.Router, Middleware.ResponseHandler.handle);

app.use(Middleware.ResponseHandler.errorHandler);

module.exports = app;
