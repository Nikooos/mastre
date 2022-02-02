import React from 'react';
import './keyboard-button.css';

const Button = ({ children, onClick, btnColor = '', label = '', disabled }) => {
  return (
    <div className='container' style={{ backgroundColor: btnColor, opacity: disabled ? 0.5 : 1 }} >
      {children || label}
    </div>
  );
};

export default Button;