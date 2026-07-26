import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { buildEnquiryUrl } from '../../utils/whatsapp';

const ProductCard = ({ item }) => {
  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '260px' }}>
        <img
          src={item.image}
          alt={item.title}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(0,0,0,0.65)',
            color: '#FFF',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          {item.tag || item.subtitle}
        </span>
      </div>

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '8px' }}>
            {item.title}
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
            {item.description}
          </p>
          <div style={{ fontWeight: 700, color: 'var(--secondary-hover)', fontSize: '1.1rem', marginBottom: '16px' }}>
            {item.priceRange}
          </div>
        </div>

        <a
          href={buildEnquiryUrl(item.title)}
          target="_blank"
          rel="noreferrer"
          className="btn-gold"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <FaWhatsapp size={18} /> WhatsApp Enquiry
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
