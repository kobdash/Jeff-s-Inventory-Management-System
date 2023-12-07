// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "jeff",
  password: "jeff",
  database: "JIMS",
});

module.exports = db;
