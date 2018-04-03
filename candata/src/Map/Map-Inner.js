import React, { Component } from 'react';

class MapInner extends Component {

    render() {

        return (
        <div className='map-inner'>
            <p>{this.props.text}</p>
        </div>

    );
    }
}

export default MapInner;
