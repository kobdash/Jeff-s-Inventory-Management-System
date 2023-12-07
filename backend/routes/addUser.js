const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/addUser', (req, res) => {
  const { name, email, password } = req.body;

  // Ensure required fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  const values = [name, email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    return res.status(200).json({ success: true, message: "User added successfully" });
  });
});

module.exports = router; 
