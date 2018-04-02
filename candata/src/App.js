import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import DisplayArea from './DisplayArea/DisplayArea';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cans: null,
            currentData: null,
            selectedButton: 'All'
        }
    }
    componentWillMount() {
        const currentState = this.state;
        //Retrieve initial Can Data and populate to state
        axios.get('http://localhost:3002/api/data').then((data) => {
            this.setState({...currentState, cans: data.data, currentData: data.data});
        });
    }
    displayOptions(searchCrit) {

    }
    buttonSelectChanger(button) {
        const currentState = this.state;
        this.setState({...currentState, selectedButton: button});
    }
  render() {
    return (
      <div className="container-fluid App">
          <div className="col-xs-12">
              <Nav currentButton={this.state.selectedButton} buttonSelectChanger={this.buttonSelectChanger.bind(this)} />
              <DisplayArea cans={this.state.currentData} />
          </div>
      </div>
    );
  }
}

export default App;
