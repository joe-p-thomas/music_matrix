import React from 'react';
import Sound from './sound';



class Matrix extends React.Component {
  constructor(props) {
    super();
    this.board = this.buildBoard();
    this.handleSelect = this.handleSelect.bind(this);

    let col = 0;
    setInterval(() => {
      col += 1;
      col %= 12;
      this.playCol(col);
    }, 1000);
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

  playCol(col) {
    let freq = 1000;
    this.board.forEach((row) => {
      if (row[col].props.className === 'tile selected') {
        new Sound(this.props.context, freq);
      }
      freq -= 100;
    });
  }

  handleSelect(e) {
    if (e.target.className === 'tile') {
      e.target.className += ' selected';
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
