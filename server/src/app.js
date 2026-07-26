import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import enquiryRoutes from './routes/enquiryRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// Security HTTP headers
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL || 'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Allow all in dev mode
      }
    },
    credentials: true,
  })
);

// Rate Limiting (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, error: 'Too many requests from this IP, please try again later.' },
});
app.use('/api', limiter);

// Body Parsing Middleware
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Health Check Route
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    store: 'Pushpa Fabrics API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/enquiry', enquiryRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
