import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { STORE } from '../../utils/constants';
import { openWhatsApp } from '../../utils/whatsapp';

const ContactInfo = () => {
  return (
    <div className="card" style={{ padding: '36px', background: 'var(--primary)', color: '#FFF' }}>
      <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', fontFamily: 'Playfair Display', marginBottom: '16px' }}>
        Store Details
      </h3>
      <p style={{ color: '#F0E0E0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '30px' }}>
        We invite you to visit our retail showroom in Coimbatore to experience the textures and colours in person.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--secondary)', color: '#222', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 700 }}>Showroom Address</h4>
            <p style={{ fontSize: '0.92rem', color: '#E0E0E0', marginTop: '4px', lineHeight: '1.5' }}>{STORE.address}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--secondary)', color: '#222', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FaPhoneAlt size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 700 }}>Phone Numbers</h4>
            <p style={{ fontSize: '0.92rem', color: '#E0E0E0', marginTop: '4px' }}>{STORE.phone} / {STORE.phone2}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--secondary)', color: '#222', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FaEnvelope size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 700 }}>Email Address</h4>
            <p style={{ fontSize: '0.92rem', color: '#E0E0E0', marginTop: '4px' }}>{STORE.email}</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--secondary)', color: '#222', width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FaClock size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', fontWeight: 700 }}>Working Hours</h4>
            <p style={{ fontSize: '0.92rem', color: '#E0E0E0', marginTop: '4px' }}>{STORE.hours.weekdays}</p>
            <p style={{ fontSize: '0.92rem', color: '#E0E0E0' }}>{STORE.hours.sunday}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => openWhatsApp('Hello Pushpa Fabrics, I want to visit your store.')}
        className="btn-gold"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <FaWhatsapp size={20} /> Chat on WhatsApp Now
      </button>
    </div>
  );
};

export default ContactInfo;
