/* eslint-disable no-unused-vars */
const Response = require('./response');

class ResponseHandler {
  handle(req, res, next) {
    res.status(200);
    if (res.data) {
      res.json(new Response('success', res.message, res.data));
    } else throw new Error('Not Found');
  }

  errorHandler(error, req, res, next) {
    res.status(error.statusCode ? error.statusCode : 500);
    res.json(new Response('failure', error.message, null));
  }
}

module.exports = new ResponseHandler();
