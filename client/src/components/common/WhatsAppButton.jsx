import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../../utils/whatsapp';

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      aria-label="Contact us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#25D366',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
      }}
    >
      <FaWhatsapp size={34} />
    </button>
  );
};

export default WhatsAppButton;
