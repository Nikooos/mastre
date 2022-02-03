import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './app.css';

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard'
import Row from './components/Row/Row'
import { render } from '@testing-library/react';

const TRIES = 10;

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function App() {
  const [overlayTitle, setOverlayTitle] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [activePeg, setActivePeg] = useState(0);
  // const [selectedColor, setSelectedColor] = useState('');
  const [currentGuess, setCurrentGuess] = useState(new Map());
  const [currentGame, setCurrentGame] = useState(new Map());

  const showRules = () => {
    setOverlayTitle('Instellingen');
    setShowOverlay(true);
  }
  
  const showSettings = () => {
    setOverlayTitle('Instellingen');
    setShowOverlay(true);
  }

  const onCloseOverlay = () => {
    setShowOverlay(false);
  }

  function onButtonSelected(type) {
    // set color to activePeg
    setCurrentGuess(currentGuess.set(activePeg, type))
    // setSelectedColor(type);
    if (activePeg === 3) {
      // we have a full row! wait for the enter button to be pressed so the user 
      // can check and correct his guess if he wants
      // store the currentGuess
      console.log('currentGuess',currentGuess);

      // no correct code so continue to the next row (it there is one)
      setCurrentGame(currentGame.set(activeRow, currentGuess));
      setCurrentGuess(new Map);
      setActiveRow(activeRow + 1);
      setActivePeg(0);
    } else {
      // go to the next peg in the row
      setActivePeg(activePeg + 1);
    }
  }

  const RenderRows = () => {
    const currentRow = 'row-' + activeRow;
    const currentPeg = 'peg-' + activePeg;
    let rows = [];
    let rowId;

    for (let index = 0; index < TRIES; index++) {
      rowId = 'row-' + index;
      rows.push(<Row key={rowId} rowId={rowId} rowIndex={index} isCurrentRow={rowId === currentRow} currentRow={currentRow} activePeg={currentPeg} currentGuess={currentGuess} currentGame={currentGame} />)
    }

    return(rows);
  }

  return (
    <div className='App'>
      <div className='Mastre'>
        <Header showRules={showRules} showSettings={showSettings} />
        <div className='Divider'/>
        <div className='Board'>
          {RenderRows()}
        </div>
        <div className='Divider'/>
        <Keyboard onButtonSelected={(type) => onButtonSelected(type)} />
      </div>
      <Overlay title={overlayTitle} visible={showOverlay} onCloseOverlay={onCloseOverlay} />
    </div>
  );
}

export default App;