import React from 'react';
import { STORE } from '../../utils/constants';

const MapSection = () => {
  return (
    <div className="card" style={{ overflow: 'hidden', height: '100%', minHeight: '380px' }}>
      <iframe
        title="Pushpa Fabrics Store Location"
        src={STORE.mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '380px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;
