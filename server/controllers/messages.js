var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function(err, results) {
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body[message], req.body[username], req.body[room]];
    models.messages.create(params, function(err, results) {
      res.json(results);
    });
  } // a function which handles posting a message to the database
};
