import React from 'react';
import './hint.css';

const Hint = ({ active, clr = '' }) => {
  return (
      <div className='Hint' style={{ backgroundColor: clr }} />
  );
};

export default Hint;