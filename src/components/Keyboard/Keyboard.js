import React from 'react';
import './keyboard.css';

import KeyboardButton from './KeyboardButton/KeyboardButton'

const Keyboard = ({ onButtonSelected }) => {
  function onHandleClick(type) {
    onButtonSelected(type);
  };

  return (
    <div className='Keyboard'>
      <KeyboardButton btnColor='purple' value='purple' onClick={() => {onHandleClick('purple')}} />
      <KeyboardButton btnColor='red' onClick={() => {onHandleClick('red')}} />
      <KeyboardButton btnColor='blue'onClick={() => {onHandleClick('blue')}} />
      <KeyboardButton btnColor='yellow' onClick={() => {onHandleClick('yellow')}} />
      <KeyboardButton btnColor='green' onClick={() => {onHandleClick('green')}} />
      <KeyboardButton btnColor='orange' onClick={() => {onHandleClick('orange')}} />
      <KeyboardButton className='Button' onClick={() => {onHandleClick('backspace')}} label='&lt;' />
      <KeyboardButton className='Button' onClick={() => {onHandleClick('enter')}} label='GO!' disabled={true} />
    </div>
  );
};

export default Keyboard;