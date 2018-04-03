import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import DisplayArea from './DisplayArea/DisplayArea';
import axios from 'axios';
import {nameSort, serialSort, sizeSort, createdSort, modifiedSort} from './SearchHelpers';
import _ from 'lodash';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cans: null,
            currentData: null,
            selectedButton: 'All',
            google: null
        }
    }

    componentWillMount() {
        const currentState = this.state;
        //Retrieve initial Can Data and populate to state
        axios.get('http://localhost:3002/api/data').then((data) => {
            this.setState({...currentState, cans: _.shuffle(data.data.cans), currentData: _.shuffle(data.data.cans), google: data.data.google});
        });
    }
    //Handles what helper functions hsould be called in each case
    displayOptions(searchCrit) {
        const currentCanData = this.state.cans;
        switch(searchCrit) {
            case 'All':
                return _.shuffle(currentCanData);
            case 'Name':
                return nameSort(currentCanData);
            case 'Serial':
                return serialSort(currentCanData);
            case 'Size':
                return sizeSort(currentCanData);
            case 'Created On':
                return createdSort(currentCanData);
            case 'Modified On':
                return modifiedSort(currentCanData);
                default:
                    console.log('This should never happen')
                break;
        }
    }
    //Handles button Selection change
    buttonSelectChanger(button) {
        const currentState = this.state;
        const newCurrentData = this.displayOptions(button);
        this.setState({...currentState, selectedButton: button, currentData: newCurrentData});
    }

  render() {

        if(this.state.cans && this.state.google) {
            return (
                <div className="container-fluid App">
                    <div className="col-xs-12">
                        <Nav currentButton={this.state.selectedButton}
                             buttonSelectChanger={this.buttonSelectChanger.bind(this)}/>
                        <DisplayArea cans={this.state.currentData} google={this.state.google}/>
                    </div>
                </div>
            );
        }
        else {
            //In the case we were actually reaching out to a server and there was a timeframe in getting the data we would have             a loading icon
            return (
                <div className="row">
                    <div className="col-xs-12 centerSpinner">
                        <div className="text-center">
                            <i className="fa fa-spin fa-spinner fa-5x"></i>
                            <br />
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            );
        }
  }
}

export default App;
