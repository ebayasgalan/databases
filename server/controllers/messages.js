var models = require('../models');

module.exports = {
  get: function (req, res) {
    if (req.method === 'GET') {
      res.statusCode = 200;
      res.end('Get method ended');
    }
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};
