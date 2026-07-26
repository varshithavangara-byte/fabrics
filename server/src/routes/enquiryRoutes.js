import express from 'express';
import {
  createEnquiry,
  getEnquiries,
  deleteEnquiry,
} from '../controllers/enquiryController.js';

const router = express.Router();

// POST /api/enquiry - Submit enquiry
router.post('/', createEnquiry);

// GET /api/enquiry - List all enquiries
router.get('/', getEnquiries);

// DELETE /api/enquiry/:id - Delete enquiry
router.delete('/:id', deleteEnquiry);

export default router;
