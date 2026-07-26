import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedCollections } from '../../data/collections';
import CategoryCard from '../collections/CategoryCard';

const FeaturedCollections = () => {
  const featured = getFeaturedCollections();

  return (
    <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title">
          <span>Curated For You</span>
          <h2>Featured Collections</h2>
          <p>Hand-picked weaves, opulent lehengas, and designer fabrics crafted to make every celebration unforgettable.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {featured.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard category={collection} />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/collections" className="btn-outline-crimson">
            View All 9 Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
