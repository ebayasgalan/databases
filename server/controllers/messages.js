var models = require('../models');

module.exports = {
  get: function (req, res) {
    Message.findAll({include: [User]})
      .complete(function(err, results) {
        res.json(results);
      });
    // models.messages.getAll(function(err, results) {
    //   res.json(results);
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let userid;
    let roomid;
    User.findOrCreate({username: req.body[username]})
      .complete(function(err, user) {
        userid = user.id;
      });
    Room.findOrCreate({room: req.body[room]})
      .complete(function(err, room) {
        roomid = room.id;
      });
    var params = {
      text: req.body[text],
      userid: req.body[username],
      roomid: req.body[room]
    };
    Message.create(params)
      .complete(function(err, results) {
        res.sendStatus(201);
      });
  } // a function which handles posting a message to the database
};
