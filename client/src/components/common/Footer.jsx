import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { STORE, NAV_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer style={{ background: '#1A0000', color: '#FFF8F3', paddingTop: '60px', paddingBottom: '20px', borderTop: '4px solid var(--secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--secondary)', color: '#222', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>
                PF
              </div>
              <h3 style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontFamily: 'Playfair Display' }}>Pushpa Fabrics</h3>
            </div>
            <p style={{ color: '#DDD', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '20px' }}>
              {STORE.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={STORE.social.instagram} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#330000', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }}>
                <FaInstagram />
              </a>
              <a href={STORE.social.facebook} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#330000', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }}>
                <FaFacebookF />
              </a>
              <a href={STORE.social.youtube} target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#330000', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }}>
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.15rem', marginBottom: '20px', position: 'relative' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{ color: '#CCC', fontSize: '0.92rem', transition: 'var(--transition)' }}>
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.15rem', marginBottom: '20px' }}>Specialties</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.slice(5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{ color: '#CCC', fontSize: '0.92rem', transition: 'var(--transition)' }}>
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 style={{ color: 'var(--secondary)', fontSize: '1.15rem', marginBottom: '20px' }}>Visit Us</h4>
            <p style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.92rem', marginBottom: '12px' }}>
              <FaMapMarkerAlt color="var(--secondary)" style={{ marginTop: '4px', flexShrink: 0 }} />
              {STORE.address}
            </p>
            <p style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.92rem', marginBottom: '12px' }}>
              <FaPhoneAlt color="var(--secondary)" style={{ marginTop: '4px', flexShrink: 0 }} />
              {STORE.phone}
            </p>
            <p style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.92rem', marginBottom: '12px' }}>
              <FaEnvelope color="var(--secondary)" style={{ marginTop: '4px', flexShrink: 0 }} />
              {STORE.email}
            </p>
            <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '600', marginTop: '10px' }}>
              🕒 {STORE.hours.weekdays}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #330000', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.85rem', color: '#AAA' }}>
          <div>© {new Date().getFullYear()} Pushpa Fabrics. All Rights Reserved.</div>
          <div>Designed with Elegance & Tradition</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
