import React from 'react';
import './App.css';

import KeyboardButton from './components/KeyboardButton/KeyboardButton'

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function App() {
  return (
    <div className='App'>
      <div className='Mastre'>
        <div className='Header'>
          <div className='Left'>O</div>
          <div className='Title'>Mastre</div>
          <div className='Right'>O</div>
        </div>
        <div className='TopDivider'/>
        <div className='Board'>
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
        </div>
        <div className='Keyboard'>
          <KeyboardButton btnColor='purple' />
          <KeyboardButton btnColor='Red' />
          <KeyboardButton btnColor='Blue' />
          <KeyboardButton btnColor='Yellow' />
          <KeyboardButton btnColor='Green' />
          <KeyboardButton btnColor='Orange' />
          <KeyboardButton className='Button' label='&lt;' />
          <KeyboardButton className='Button' label='GO!' />
        </div>
      </div>
    </div>
  );
}

export default App;