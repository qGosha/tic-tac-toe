import React from 'react';
import { CellTable } from './CellTable';
import { GameOver } from './GameOver';
import { Turn } from './Turn';

const win = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

export class Board extends React.Component {

constructor(props) {
 super(props);
 this.state = {
   cells: Array(9).fill(false),
   isInProcess: false,
   displayTurn: false
 };

}

componentWillMount() {
  this.setState({
    displayTurn: this.props.yourTurn
  })
}


componentDidMount() {
if(!this.props.yourTurn) {
this.aiTime(this.state.cells);
 }
}

componentWillReceiveProps(nextProps) {
  this.setState({
    displayTurn: nextProps.yourTurn,
    cells: Array(9).fill(false)
  })
  if(!nextProps.yourTurn) {
  this.aiTime(Array(9).fill(false));
  }
}


setValue(position) {
  var cells = this.state.cells;
  if(cells[position] || this.state.isInProcess) return;
   cells[position] = this.props.side;
  this.setState({
    cells: cells,
    isInProcess: true,
    displayTurn: false
  });
  this.aiTime(cells);

}

aiTime(cells) {
  setTimeout(() => {
    var aiSide;
    if(this.props.side === 'X') {
      aiSide = 'O';
    } else {
      aiSide = 'X';
    }
    cells[(this.aiGo(cells, aiSide))] = aiSide;
    this.setState({
      cells:cells,
      isInProcess: false,
      displayTurn: true
    });
  }, 800)

}

aiGo(cells, aiSide) {
const aiWinFirst = [0,2,6,8];
const aiWinSecond = [1,3,5,7];
if(!cells[4]) {
  return 4;
}

for (var i = 0; i < win.length; i++) {
  const one = cells[win[i][0]];
  const two = cells[win[i][1]];
  const three = cells[win[i][2]];
   if( (one === aiSide && two === aiSide || two === aiSide && three === aiSide || one === aiSide && three === aiSide) &&
   (one === two ||  two === three || one === three) ) {
      for (var j = 0; j < win[i].length; j++) {
       if(cells[win[i][j]] === false) {
         return win[i][j];
       }
      }
   }
}

for (var b = 0; b < win.length; b++) {
  const one = cells[win[b][0]];
  const two = cells[win[b][1]];
  const three = cells[win[b][2]];
   if( one && one === two || two && two === three || three && one === three) {
     for (var m = 0; m < win[b].length; m++) {
      if(cells[win[b][m]] === false) {
        return win[b][m];
      }
     }
   }
}

 if(cells[0] === this.props.side && cells[0] === cells[8] || cells[2] === this.props.side && cells[2] === cells[6]) {
   for (var x = 0; x < aiWinSecond.length; x++) {
     if(cells[aiWinSecond[x]] === false) {
       return aiWinSecond[x];
     }
   }
 }

for (var c = 0; c < aiWinFirst.length; c++) {
  if(!cells[aiWinFirst[c]]) {
    return  aiWinFirst[c];
  }
}

for (var d = 0; d < aiWinSecond.length; d++) {
  if(!cells[aiWinSecond[d]]) {
    return aiWinSecond[d];
  }
}
}

reset(message) {
this.props.scoreChange(message);
}

render() {
const currentCells = this.state.cells;
var message,
winCombination;

win.some((item) => {
 if(currentCells[item[0]] && currentCells[item[0]] === currentCells[item[1]] && currentCells[item[0]] === currentCells[item[2]]) {

  if(currentCells[item[0]] !== this.props.side) {
    message = 'You lost!';
  } else {
    message = 'You won!';
  }
  winCombination = item;
   return true;
 }
} );

if(currentCells.every( (item) => item)) {
  message = 'It was a draw';
}

const cells = currentCells.map( (item,i) => <CellTable cells={currentCells} winCombination={winCombination} position={i} key={i}
onClick={(position) => this.setValue(position) } />)

return (
<ul className='Board clearfix'>
{cells}
{(message) ? <GameOver message={message} reset={(message) => this.reset(message)}/> : <Turn turn={this.state.displayTurn} /> }
</ul>
)
 }
}
