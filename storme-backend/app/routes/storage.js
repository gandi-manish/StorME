const express = require('express');
const router = express.Router();
const pool = require('../database/db');

// GET /api/storage - returns total used storage in bytes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT SUM(size) AS total FROM file_metadata');
    const totalUsed = result.rows[0].total || 0;
    const totalLimit = 50 * 1024 * 1024 * 1024; // 50 GB in bytes

    res.json({ used: totalUsed, limit: totalLimit });
  } catch (err) {
    console.error('❌ Error calculating storage:', err);
    res.status(500).json({ error: 'Failed to fetch storage usage' });
  }
});

module.exports = router;
