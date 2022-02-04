import React from 'react';
import './row-buttons.css'

import KeyboardButton from '../../Keyboard/KeyboardButton/KeyboardButton'
import { isDisabled } from '@testing-library/user-event/dist/utils';

const RowButtons = ({ onRowButtonSelected, activeEnterButton }) => {
  function onHandleClick(type) {
    onRowButtonSelected(type);
  };

  return (
    <div className='RowButtons'>
      <KeyboardButton label='❌' btnColor='white' onClick={() => {onHandleClick('clear')}} />
      <KeyboardButton label='✅' btnColor='white' onClick={() => {onHandleClick('check')}} disabled={!activeEnterButton} />
    </div>
  );
};

export default RowButtons;