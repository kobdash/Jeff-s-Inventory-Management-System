// session.js
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const db = require('./db');

const sessionStore = new MySQLStore({
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
  expiration: 20 * 60 * 1000, // 20 minutes
}, db.promise());

const sessionConfig = {
  secret: 'sdfsdfsdfs',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 20 * 60 * 1000, // 20 minutes
  },
};

module.exports = { sessionConfig, sessionStore };
