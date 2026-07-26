import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/services';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section className="section-padding" style={{ background: '#FFF' }}>
      <div className="container">
        <div className="section-title">
          <span>Real Experiences</span>
          <h2>What Our Customers Say</h2>
          <p>Read reviews from brides, regular shoppers, and tailoring students who trust Pushpa Fabrics.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
              style={{ padding: '30px', position: 'relative' }}
            >
              <FaQuoteLeft size={30} color="var(--primary-light)" style={{ position: 'absolute', top: '20px', right: '20px' }} />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', color: 'var(--secondary)' }}>
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>
              <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '24px', italic: 'italic' }}>
                "{item.review}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    color: 'var(--secondary)',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Playfair Display',
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>{item.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
