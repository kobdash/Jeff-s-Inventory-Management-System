const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/viewItems', (req, res) => {
  const sql = "SELECT * FROM inventory";

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    return res.status(200).json({ success: true, items: data });
  });
});

module.exports = router;
