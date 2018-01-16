import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      generation: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>Game Of Life</h1>
        <Grid
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

ReactDOM.render(<p>Hello World</p>, document.getElementById('root'));