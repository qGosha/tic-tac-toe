import React, { Component } from 'react';
import './App.css';
import { Board } from './Board';
import { SideSelect } from './SideSelect';
import { ScorePanel } from './ScorePanel';

export class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      side: false,
      yourTurn: Math.round(Math.random() * 1),
      computer: 0,
      player: 0
    };
  }
handleOnScoreChange(message) {
  if(message === 'You lost!'){
    this.setState({
      computer:this.state.computer + 1,
      yourTurn: Math.round(Math.random() * 1)
    })
    return;
  }
  if(message === 'You won!'){
    this.setState({
      player:this.state.player + 1,
      yourTurn: Math.round(Math.random() * 1)
    })
    return;
  } else {
    this.setState({
      yourTurn: Math.round(Math.random() * 1)
    })
  }
}

  render() {
    if(this.state.side) {
      return (
        <div>
        <ScorePanel computer={this.state.computer} player={this.state.player} onGameReset={ () => this.setState({
          yourTurn:Math.round(Math.random() * 1),
          computer: 0,
          player: 0,
          side: false})} />
        <div><Board side={this.state.side} yourTurn={this.state.yourTurn} scoreChange={(message) => this.handleOnScoreChange(message)} /></div>
        </div>
      )
    }
    return <SideSelect onClick={side => this.setState({side}) } />
  }
};
