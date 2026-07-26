import Enquiry from '../models/Enquiry.js';
import { sendSuccess, sendError } from '../utils/response.js';
import { sendEnquiryNotification } from '../services/emailService.js';

/**
 * @desc    Submit a new customer enquiry
 * @route   POST /api/enquiry
 * @access  Public
 */
export const createEnquiry = async (req, res, next) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    // Validation
    if (!name || !phone || !message) {
      return sendError(res, 400, 'Please provide name, phone number, and message');
    }

    // Save to database
    const newEnquiry = await Enquiry.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    // Send email notification (non-blocking)
    sendEnquiryNotification(newEnquiry).catch((err) =>
      console.error('[Email Notification Error]', err)
    );

    return sendSuccess(
      res,
      201,
      'Enquiry submitted successfully! We will contact you soon.',
      newEnquiry
    );
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all enquiries
 * @route   GET /api/enquiry
 * @access  Public (for demo/admin)
 */
export const getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Enquiries fetched successfully', {
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete an enquiry by ID
 * @route   DELETE /api/enquiry/:id
 * @access  Public (for demo/admin)
 */
export const deleteEnquiry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const enquiry = await Enquiry.findById(id);

    if (!enquiry) {
      return sendError(res, 404, 'Enquiry not found');
    }

    await enquiry.deleteOne();
    return sendSuccess(res, 200, 'Enquiry deleted successfully', { id });
  } catch (error) {
    next(error);
  }
};
