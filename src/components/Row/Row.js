import React from 'react';
import './row.css';

import Peg from '../Peg/Peg';
import Hint from '../Hint/Hint';
import RowButtons from './RowButtons/RowButtons';

const PEGS = 4;

const Row = ({ rowIndex, isCurrentRow = false, activePeg, currentGuess, currentGame, gameExactMatches, gameColorMatches, onRowButtonSelected, activeEnterButton }) => {
  let exactMatchCount = gameExactMatches.get(rowIndex) || 0; 
  let colorMatchCount = gameColorMatches.get(rowIndex) || 0; 
  let showHints = exactMatchCount > 0 || colorMatchCount > 0

  function onHandleRowButtonSelected(type) {
    onRowButtonSelected(type);
  };

  const renderPegs = (isCurrentRow, activePeg, currentGuess, currentGame, rowIndex) => {
    let pegs = [];
    let pegId;
    let active;
    let color;
  
    for (let index = 0; index < PEGS; index++) {
      pegId = 'peg-' + index;
      active = pegId === activePeg && isCurrentRow;
      if (currentGuess.get(index) && isCurrentRow) {
        color = currentGuess.get(index);
      } else if (currentGame.get(rowIndex)) {
        let previousGuess = currentGame.get(rowIndex)
        color  = previousGuess.get(index);
      } else {
        color = 'white';
      }
  
      pegs.push(<Peg key={pegId} pegId={pegId} active={active} clr={color} />)
    }
  
    return(pegs);
  }

  const renderHints = (gameExactMatches, gameColorMatches, rowIndex) => {
    let hints = [];
    let hintId;
    let exactMatchCount = gameExactMatches.get(rowIndex) || 0; 
    let colorMatchCount = gameColorMatches.get(rowIndex) || 0; 
  
    for (let index = 0; index < colorMatchCount; index++) {
      hintId = 'cHint-' + index;
      hints.push(<Hint key={hintId} hintId={hintId} clr={'white'} />);
    }
  
    for (let index = 0; index < exactMatchCount; index++) {
      hintId = 'eHint-' + index;
      hints.push(<Hint key={hintId} hintId={hintId} clr={'black'} />);
    }
  
    return(hints);
  }

  const renderButtons = () => {
    return (<RowButtons onRowButtonSelected={(type) => onHandleRowButtonSelected(type)} activeEnterButton={activeEnterButton}  />);
  }

  return (
    <div 
      className='Row' 
      style={{ 
        backgroundColor: isCurrentRow ? 'lightgray' : 'white', 
        opacity: currentGame.get(rowIndex) || isCurrentRow ? 1 : 0.5 
      }}
    >
      <div className='Decode'>
        {renderPegs(isCurrentRow, activePeg, currentGuess, currentGame, rowIndex)}
      </div>
      <div className='Hints'>
        {showHints ? renderHints(gameExactMatches, gameColorMatches, rowIndex) : isCurrentRow ? renderButtons() : null }
      </div>
    </div>
  );
};

export default Row;