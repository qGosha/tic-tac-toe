import React from 'react';

export const CellTable = ({onClick, cells, position, winCombination}) => {
  return (
   <li className={(winCombination && winCombination.includes(position)) ? 'higlighted' : undefined}
   onClick={() => onClick(position)}>{cells[position] || ''}</li>
  )
}
