import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { buildEnquiryUrl } from '../../utils/whatsapp';

const CategoryCard = ({ category }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
        <img
          src={category.image}
          alt={category.title}
          onError={(e) => {
            e.target.src = './images/gallery/cta-banner.jpeg';
          }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--primary)', color: 'var(--secondary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
          {category.priceRange}
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <span style={{ color: 'var(--secondary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {category.subtitle}
          </span>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: '6px 0 12px', fontFamily: 'Playfair Display' }}>
            {category.title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
            {category.description}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a
            href={buildEnquiryUrl(category.title)}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
            style={{ flex: 1, justifyContent: 'center', padding: '10px 16px', fontSize: '0.88rem' }}
          >
            <FaWhatsapp size={16} /> Enquire
          </a>
          <Link
            to="/collections"
            className="btn-outline-crimson"
            style={{ padding: '10px 16px', fontSize: '0.88rem' }}
          >
            Details <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
