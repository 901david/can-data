import React, {  Component } from 'react';
import './Card.css';
import { convertDate } from "../SearchHelpers";
import Map from '../Map/Map';

class Card extends Component {
    //Handles whether the Need Maintenance Icon needs to be shown
    needsMaintenance(bool) {
        if(bool) {
        return (
            <i className="fas fa-band-aid"></i>
        )
        }
    }
    //Handles whether the Out of Service Icon should show
    outOfServiceCheck(bool) {
        if(bool) {
           return (
               <i className="fas fa-lock-open"></i>
           )
        }
    }
    //Handles whether the Hazardous conditions Icon should show
    hazardousConditions(bool) {
        if(bool) {
            return (
                <i className="fas fa-exclamation-triangle"></i>
            );
        }
    }

    render() {

        const {id, name, serial, size, createdDate, requiresMaintenance, outOfService, source, startDate, hazardous, location, modifiedDate} = this.props.can;

        return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Can ID: {id}</h5>
                        <h6 className='card-title'>Created: {convertDate(createdDate)}</h6>
                        <ul>
                            <li>Can Name: {name}</li>
                            <li>Can Serial No: {serial}</li>
                            <li>Can Size: {size}</li>
                            <li>Client Name: {source}</li>
                            <li>Can Start Date: {convertDate(startDate)}</li>
                            <li>Last Modified Date: {convertDate(modifiedDate)}</li>

                        </ul>
                        <h5 className='card-title'>Can Location:</h5>
                        <ul>
                            <li>Location Id: {location.id}</li>
                            <li>Location Address: {location.name}</li>
                            <li>Created By: {location.createdBy}</li>
                            <li>Created On: {convertDate(location.createdDate)}</li>
                            <li>Last Modified By: {location.modifiedBy}</li>
                            <li>Last Modified On: {convertDate(location.modifiedDate)}</li>
                        </ul>

                        <div className='col-xs-12 possibles'>
                        {this.needsMaintenance(requiresMaintenance)}
                        {this.outOfServiceCheck(outOfService)}
                        {this.hazardousConditions(hazardous)}
                        </div>
                        <Map
                            google={this.props.google}
                            name={location.name}
                            lat={location.location.lat}
                            long={location.location['lon']} />
                    </div>
            </div>
        );
    }
}

export default Card;
