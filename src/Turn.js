import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
export const Turn = ({turn}) => {

  if(turn) {
    return(
      <CSSTransitionGroup
      transitionName="translate"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div key={'1'} className='youTurn'>Your Turn</div>
      </CSSTransitionGroup>
    )
  } else {
    return (
      <CSSTransitionGroup
      transitionName="translate"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div key={'2'} className='aiTurn'>Computer Turn</div>
      </CSSTransitionGroup>
    )
  }

}
