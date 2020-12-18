var mysql = require('mysql');
// var Sequelize = require('sequelize');
// var db = new Sequelize('chatter', 'root', '');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'chat'
});

connection.connect();
