import React, { Component } from'react';
import GoogleMapReact from 'google-map-react';
import MapInner from './Map-Inner';

class Map extends Component {
    renderMarkers(map, maps, lat, long) {
        let marker = new maps.Marker({
            position: {lat: lat, lng: long},
            map,
            title: this.props.name
        });
    }
    render() {
        return (
            <div className='col-xs-12 map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: this.props.google }}
                    defaultCenter={{lat: this.props.lat, lng: this.props.long}}
                    defaultZoom={16}
                    onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps, this.props.lat, this.props.long)}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                    <MapInner text={this.props.name}>

                    </MapInner>

                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;

