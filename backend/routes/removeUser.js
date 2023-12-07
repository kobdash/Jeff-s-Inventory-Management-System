// routes/removeUser.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.delete('/removeUser/:email', (req, res) => {
  const userEmail = req.params.email;

  // Ensure userEmail is provided
  if (!userEmail) {
    return res.status(400).json({ error: "User email not provided" });
  }

  const sql = "DELETE FROM users WHERE email = ?";
  const values = [userEmail];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any rows were affected (user with given email exists)
    if (data.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ success: true, message: "User removed successfully" });
  });
});

module.exports = router;
