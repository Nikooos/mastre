import React from 'react';
import './app.css';

import Keyboard from './components/Keyboard/Keyboard'
import Row from './components/Row/Row'

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
        <div className='Divider'/>
        <div className='Board'>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
        <div className='Divider'/>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;