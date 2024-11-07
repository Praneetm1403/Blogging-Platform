import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Routes
import authRoutes from './routes/auth.routes.js';
import blogRoutes from './routes/blog.routes.js';
import userRoutes from './routes/user.routes.js';

// Load environment variables
dotenv.config();

// Gracefully handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled promise rejection:', err);
  process.exit(1); // Exit the application
});

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust for your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({ message: err.message, stack: err.stack });
  } else {
    res.status(500).send('Something broke!');
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
