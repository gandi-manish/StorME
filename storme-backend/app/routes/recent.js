const express = require('express');
const router = express.Router();
const pool = require('../database/db');

// GET /api/recent
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT original_filename, uploaded_at FROM file_metadata ORDER BY uploaded_at DESC LIMIT 5'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Failed to fetch recent files:', err);
    res.status(500).json({ error: 'Failed to fetch recent files' });
  }
});

module.exports = router;
