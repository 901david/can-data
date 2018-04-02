import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import DisplayArea from './DisplayArea/DisplayArea';

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
      <div className="container App">
          <div className="col-xs-12">
              <Nav />
              <DisplayArea />
          </div>
      </div>
    );
  }
}

export default App;
