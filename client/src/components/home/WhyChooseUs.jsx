import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/services';
import { MdVerified, MdCurrencyRupee, MdAutoAwesome, MdSupportAgent, MdOutlineDesignServices, MdLocalShipping } from 'react-icons/md';

const iconMap = {
  MdVerified: MdVerified,
  MdCurrencyRupee: MdCurrencyRupee,
  MdAutoAwesome: MdAutoAwesome,
  MdSupportAgent: MdSupportAgent,
  MdOutlineDesignServices: MdOutlineDesignServices,
  MdLocalShipping: MdLocalShipping,
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title">
          <span>The Pushpa Fabrics Advantage</span>
          <h2>Why Choose Us</h2>
          <p>We combine centuries-old textile traditions with modern fashion standards and customer commitment.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || MdVerified;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                style={{
                  background: '#FFF',
                  padding: '30px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div
                  style={{
                    background: 'var(--primary)',
                    color: 'var(--secondary)',
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    flexShrink: 0,
                  }}
                >
                  <IconComponent />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '8px', fontFamily: 'Playfair Display' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
