import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaRulerCombined, FaCut, FaCheck } from 'react-icons/fa';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import ContactForm from '../components/contact/ContactForm';

const CustomizedBlouses = () => {
  const [activeNeck, setActiveNeck] = useState(0);

  const neckStyles = [
    { title: 'Boat Neck Zari Work', desc: 'Elegant high boat neck embellished with golden zari work and stone borders.', price: '₹1,200', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
    { title: 'Deep U Back with Dori', desc: 'Traditional deep U back featuring handcrafted dori tassels and latkan embellishments.', price: '₹950', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80' },
    { title: 'Sweetheart Neck Maggam', desc: 'Royal sweetheart neckline featuring intricate Maggam hand embroidery.', price: '₹2,500', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
    { title: 'High Neck Collar Style', desc: 'Modern high-neck mandarin collar pattern perfect for silk and tissue sarees.', price: '₹1,500', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80' },
  ];

  const measurementSteps = [
    'Bust / Chest circumference',
    'Under bust measurement',
    'Blouse length (shoulder to waist)',
    'Shoulder width',
    'Armhole circumference',
    'Sleeve length & sleeve opening',
    'Front neck depth & Back neck depth',
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Customized Blouse Studio</h1>
          <p>Stitched to perfection with 50+ neck designs, Maggam work, and guaranteed flawless fit.</p>
        </div>
      </div>

      {/* Intro & Showcase */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div className="section-title">
            <span>Tailoring Excellence</span>
            <h2>Popular Blouse Neck Patterns</h2>
            <p>Select your favorite design or share a picture with us for custom replication.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {neckStyles.map((style, idx) => (
              <div key={idx} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                <img
                  src={style.img}
                  alt={style.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '8px' }}>
                  {style.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '14px', lineHeight: '1.5' }}>{style.desc}</p>
                <div style={{ color: 'var(--secondary-hover)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>Starting {style.price}</div>
                <a
                  href={buildWhatsAppUrl(`Hello Pushpa Fabrics, I want to order the *${style.title}* blouse design.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaWhatsapp /> Order Design
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Guide */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.88rem' }}>
                Precision Fit
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', margin: '10px 0 20px', fontFamily: 'Playfair Display' }}>
                Measurements Guide
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                You can visit our store for professional measurements by our female tailors, or send us your measurements via WhatsApp using our 7-point checklist:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {measurementSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FFF', padding: '12px 18px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                    <FaCheck color="var(--primary)" />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Box */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomizedBlouses;
