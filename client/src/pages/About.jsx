import React from 'react';
import { motion } from 'framer-motion';
import { STORE } from '../utils/constants';
import { FaAward, FaHistory, FaUsers, FaGem } from 'react-icons/fa';

const About = () => {
  const milestones = [
    { year: '2009', title: 'Our Humble Beginnings', desc: 'Started as a small retail saree counter in Coimbatore with 50 handloom varieties.' },
    { year: '2014', title: 'Silk & Designer Expansion', desc: 'Expanded into pure Kanjivaram silk sarees and imported designer fabrics.' },
    { year: '2018', title: 'Custom Blouse Studio', desc: 'Launched specialized in-house tailoring studio for customized blouse designs.' },
    { year: '2021', title: 'Bridal & Rental Studio', desc: 'Introduced bridal sets, couple dresses, and premium dress rentals.' },
    { year: '2024', title: 'Tailoring Academy', desc: 'Established certified tailoring training institute for aspiring designers.' },
  ];

  const values = [
    { icon: FaGem, title: 'Authenticity Guarantee', desc: 'Every silk saree carries pure zari and authenticity certifications.' },
    { icon: FaAward, title: 'Craft Preservation', desc: 'Supporting over 200 weaver families across Tamil Nadu, Karnataka, and UP.' },
    { icon: FaUsers, title: 'Customer First', desc: 'Personal styling support for over 50,000 satisfied shoppers.' },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>About Pushpa Fabrics</h1>
          <p>A decade-long legacy of handloom purity, bespoke fashion, and artisan celebration.</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.88rem' }}>
                Our Heritage
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', margin: '10px 0 20px', fontFamily: 'Playfair Display' }}>
                Preserving Weaving Traditions Since 2009
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                Pushpa Fabrics was established with a singular vision: to bring authentic hand-woven silks and high-fashion fabrics directly to lovers of Indian ethnic wear without intermediary markups.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                Over the past 15+ years, we have built direct relationships with master weavers in Kanchipuram, Banaras, Chanderi, and Pochampally. Our store houses over 5,000 distinct saree weaves, bespoke lehengas, custom blouse designs, and rental collections.
              </p>
            </div>

            {/* Owner Message Card */}
            <div className="card" style={{ padding: '36px', background: 'var(--bg-main)', border: '2px solid var(--secondary)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '12px' }}>
                Founder's Note
              </h3>
              <p style={{ italic: 'italic', color: 'var(--text-dark)', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.98rem' }}>
                "Sarees and textiles are not just clothes — they are heirloom pieces passed down through generations. At Pushpa Fabrics, we treat every customer like family and every thread with reverence."
              </p>
              <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Mrs. Pushpa Ramachandran</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--secondary-hover)' }}>Founder & Chief Curator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-title">
            <span>Our Principles</span>
            <h2>Business Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="card" style={{ padding: '30px', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.5rem' }}>
                    <Icon />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '8px' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div className="section-title">
            <span>Growth Journey</span>
            <h2>Our Journey Through Years</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary)', color: 'var(--secondary)', padding: '10px 18px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'Playfair Display', flexShrink: 0 }}>
                  {m.year}
                </div>
                <div className="card" style={{ padding: '20px 24px', flex: 1 }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '4px' }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
