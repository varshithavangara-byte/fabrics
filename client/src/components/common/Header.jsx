import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { STORE, NAV_LINKS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/whatsapp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#FFF' }}>
      {/* Top Utility Bar */}
      <div style={{ background: 'var(--primary)', color: '#FFF', padding: '6px 0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>✨ Welcome to {STORE.name} — Pure Fabrics & Designer Fashion</div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href={`tel:${STORE.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF' }}>
              <FaPhoneAlt size={12} color="var(--secondary)" /> {STORE.phone}
            </a>
            <button
              onClick={() => openWhatsApp()}
              style={{ background: 'none', border: 'none', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.85rem' }}
            >
              <FaWhatsapp size={14} /> Quick Chat
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'var(--transition)',
          padding: isScrolled ? '12px 0' : '18px 0',
          background: '#FFF',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'var(--primary)', color: 'var(--secondary)', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.4rem', fontFamily: 'Playfair Display' }}>
              PF
            </div>
            <div>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Playfair Display', color: 'var(--primary)', letterSpacing: '0.5px' }}>
                Pushpa Fabrics
              </span>
              <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
                Luxury Textiles
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-dark)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.92rem',
                  borderBottom: isActive ? '2px solid var(--secondary)' : '2px solid transparent',
                  paddingBottom: '4px',
                  transition: 'var(--transition)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            style={{ background: 'none', fontSize: '1.5rem', color: 'var(--primary)', display: 'none' }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ background: '#FFF', borderTop: '1px solid var(--border-light)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--primary)' : 'var(--text-dark)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1rem',
                  padding: '6px 0',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
