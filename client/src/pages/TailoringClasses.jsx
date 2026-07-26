import React from 'react';
import { FaGraduationCap, FaClock, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';

const TailoringClasses = () => {
  const courses = [
    {
      title: 'Basic Stitching & Alterations',
      duration: '1 Month (30 Hours)',
      fee: '₹4,500',
      level: 'Beginners',
      skills: ['Machine handling & maintenance', 'Basic seams & hemline finishes', 'Simple blouse & petticoat stitching', 'Zip & hook fitting'],
    },
    {
      title: 'Advanced Blouse & Maggam Work',
      duration: '2 Months (60 Hours)',
      fee: '₹8,500',
      level: 'Intermediate',
      skills: ['50+ Neck pattern drafting', 'Princess cut & Katori blouse', 'Maggam work & Aari embroidery', 'Padding & lining fitting'],
    },
    {
      title: 'Master Fashion Designing & Lehengas',
      duration: '3 Months (90 Hours)',
      fee: '₹12,500',
      level: 'Advanced / Professional',
      skills: ['Bridal lehenga drafting', 'Anarkali & Gown cutting', 'Costing & fabric selection', 'Store management & boutique setup'],
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <h1>Tailoring & Fashion Academy</h1>
          <p>Learn professional garment stitching, blouse drafting, and Maggam embroidery from industry experts.</p>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="section-padding" style={{ background: '#FFF' }}>
        <div className="container">
          <div className="section-title">
            <span>Certification Programs</span>
            <h2>Our Tailoring Courses</h2>
            <p>Practical hands-on training with individual stitching workstations and certified course completion.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {courses.map((course, idx) => (
              <div key={idx} className="card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ background: 'var(--secondary-light)', color: 'var(--secondary-hover)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>
                      {course.level}
                    </span>
                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>
                      {course.fee}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontFamily: 'Playfair Display', marginBottom: '10px' }}>
                    {course.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                    <FaClock color="var(--secondary-hover)" /> Duration: {course.duration}
                  </p>

                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '10px', fontWeight: 700 }}>Syllabus Highlights:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {course.skills.map((skill, i) => (
                      <li key={i} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaCheckCircle color="var(--primary)" size={14} /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="section-padding" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.88rem' }}>
                Join Next Batch
              </span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--primary)', margin: '10px 0 20px', fontFamily: 'Playfair Display' }}>
                Course Admission Form
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                Batches start on 1st and 15th of every month. Morning, Afternoon, and Weekend batches available.
              </p>
              <div className="card" style={{ padding: '24px', background: '#FFF' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Why study at Pushpa Academy?</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  <li>✓ 100% Practical sewing machine training</li>
                  <li>✓ Small batch size (max 8 students per batch)</li>
                  <li>✓ Certificate issued upon completion</li>
                  <li>✓ Placement & self-employment guidance</li>
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

export default TailoringClasses;
