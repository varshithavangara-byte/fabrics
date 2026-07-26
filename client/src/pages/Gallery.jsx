import React from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Product & Store Gallery</h1>
          <p>Browse our lookbook featuring silk sarees, bridal lehengas, blouse work, and store highlights.</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
