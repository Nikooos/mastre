import React from 'react';
import './header.css';

const Header = ({showRules, showSettings}) => {
  return (
    <div className='Header'>
      <div className='Left'>
        <div className='Rules' onClick={() => showRules()}>?</div>
      </div>
      <div className='Title'>MASTRE</div>
      <div className='Right'>
        <div className='Settings' onClick={() => showSettings()}>...</div>
      </div>
    </div>
  );
};

export default Header;