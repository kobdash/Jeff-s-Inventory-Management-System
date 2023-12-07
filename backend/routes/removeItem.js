const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.delete('/removeItem/:itemId', (req, res) => {
  const itemId = req.params.itemId;

  const sql = "DELETE FROM inventory WHERE itemId = ?";
  const values = [itemId];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    // Check if any rows were affected
    if (data.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    return res.status(200).json({ success: true, message: "Item removed successfully" });
  });
});

module.exports = router;
