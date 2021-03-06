var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      callback(results);
    });
  },
  create: function (params, callback) {
    var queryStr = 'insert into users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      callback(results);
    });
  }
};
