import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { STORE } from '../../utils/constants';

const AboutPreview = () => {
  return (
    <section className="section-padding" style={{ background: '#FFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Visual Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '8px solid #FFF',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
                alt="Pushpa Fabrics Store Experience"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-20px',
                background: 'var(--primary)',
                color: '#FFF',
                padding: '24px 30px',
                borderRadius: 'var(--radius-md)',
                border: '2px solid var(--secondary)',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.4rem', fontFamily: 'Playfair Display', fontWeight: 800, color: 'var(--secondary)' }}>15+</div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of Excellence</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              About Pushpa Fabrics
            </span>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '12px 0 20px', fontFamily: 'Playfair Display' }}>
              Where Heritage Weaving Meets Contemporary Fashion
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '18px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Founded with a passion for preserving traditional textile artistry, <strong>Pushpa Fabrics</strong> has grown into Coimbatore’s premier destination for authentic sarees, bridal wear, custom blouse tailoring, and dress rentals.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We source directly from master weavers across Kanchipuram, Banaras, and Mysore to bring you unmatched purity, vibrant hues, and hand-embroidered perfection.
            </p>

            <Link to="/about" className="btn-crimson">
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
