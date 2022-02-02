import React from 'react';
import './app.css';

import Overlay from './components/Overlay/Overlay';
import OverlayBackground from './components/Overlay/OverlayBackground/OverlayBackground';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard'
import Row from './components/Row/Row'

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function showRules() {
  //alert('show rules')
}

function showSettings() {
  alert('show settings')
}

const App = () => {
  return (
    <div className='App'>
      <div className='Mastre'>
        <Header showRules={() => showRules()} showSettings={() => showSettings()} />
        <div className='Divider'/>
        <div className='Board'>
          <Row isCurrentRow />
          <Row isCurrentRow={false} />
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
      {/* <OverlayBackground />
      <Overlay /> */}
    </div>
  );
}

export default App;