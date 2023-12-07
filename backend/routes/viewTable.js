const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/viewTable', (req, res) => {
    const sql = "SELECT `userdata` FROM `userdata` WHERE `userdataid` = 2";
  
    db.query(sql, (err, data) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
      }
  
      // Assuming data is an array and you want the first item
      const userData = data.length > 0 ? data[0] : null;
  
      return res.status(200).json({ success: true, items: userData });
    });
  });
  
module.exports = router;