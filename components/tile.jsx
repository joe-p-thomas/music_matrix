import React from 'react';

class Tile extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div onClick={this.toggle}
           className={this.state.selected ? 'selected' : ''}>
      </div>
    );
  }
}

export default Tile;
