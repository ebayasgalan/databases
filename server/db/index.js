var mysql = require('mysql');
var mysqlPassword = require('../../client/env/config');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost:3000',
  user: 'root',
  password: mysqlPassword,
  database: 'chat'
});

connection.connect();

// connection.query('SELECT message FROM messages', function (err, rows, fields) {
//   if (err) { throw err; }

//   console.log('The query result is: ', rows[0]);
// });

module.exports = connection;