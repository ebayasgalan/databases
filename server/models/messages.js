var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'select messages.id, messages.message users.user rooms.room_id from messages \
                    left outer join users on (messages.user_id = users.id) AND (messages.room_id = users.id) order by messages.id desc';
    db.query(queryStr, function(err, results) {
      callback(results);
    });
  },
  create: function (params, callback) {
    var queryStr = 'insert into messages(text, user_id, room_id) \
    values (?, (select id from users where username = ? limit 1), (select id from rooms where room = ? limit 1)';
    db.query(queryStr, params, function(err, results) {
      callback(results);
    });
  }
};
