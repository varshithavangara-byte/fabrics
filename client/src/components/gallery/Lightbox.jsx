import React from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { buildEnquiryUrl } from '../../utils/whatsapp';

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          background: '#1A0000',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '2px solid var(--secondary)',
          boxShadow: 'var(--shadow-lg)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'var(--primary)',
            color: 'var(--secondary)',
            border: '1px solid var(--secondary)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <FaTimes />
        </button>

        {/* Modal Image */}
        <img
          src={image.src}
          alt={image.alt}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80';
          }}
          style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', background: '#000' }}
        />

        {/* Footer Info */}
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFF' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', fontFamily: 'Playfair Display', marginBottom: '4px' }}>
              {image.title}
            </h3>
            <p style={{ color: '#CCC', fontSize: '0.9rem' }}>{image.alt}</p>
          </div>
          <a
            href={buildEnquiryUrl(image.title)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            <FaWhatsapp size={18} /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
