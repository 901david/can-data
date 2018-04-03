import React, { Component } from 'react';
import Card from '../Card/Card';
import './DisplayArea.css';

class DisplayArea extends Component {
    render() {
        const {cans} = this.props;
        if (cans) {
            return (
                <div className='display-area'>
                    {cans.map((can) => {
                        return (
                            <div key={can.id} className='mainCardContainer'>
                                <Card className='card-body-piece' google={this.props.google} can={can}/>
                            </div>
                        );
                    })
                    }
                </div>
            );
        }
        else {
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

export default DisplayArea;
