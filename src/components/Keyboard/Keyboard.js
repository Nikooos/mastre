import React from 'react';
import './keyboard.css';

import KeyboardButton from './KeyboardButton/KeyboardButton'

function onClickKeyboardButton(type) {
  alert('onclick ' + type)
}

const Button = () => {
  return (
    <div className='Keyboard'>
      <KeyboardButton btnColor='purple' onClick={() => {onClickKeyboardButton('purple')}} />
      <KeyboardButton btnColor='red' onClick={() => {onClickKeyboardButton('red')}} />
      <KeyboardButton btnColor='blue' onClick={() => {onClickKeyboardButton('blue')}} />
      <KeyboardButton btnColor='yellow' onClick={() => {onClickKeyboardButton('yellow')}} />
      <KeyboardButton btnColor='green' onClick={() => {onClickKeyboardButton('green')}} />
      <KeyboardButton btnColor='orange' onClick={() => {onClickKeyboardButton('orange')}} />
      <KeyboardButton className='Button' onClick={() => {onClickKeyboardButton('backspace')}} label='&lt;' />
      <KeyboardButton className='Button' onClick={() => {onClickKeyboardButton('enter')}} label='GO!' disabled={true} />
    </div>
  );
};

export default Button;