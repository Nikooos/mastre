import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import './app.css';

import combinations from './data/combinations';

import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard'
import Row from './components/Row/Row'

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
  const [activeEnterButton, setActiveEnterButton] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [activePeg, setActivePeg] = useState(0);
  const [gameExactMatches, setGameExactMatches] = useState(new Map());
  const [gameColorMatches, setGameColorMatches] = useState(new Map());
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

  function onRowButtonSelected(type) {
    console.log('onRowButtonSelected', type)
    if (type === 'clear') {
      console.log('clear');
      if (currentGuess.get(activeRow)) {
        console.log('currentGuess',currentGuess);
        setActiveEnterButton(false);
        setCurrentGuess(new Map);
        setActivePeg(0);
      }
    }

    if (type === 'check' && activeEnterButton) {
      const guess = new Map(currentGuess);
      // enter pressed so we need to give feedback
      const correctCombination = combinations[0].slice();
      console.log('correctCombination', correctCombination);

      // first check for correct color on correct position
      let exactMatches = 0;
      for (let [key, value] of guess) {
        if (value === correctCombination[key]) {
          console.log('exact key', key)
          exactMatches++;
          guess.delete(key);
          correctCombination[key] = '-';
        }
      }
      
      // then check for correct color only
      let colorMatches = 0;
      for (let [key, value] of guess) {
        const foundIndex = correctCombination.indexOf(value);
        if (foundIndex !== -1) {
          colorMatches++;
          guess.delete(key);
          correctCombination[foundIndex] = '-';
        }
      }

      setGameExactMatches(gameExactMatches.set(activeRow, exactMatches));
      setGameColorMatches(gameColorMatches.set(activeRow, colorMatches));
      setActiveEnterButton(false);

      if (exactMatches === 4) {
        // game won!
        // show end screen
      } else {
        // no correct code so continue to the next row (it there is one)
        setCurrentGame(currentGame.set(activeRow, currentGuess));
        setCurrentGuess(new Map);
        setActiveRow(activeRow + 1);
        setActivePeg(0);
      }
    }
  }

  function onButtonSelected(type) {
    // set color to activePeg
    if (!activeEnterButton) {
      setCurrentGuess(currentGuess.set(activePeg, type))
    }

    if (activePeg === 3) {
      // we have a full row! wait for the enter button to be pressed so the user 
      // can check and correct his guess if he wants
      setActiveEnterButton(true);
      // store the currentGuess
      console.log('currentGuess',currentGuess);
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
      rows.push(
        <Row 
          key={rowId} 
          rowId={rowId} 
          rowIndex={index} 
          isCurrentRow={rowId === currentRow} 
          currentRow={currentRow} 
          activePeg={currentPeg} 
          currentGuess={currentGuess} 
          currentGame={currentGame} 
          gameExactMatches={gameExactMatches} 
          gameColorMatches={gameColorMatches} 
          onRowButtonSelected={(type) => onRowButtonSelected(type)}
          activeEnterButton={activeEnterButton} 
        />
      )
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