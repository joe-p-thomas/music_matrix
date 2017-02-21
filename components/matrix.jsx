import React from 'react';
import T from 'timbre';

class Matrix extends React.Component {
  constructor() {
    super();
    this.board = this.buildBoard();
    this.handleSelect = this.handleSelect.bind(this);
  }

  buildBoard() {
    let board = new Array(12);
    for (let row = 0; row < 12; row++) {
      board[row] = [];
      for (let col = 0; col < 12; col++) {
        board[row].push(<div className='tile'/>);
      }
    }
    return board;
  }

  handleSelect(e) {
    if (e.target.className === 'tile') {
      e.target.className += ' selected';
      T("sin", {freq:880, mul:0.5}).play();
    } else if (e.target.className === 'tile selected') {
      e.target.className = 'tile';
    }
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <ul className='board' onClick={this.handleSelect}>
          {this.board}
        </ul>
      </div>
    );
  }

}

export default Matrix;
