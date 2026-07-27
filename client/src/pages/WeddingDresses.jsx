import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarCheck, FaRing, FaHeart } from 'react-icons/fa';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import ContactForm from '../components/contact/ContactForm';

const WeddingDresses = () => {
  const weddingCategories = [
    { title: 'Bridal Kanjivaram Silks', desc: 'Heavy zari border pure silk sarees crafted for muhurtham rituals.', price: 'From ₹15,000', img: './images/gallery/saree-1.jpeg' },
    { title: 'Bridal Designer Lehengas', desc: 'Hand-embroidered zardozi and raw silk lehengas for grand receptions.', price: 'From ₹18,000', img: './images/gallery/wedding-lehenga.jpeg' },
    { title: 'Groom Royal Sherwanis', desc: 'Silk sherwanis with matching safa, dupatta, and embroidery details.', price: 'From ₹12,000', img: './images/gallery/groom-dress.jpeg' },
    { title: 'Bride & Groom Match Sets', desc: 'Colour-coordinated saree & dhoti/kurta sets for engagement photos.', price: 'From ₹8,000', img: './images/gallery/matching-dress.jpeg' },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Wedding & Bridal Collection</h1>
          <p>Royal attire for your special day — Bridal Sarees, Reception Lehengas, Groom Sherwanis, and Family Sets.</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div className="section-title">
            <span>A Wedding To Remember</span>
            <h2>Bridal & Groom Editions</h2>
            <p>We craft dream wedding outfits tailored to your theme, colour palette, and ritual requirements.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {weddingCategories.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '18px' }}
                />
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '16px' }}>{item.desc}</p>
                <div style={{ color: 'var(--secondary-hover)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '18px' }}>{item.price}</div>
                <a
                  href={buildWhatsAppUrl(`Hello Pushpa Fabrics, I want to book an appointment for *${item.title}*.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaCalendarCheck /> Book Appointment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment & Form */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.88rem' }}>
                Bridal Consultation
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', margin: '10px 0 20px', fontFamily: 'Playfair Display' }}>
                Schedule Your VIP Bridal Session
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                Enjoy an exclusive 1-on-1 trial session at our Coimbatore VIP lounge with our senior bridal stylist.
              </p>
              <div style={{ background: '#FFF', padding: '24px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>What’s included in VIP Consultation?</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  <li>✓ Private fitting room for bride & family</li>
                  <li>✓ Custom fabric swatch & embroidery preview</li>
                  <li>✓ Colour coordination consultation for groom & family</li>
                  <li>✓ Complementary trial alteration</li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingDresses;
