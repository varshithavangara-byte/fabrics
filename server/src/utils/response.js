/**
 * Sends a standardized success JSON response
 */
export const sendSuccess = (res, statusCode = 200, message = 'Success', data = null) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Sends a standardized error JSON response
 */
export const sendError = (res, statusCode = 500, error = 'Internal Server Error', errors = null) => {
  return res.status(statusCode).json({
    success: false,
    error,
    errors,
  });
};
