import React from 'react';
import './overlay-background.css';

const OverlayBackground = () => {
  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'black', opacity: 0.5 }} />
  );
};

export default OverlayBackground;