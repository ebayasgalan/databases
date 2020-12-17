var db = require('../db');

module.exports = {
  getAll: function () {
    db.query('SELECT message FROM messages', function (err, rows, fields) {
      if (err) { throw err; }

      console.log('The query result is: ', rows[0]);
      return rows[0];
    });
    console.log('hello from getAll func');
    // db.getCollection('SELECT * FROM messages');
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};

module.exports.getAll();