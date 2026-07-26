import React from 'react';
import CollectionGrid from '../components/collections/CollectionGrid';

const Collections = () => {
  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Explore 9 distinct categories ranging from pure Kanjivaram silk sarees to designer laces.</p>
        </div>
      </div>

      {/* Grid Section */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <CollectionGrid />
        </div>
      </section>
    </div>
  );
};

export default Collections;
