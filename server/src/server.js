import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

// Load Environment Variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to Database & Start Server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`🚀 Pushpa Fabrics Server running on port ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`================================================`);
  });
};

startServer();
