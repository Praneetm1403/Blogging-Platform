// server/routes/user.routes.js

import express from 'express';
const router = express.Router();

// Example route to get user details
router.get('/:id', (req, res) => {
  // Fetch user details by ID
  res.send(`Get user details for user with ID: ${req.params.id}`);
});

// Example route to update user details
router.put('/:id', (req, res) => {
  // Logic to update user details
  res.send(`Update user details for user with ID: ${req.params.id}`);
});

export default router;
