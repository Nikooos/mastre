import React from 'react';
import './row.css';

import Peg from '../Peg/Peg';
import Hint from '../Hint/Hint';

const Row = ({ isCurrentRow = false }) => {
  return (
    <div className='Row' style={{ backgroundColor: isCurrentRow ? 'lightgray' : 'white', opacity: isCurrentRow ? 1 : 0.5 }}>
      <div className='Decode'>
        <Peg active={true && isCurrentRow} />
        <Peg active={false && isCurrentRow} />
        <Peg active={false && isCurrentRow} />
        <Peg active={false && isCurrentRow} />
      </div>
      <div className='Hints'>
        {/* <Hint clr='black' />
        <Hint clr='white' />
        <Hint clr='black' />
        <Hint clr='white' /> */}
      </div>
    </div>
  );
};

export default Row;