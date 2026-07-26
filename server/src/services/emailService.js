import nodemailer from 'nodemailer';

/**
 * Creates Nodemailer transporter using SMTP credentials from environment variables
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

/**
 * Sends notification email to store owner when a new enquiry is submitted
 */
export const sendEnquiryNotification = async (enquiryData) => {
  try {
    // If credentials are empty/default, skip email sending gracefully
    if (!process.env.EMAIL_USER || process.env.EMAIL_USER.includes('your_email')) {
      console.log('[Nodemailer] Email credentials not set in .env. Skipping email dispatch.');
      return false;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `"Pushpa Fabrics Website" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
      subject: `✨ New Website Enquiry: ${enquiryData.subject} - ${enquiryData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #FFF8F3; border: 2px solid #8B0000; border-radius: 8px;">
          <h2 style="color: #8B0000;">New Enquiry Received — Pushpa Fabrics</h2>
          <hr style="border: 1px solid #D4AF37;" />
          <p><strong>Customer Name:</strong> ${enquiryData.name}</p>
          <p><strong>Phone:</strong> ${enquiryData.phone}</p>
          <p><strong>Email:</strong> ${enquiryData.email || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${enquiryData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #FFF; padding: 15px; border-radius: 4px; border: 1px solid #E0E0E0;">
            ${enquiryData.message}
          </div>
          <br />
          <p style="font-size: 0.85rem; color: #666;">This message was automatically generated from the Pushpa Fabrics website contact form.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Nodemailer] Email notification sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`[Nodemailer Error] Failed to send email: ${error.message}`);
    return false;
  }
};
