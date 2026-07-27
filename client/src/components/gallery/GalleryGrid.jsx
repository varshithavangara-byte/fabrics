import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '../../data/gallery';
import Lightbox from './Lightbox';
import { FaExpand, FaWhatsapp } from 'react-icons/fa';
import { buildEnquiryUrl } from '../../utils/whatsapp';

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}
      >
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '10px 22px',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 600,
              background: activeCategory === cat.id ? 'var(--primary)' : '#FFF',
              color: activeCategory === cat.id ? 'var(--secondary)' : 'var(--text-dark)',
              border: activeCategory === cat.id ? '1px solid var(--secondary)' : '1px solid var(--border-light)',
              boxShadow: activeCategory === cat.id ? 'var(--shadow-sm)' : 'none',
              transition: 'var(--transition)',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-Style Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden', height: '320px', cursor: 'pointer' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.src = './images/gallery/hero-banner.jpeg';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(139,0,0,0.85), transparent)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  color: '#FFF',
                }}
                className="gallery-overlay"
              >
                <h4 style={{ fontSize: '1.2rem', fontFamily: 'Playfair Display', color: 'var(--secondary)' }}>
                  {img.title}
                </h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.9, marginBottom: '12px' }}>{img.alt}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setSelectedImage(img)}
                    style={{ background: 'var(--secondary)', color: '#222', border: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <FaExpand /> View Full
                  </button>
                  <a
                    href={buildEnquiryUrl(img.title)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ background: '#25D366', color: '#FFF', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <FaWhatsapp /> Enquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      <style>{`
        .card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default GalleryGrid;
