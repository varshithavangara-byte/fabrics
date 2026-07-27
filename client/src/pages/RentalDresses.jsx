import React from 'react';
import { FaWhatsapp, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import ContactForm from '../components/contact/ContactForm';

const RentalDresses = () => {
  const rentalCategories = [
    { title: 'Bridal Heavy Lehenga', deposit: '₹2,000', price: '₹3,500 / 3 Days', img: './images/gallery/hero.jpeg' },
    { title: 'Designer Evening Gown', deposit: '₹1,000', price: '₹1,800 / 3 Days', img: './images/gallery/dress.jpeg' },
    { title: 'Royal Groom Sherwani', deposit: '₹1,500', price: '₹2,500 / 3 Days', img: './images/gallery/groom-dress.jpeg' },
    { title: 'Sangeet / Party Outfit', deposit: '₹800', price: '₹1,200 / 3 Days', img: './images/gallery/couple-dress.jpeg' },
  ];

  const terms = [
    'Original Photo ID proof (Aadhaar / Voter ID) required at pickup.',
    'Security deposit is 100% refundable upon safe return of outfit.',
    'Standard rental duration is 3 days (Pickup Day, Event Day, Return Day).',
    'Outfits are professionally dry-cleaned and sanitized prior to every pickup.',
    'Advance booking recommended 7–10 days before event date.',
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Designer Outfit Rentals</h1>
          <p>Wear high-end luxury lehengas, gowns, and sherwanis at a fraction of purchase cost.</p>
        </div>
      </div>

      {/* Pricing Grid */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div className="section-title">
            <span>Rent Luxury</span>
            <h2>Rental Collection & Pricing</h2>
            <p>Sanitized, pristine condition designer garments ready for your next event.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {rentalCategories.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}
                />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <div style={{ color: 'var(--secondary-hover)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '6px' }}>{item.price}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '18px' }}>Security Deposit: {item.deposit}</div>
                <a
                  href={buildWhatsAppUrl(`Hello Pushpa Fabrics, I want to rent the *${item.title}*.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FaCalendarAlt /> Check Availability
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Booking */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.88rem' }}>
                Transparent Policy
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', margin: '10px 0 20px', fontFamily: 'Playfair Display' }}>
                Rental Terms & Guidelines
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
                {terms.map((term, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', background: '#FFF', padding: '14px 18px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                    <FaInfoCircle color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>{term}</span>
                  </div>
                ))}
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

export default RentalDresses;
