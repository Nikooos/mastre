import React from 'react';
import './row.css';

import Peg from '../Peg/Peg';
import Hint from '../Hint/Hint';
import { act } from '@testing-library/react';

const PEGS = 4;

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
    // color = currentGuess.get(index) && isCurrentRow ? currentGuess.get(index) : color = 'white';

    pegs.push(<Peg key={pegId} pegId={pegId} active={active} clr={color} />)
  }

  return(pegs);
}

const Row = ({ rowIndex, isCurrentRow = false, activePeg, currentGuess, currentGame }) => {
  return (
    <div className='Row' style={{ backgroundColor: isCurrentRow ? 'lightgray' : 'white', opacity: currentGame.get(rowIndex) || isCurrentRow ? 1 : 0.5 }}>
      <div className='Decode'>
        {renderPegs(isCurrentRow, activePeg, currentGuess, currentGame, rowIndex)}
      </div>
      <div className='Hints'>
        {/* <Hint clr='black' />
        <Hint clr='white' />
        <Hint clr='black' />
        <Hint clr='white' /> */}
      </div>
    </div>
  );
};

export default Row;