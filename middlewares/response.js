module.exports = class Response {
  constructor(status, msg, body) {
    this.status = status;
    this.msg = msg;
    this.body = body;
  }
};
