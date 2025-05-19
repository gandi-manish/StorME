// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

// ✅ Corrected route imports
const uploadRoute = require('./app/routes/upload');
const recentRoute = require('./app/routes/recent');
const storageRoute = require('./app/routes/storage');
const filesRoute = require('./app/routes/files');

const app = express();
const PORT = 5000;

// ✅ CORS setup to allow frontend requests
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Body parser middleware
app.use(express.json());

// ✅ Session and Keycloak middleware
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({ store: memoryStore });

app.use(session({
  secret: 'storme-secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
}));

app.use(keycloak.middleware());

// ✅ Secured routes
app.use('/api/upload', uploadRoute); // Unprotected to simplify SSO CORS issue
app.use('/api/recent', keycloak.protect(), recentRoute);
app.use('/api/storage', keycloak.protect(), storageRoute);
app.use('/api/files', filesRoute);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
