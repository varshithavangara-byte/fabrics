import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import MapSection from '../components/contact/MapSection';

const Contact = () => {
  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Pushpa Fabrics. Visit our showroom or send us your query.</p>
        </div>
      </div>

      {/* Main Form & Info Section */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <ContactForm />
            <ContactInfo />
          </div>

          {/* Map Location Section */}
          <div className="section-title" style={{ marginBottom: '30px' }}>
            <span>Find Us On Map</span>
            <h2>Our Store Location</h2>
          </div>
          <MapSection />
        </div>
      </section>
    </div>
  );
};

export default Contact;
