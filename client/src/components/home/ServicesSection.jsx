import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { GiSewingMachine, GiFlowerPot } from 'react-icons/gi';
import { MdDesignServices, MdSchool, MdOutlineHandshake, MdCheckroom } from 'react-icons/md';

const iconMap = {
  GiSewingMachine: GiSewingMachine,
  MdDesignServices: MdDesignServices,
  GiBridesBouquet: GiFlowerPot,
  MdOutlineHandshake: MdOutlineHandshake,
  MdSchool: MdSchool,
};

const ServicesSection = () => {
  return (
    <section className="section-padding" style={{ background: '#FFF' }}>
      <div className="container">
        <div className="section-title">
          <span>What We Offer</span>
          <h2>Our Specialized Services</h2>
          <p>From tailor-made blouse stitching to certified tailoring classes, we provide complete fashion solutions.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || GiSewingMachine;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
                style={{ padding: '36px 28px', textAlign: 'center', position: 'relative' }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '2rem',
                    border: '1px solid var(--secondary)',
                  }}
                >
                  <IconComponent />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '12px', fontFamily: 'Playfair Display' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
                  {service.features.map((feat, i) => (
                    <li key={i} style={{ background: 'var(--secondary-light)', color: 'var(--secondary-hover)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600 }}>
                      ✓ {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
