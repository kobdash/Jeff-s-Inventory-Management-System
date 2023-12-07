const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.put('/updateItem/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  const { quantity } = req.body;

  // Ensure required fields are provided
  if (!quantity) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const sql = "UPDATE inventory SET quantity = ? WHERE itemId = ?";
  const values = [quantity, itemId];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    // Check if any rows were affected
    if (data.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    return res.status(200).json({ success: true, message: "Item updated successfully" });
  });
});

module.exports = router;
