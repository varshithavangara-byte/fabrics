import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaStore } from 'react-icons/fa';
import { STORE } from '../../utils/constants';
import { openWhatsApp } from '../../utils/whatsapp';

const CTASection = () => {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(139, 0, 0, 0.92), rgba(100, 0, 0, 0.95)), url('./images/gallery/hero-banner.jpeg') center/cover no-repeat`,
        padding: '80px 0',
        color: '#FFF',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <span style={{ color: 'var(--secondary)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>
          Visit Our Showroom
        </span>
        <h2 style={{ fontSize: '2.8rem', fontFamily: 'Playfair Display', margin: '12px 0 20px', color: '#FFF8F3' }}>
          Ready to Experience Authentic Textile Elegance?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#F0E0E0', marginBottom: '40px', lineHeight: '1.7' }}>
          Visit our Coimbatore store to explore thousands of saree weaves and fabrics, or talk to our bridal fashion consultants today.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-gold">
            <FaStore /> Visit Store
          </Link>
          <a href={`tel:${STORE.phone}`} className="btn-outline-gold" style={{ color: '#FFF', borderColor: 'var(--secondary)' }}>
            <FaPhoneAlt /> Call Now
          </a>
          <button onClick={() => openWhatsApp()} className="btn-gold" style={{ background: '#25D366', color: '#FFF' }}>
            <FaWhatsapp size={20} /> WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
