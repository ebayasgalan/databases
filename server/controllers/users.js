var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, results) {
      res.json(results);
    });
  },
  post: function (req, res) {
    var params = [req.body[username]];
    models.users.create(params, function(err, results) {
      res.json(results);
    });
  }
};
