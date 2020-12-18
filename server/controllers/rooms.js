var models = require('../models');

module.exports = {
  get: function (req, res) {
    Room.findAll()
      .complete(function(err, results) {
        res.json(results);
      });
  },
  post: function (req, res) {
    Room.create({room: req.body[room]})
      .complete(function(err, room) {
        res.sendStatus(201);
      });
    // var params = [req.body[room]];
    // models.rooms.create(params, function(err, results) {
    //   res.json(results);
    // });
  }
};

