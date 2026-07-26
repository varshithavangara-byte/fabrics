import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '35px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'var(--primary)',
        color: 'var(--secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)',
        zIndex: 998,
        cursor: 'pointer',
        border: '1px solid var(--secondary)',
        transition: 'var(--transition)',
      }}
    >
      <FaChevronUp size={18} />
    </button>
  );
};

export default ScrollToTop;
