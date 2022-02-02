import React from 'react';
import './row.css';

const Row = () => {
  return (
    <div className='Row'>
      <div className='Decode'>
        <div className='Peg' />
        <div className='Peg' />
        <div className='Peg' />
        <div className='Peg' />
      </div>
      <div className='Hints'>
        <div className='Hint' />
        <div className='Hint' />
        <div className='Hint' />
        <div className='Hint' />
      </div>
    </div>
  );
};

export default Row;