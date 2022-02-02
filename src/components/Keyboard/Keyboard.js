import React from 'react';
import './keyboard.css';

import KeyboardButton from './KeyboardButton/KeyboardButton'

const Button = () => {
  return (
    <div className='Keyboard'>
      <KeyboardButton btnColor='purple' />
      <KeyboardButton btnColor='red' />
      <KeyboardButton btnColor='blue' />
      <KeyboardButton btnColor='yellow' />
      <KeyboardButton btnColor='green' />
      <KeyboardButton btnColor='orange' />
      <KeyboardButton className='Button' label='&lt;' />
      <KeyboardButton className='Button' label='GO!' disabled={true} />
    </div>
  );
};

export default Button;