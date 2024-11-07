// server/routes/blog.routes.js

import express from 'express';
const router = express.Router();

// Example route to get all blogs
router.get('/', (req, res) => {
  // Fetch blogs from the database (you can use MongoDB queries here)
  res.send('Get all blogs');
});

// Example route to create a new blog
router.post('/', (req, res) => {
  // Logic to create a new blog (save it in the database)
  res.send('Create new blog');
});

export default router;
