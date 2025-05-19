// === BACKEND ROUTE: files.js ===

const express = require('express');
const pool = require('../database/db');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// List all files
router.get('/list', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM file_metadata ORDER BY uploaded_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('List error:', err);
    res.status(500).json({ error: 'Failed to fetch files' });
  }
});

// Recent 3 uploads for dashboard
router.get('/recent', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM file_metadata ORDER BY uploaded_at DESC LIMIT 3');
    res.json(result.rows);
  } catch (err) {
    console.error('Recent fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch recent uploads' });
  }
});

// File download
router.get('/download/:filename', (req, res) => {
  const filePath = path.join('/home/testmachine/StorME/Storage', req.params.filename);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return res.status(404).json({ error: 'File not found' });
    res.download(filePath);
  });
});

// File delete
router.delete('/delete/:filename', async (req, res) => {
  const filePath = path.join('/home/testmachine/StorME/Storage', req.params.filename);
  try {
    fs.unlinkSync(filePath);
    await pool.query('DELETE FROM file_metadata WHERE stored_filename = $1', [req.params.filename]);
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error('File deletion error:', err);
    res.status(500).json({ error: 'Failed to delete file or metadata' });
  }
});

module.exports = router;
