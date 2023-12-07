const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [req.body.email, req.body.password];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    if (data.length > 0) {
      req.session.userId = data[0].userid;
      req.session.userName = data[0].username;

      // Send the username in the response
      return res.status(200).json({
        success: true,
        message: "Login Successfully",
        userName: req.session.userName,
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  });
});

module.exports = router;

  
