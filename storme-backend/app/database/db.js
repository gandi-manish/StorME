// app/database/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'storme_db',
  password: 'secret123', // 🛑 replace with your actual password
  port: 5432,
});

module.exports = pool;
