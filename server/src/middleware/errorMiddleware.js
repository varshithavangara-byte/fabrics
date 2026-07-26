import { sendError } from '../utils/response.js';

/**
 * Global 404 Route Not Found Middleware
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Route Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Centralized Express Error Handling Middleware
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.error(`[Error Handler] ${err.stack}`);

  return sendError(
    res,
    statusCode,
    err.message || 'Internal Server Error',
    process.env.NODE_ENV === 'development' ? err.stack : null
  );
};
