import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await axios.post(`${API_BASE_URL}/enquiry`, formData);
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your enquiry has been received. We will get back to you shortly.',
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'General Enquiry',
          message: '',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errMsg = error.response?.data?.error || 'Failed to send message. Please try again or WhatsApp us directly.';
      setStatus({ type: 'error', message: errMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ padding: '36px', border: '1px solid var(--border-light)' }}>
      <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '10px' }}>
        Send Us a Message
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '28px' }}>
        Have questions about custom tailoring, bulk orders, or bridal consultations? Fill out the form below.
      </p>

      {status.message && (
        <div
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '24px',
            fontSize: '0.92rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: status.type === 'success' ? '#E8F5E9' : '#FFEBEE',
            color: status.type === 'success' ? '#2E7D32' : '#C62828',
            border: status.type === 'success' ? '1px solid #A5D6A7' : '1px solid #EF9A9A',
          }}
        >
          {status.type === 'success' ? <FaCheckCircle size={18} /> : <FaExclamationCircle size={18} />}
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. priya@gmail.com"
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', background: '#FFF' }}
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Blouse Tailoring">Blouse Tailoring</option>
              <option value="Bridal Collection">Bridal Collection</option>
              <option value="Dress Rental">Dress Rental</option>
              <option value="Tailoring Classes">Tailoring Classes</option>
              <option value="Bulk Fabric Order">Bulk Fabric Order</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
            Your Message *
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you are looking for..."
            style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-crimson"
          style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Sending...' : <>Submit Enquiry <FaPaperPlane /></>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
