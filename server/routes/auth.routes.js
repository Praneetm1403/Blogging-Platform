// server/routes/auth.routes.js

import express from 'express';
const router = express.Router();

// Example of an authentication route
router.post('/login', (req, res) => {
  res.send('Login endpoint');
});

router.post('/register', (req, res) => {
  res.send('Register endpoint');
});

export default router;
