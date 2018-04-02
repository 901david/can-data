import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cans: null,
            currentData: null,
        }
    }
  render() {
    return (
      <div className="App">
        <div className="btn btn-primary">Fun BUttons</div>
      </div>
    );
  }
}

export default App;
