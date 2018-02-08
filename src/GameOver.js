import React from 'react';


export class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

show() {
  this.setState({
    hidden:false
  })
}

componentWillMount() {
  setTimeout(() => this.show(), 1000);
  setTimeout(() => this.props.reset(this.props.message), 2500);
}

render() {
  return (
   <div style={{opacity:this.state.hidden ? '0': '0.5'}} className='gameOver'>{this.props.message}</div>
 )
}

}
