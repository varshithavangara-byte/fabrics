import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '20px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid var(--border-light)',
          borderTop: '4px solid var(--secondary)',
          borderRight: '4px solid var(--primary)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <p style={{ fontFamily: 'Playfair Display', color: 'var(--primary)', fontWeight: 600, letterSpacing: '1px' }}>
        Loading Pushpa Fabrics...
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
