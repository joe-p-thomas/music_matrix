import React from 'react';
import Sound from './sound';



class Matrix extends React.Component {
  constructor(props) {
    super();
    this.board = this.buildBoard();
    this.activeTiles = this.buildActiveTiles();
    this.handleSelect = this.handleSelect.bind(this);

    let col = 0;
    setInterval(() => {
      col += 1;
      col %= 12;
      this.playCol(col);
    }, 200);
  }

  buildBoard() {
    let board = new Array(12);
    for (let row = 0; row < 12; row++) {
      board[row] = new Array(12);
      for (let col = 0; col < 12; col++) {
        let pos = `${row},${col}`;
        board[row][col] = (<div id={pos} className='tile'/>);
      }
    }
    return board;
  }

  buildActiveTiles() {
    let board = new Array(12);
    for (let row = 0; row < 12; row++) {
      board[row] = new Array(12);
      for (let col = 0; col < 12; col++) {
        board[row][col] = false;
      }
    }
    return board;
  }

  playCol(col) {
    let freq = 440;
    this.activeTiles.forEach((row) => {
      if (row[col]) {
        new Sound(this.props.context, freq);
      }
      freq = freq * Math.pow(2, -1/12);
    });
  }

  handleSelect(e) {
    if (e.target.className === 'tile') {
      e.target.className += ' selected';
    } else if (e.target.className === 'tile selected') {
      e.target.className = 'tile';
    }

    if (e.target.id) {
      let row = parseInt(e.target.id.split(',')[0]);
      let col = parseInt(e.target.id.split(',')[1]);
      this.activeTiles[row][col] = !this.activeTiles[row][col];
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
