import mongoose from 'mongoose';

/**
 * Connects to MongoDB database using Mongoose
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Modern mongoose options are enabled by default in v8+
    });
    console.log(`[MongoDB] Database connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error] Connection failed: ${error.message}`);
    // In production, keep server alive or handle retry
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;
