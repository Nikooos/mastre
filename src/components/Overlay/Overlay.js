import React from 'react';
import './overlay.css';

const Overlay = ({ title, visible = true, onCloseOverlay = () => {} }) => {
  return (
    <div className='Overlay' style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <div className='OverlayBackground' />
      <div className='Content'>
        <div className='Header'>
          {title}
          <div className='CloseButton' onClick={() => {onCloseOverlay()}}>X</div>
        </div>
        blablablablablablabla blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla  blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla blablablablablablablabla 
        blablablablablablablabla </div>
    </div>
  );
};

export default Overlay;