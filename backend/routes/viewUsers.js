// routes/viewUsers.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/viewUsers', (req, res) => {
  const sql = "SELECT username, email FROM users"; // Adjust the SQL query based on your actual database schema
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json({ users: data });
  });
});

module.exports = router;
