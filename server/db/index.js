var mysql = require('mysql');
var Sequelize = require('sequelize');
var orm = new Sequelize('chat', 'root', 'mysqlMarines#1');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Message', {
  message: Sequelize.STRING,
});

var Room = orm.define('Room', {
  room: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

Room.hasMany(Message);
Message.belongsTo(Room);

exports.User = User;
exports.Message = Message;
exports.Room = Room;
