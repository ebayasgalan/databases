var mysql = require('mysql');
var Sequelize = require('sequelize');
const orm = new Sequelize('chat', 'root', 'password', {
  host: 'localhost3000',
  dialect: 'mysql'
});

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
