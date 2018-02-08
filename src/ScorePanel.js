import React from 'react';

export const ScorePanel = ({computer,player,onGameReset}) => {
  return (
   <div className='ScorePanel'>
   <span>Computer: {computer}</span>
   <span>Player: {player}</span>
   <button onClick={ () => onGameReset() }>Reset the game</button>
   </div>
  )
}
