const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/checkEmail/:email', (req, res) => {
  const emailToCheck = req.params.email;

  // Ensure email is provided
  if (!emailToCheck) {
    return res.status(400).json({ exists: false, message: "Email not provided" });
  }

  const sql = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
  const values = [emailToCheck];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ exists: false, message: "Internal Server Error" });
    }

    const emailExists = data[0].count > 0;
    return res.status(200).json({ exists: emailExists, message: "Email check successful" });
  });
});

module.exports = router;
