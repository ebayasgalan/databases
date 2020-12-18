-- schema.sql is a skeleton schema file intended to create and use a database, and create new tables within it.

CREATE DATABASE IF NOT EXISTS chat;

USE chat;


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u source < server/schema.sql
 *  to create the database and the tables.*/


-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users_friends;

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY (room)
);


-- ---
-- Table 'users'
--
-- ---

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'messages'
--
-- ---

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(255),
  room_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (room_id) REFERENCES rooms (id),
  -- FOREIGN KEY (user_id) REFERENCES users (id)
);

-- ---
-- Table 'users_friends'
--
-- ---


CREATE TABLE users_friends (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  friend_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (friend_id) REFERENCES users (id)
);

