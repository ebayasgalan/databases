var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.rooms.getAll(function(err, results) {
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [req.body[room]];
    models.rooms.create(params, function(err, results) {
      res.json(results);
    });
  }
};

