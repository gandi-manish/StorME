// === app/routes/upload.js ===
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('../database/db');

const router = express.Router();
const uploadPath = '/home/testmachine/StorME/Storage';
const MAX_SIZE_MB = 50;

// Ensure storage directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Filename format: project_team_userid.ext
const namePattern = /^[\w-]+_[\w-]+_[\w-]+\.(docx|pdf|xlsx|pptx|png|jpg|jpeg|txt)$/i;

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_SIZE_MB * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!namePattern.test(file.originalname)) {
      return cb(new Error('❌ Invalid filename format.'));
    }
    cb(null, true);
  }
});

// 🔐 Upload route (no optional chaining)
router.post('/', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const { originalname, filename, size, mimetype } = req.file;
  const uploaded_at = new Date();

  try {
    await pool.query(`
      INSERT INTO file_metadata (original_filename, stored_filename, size, mimetype, uploaded_at)
      VALUES ($1, $2, $3, $4, $5)
    `, [originalname, filename, size, mimetype, uploaded_at]);

    return res.status(200).json({ message: '✅ File uploaded and metadata stored.' });
  } catch (err) {
    console.error('❌ Database insertion error:', err);

    // Clean up uploaded file if DB fails
    fs.unlinkSync(path.join(uploadPath, filename));
    return res.status(500).json({ error: 'Upload succeeded, but DB insert failed.' });
  }
});

// 📥 Secure file download route
router.get('/download/:filename', (req, res) => {
  const stored_filename = req.params.filename;
  const filePath = path.join(uploadPath, stored_filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) return res.status(404).json({ error: 'File not found' });
    res.download(filePath);
  });
});

// ❌ Delete file + metadata
router.delete('/delete/:filename', async (req, res) => {
  const stored_filename = req.params.filename;
  const filePath = path.join(uploadPath, stored_filename);

  try {
    fs.unlinkSync(filePath);
    await pool.query('DELETE FROM file_metadata WHERE stored_filename = $1', [stored_filename]);
    return res.status(200).json({ message: '✅ File deleted successfully.' });
  } catch (err) {
    console.error('❌ File deletion error:', err);
    return res.status(500).json({ error: 'Failed to delete file or metadata.' });
  }
});

module.exports = router;
