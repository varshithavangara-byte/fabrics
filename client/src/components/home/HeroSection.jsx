import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { STORE } from '../../utils/constants';
import { openWhatsApp } from '../../utils/whatsapp';

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '88vh',
        background: `linear-gradient(rgba(20, 0, 0, 0.7), rgba(20, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        color: '#FFF',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '750px' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              color: 'var(--secondary)',
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '16px',
              background: 'rgba(212, 175, 55, 0.15)',
              padding: '6px 16px',
              borderRadius: '30px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            Luxury Textile & Fashion House
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontFamily: 'Playfair Display',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px',
              color: '#FFF8F3',
            }}
          >
            Elegance in Every <span style={{ color: 'var(--secondary)', italic: 'italic' }}>Thread</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.2rem',
              color: '#E0E0E0',
              marginBottom: '36px',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Discover pure Kanjivaram silks, bridal lehengas, custom tailored blouses, and designer fabrics. Timeless craftsmanship tailored to your unique beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
          >
            <Link to="/collections" className="btn-gold">
              Shop Collections <FaArrowRight />
            </Link>

            <button onClick={() => openWhatsApp()} className="btn-outline-gold" style={{ color: '#FFF', borderColor: 'var(--secondary)' }}>
              <FaWhatsapp size={20} color="#25D366" /> WhatsApp Enquiry
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
