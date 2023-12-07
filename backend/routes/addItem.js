// server-side code

const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.post('/addItem', (req, res) => {
  const { categoryName, itemName, quantity } = req.body;

  // Ensure required fields are provided
  if (!categoryName || !itemName || !quantity) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const sql = "INSERT INTO inventory (categoryName, itemName, quantity, created_at, updated_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
  const values = [categoryName, itemName, quantity];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    return res.status(200).json({ success: true, message: "Item added successfully" });
  });
});

module.exports = router;





