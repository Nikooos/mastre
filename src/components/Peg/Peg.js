import React from 'react';
import './peg.css';

const Peg = ({ active, clr = 'white' }) => {
  return (
      <div className='Peg' style={{ backgroundColor: clr, borderColor: active ? 'black' : 'darkGray' }} />
  );
};

export default Peg;