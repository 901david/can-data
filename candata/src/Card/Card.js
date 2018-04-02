import React, {  Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

    }
    convertDate = (date) => {
        Date.fromISO = (s) => new Date(s);
        const dateToConvert = Date.fromISO(date).toString().split(' ');
        const timeArray = dateToConvert[4].split(':');
        if (parseInt(timeArray[0]) === 12) {
            return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${timeArray[0]}:${timeArray[1]}:${timeArray[2]} p.m.`;
        }
        if (parseInt(timeArray[0]) === 0) {
            return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at 12:${timeArray[1]}:${timeArray[2]} a.m.`;
        }
        if (parseInt(timeArray[0]) < 13) {
            return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${timeArray[0]}:${timeArray[1]}:${timeArray[2]} a.m.`;
        }
        if (parseInt(timeArray[0]) > 12) {
            const newTime = parseInt(timeArray[0]) - 12;
            return `${dateToConvert[0]} ${dateToConvert[1]}-${dateToConvert[2]}-${dateToConvert[3]} at ${newTime}:${timeArray[1]}:${timeArray[2]} p.m.`;

        }
    }
    render() {
        const testData = {
            "id": 2521,
            "name": "0001",
            "serial": "58010",
            "size": "10",
            "requiresMaintenance": 0,
            "outOfService": 0,
            "source": "Thesolution",
            "startDate": "2017-03-14T00:00:00.000Z",
            "hazardous": 0,
            "action": null,
            "timestamp": "2017-11-07T18:47:53.162Z",
            "createdBy": null,
            "createdDate": "2017-11-07T18:47:53.162Z",
            "modifiedBy": null,
            "modifiedDate": "2017-11-07T18:47:53.162Z",
            "attachment": "hook",
            "deleted": 0,
            "location": {
                "id": 2,
                "name": "421 E 21st St, Denver, CO 80216",
                "description": null,
                "type": "WAYPOINT",
                "waypointType": "HOME_YARD",
                "waypointName": "5280 Home Yard",
                "location": {
                    "lon": -104.99,
                    "lat": 39.810991
                },
                "createdBy": "dispatch3",
                "createdDate": "2018-02-12T14:16:50.410Z",
                "modifiedBy": "email@starlightpro.com",
                "modifiedDate": "2017-11-19T23:46:12.233Z"
            },
            "prevLocation": {
                "id": null,
                "name": null,
                "description": null,
                "type": null,
                "waypointType": null,
                "waypointName": null,
                "location": {
                    "lon": null,
                    "lat": null
                },
                "createdBy": null,
                "createdDate": null,
                "modifiedBy": null,
                "modifiedDate": null
            }
        };
        const {id, name, serial, size, requiresMaintenance, outOfService, source, startDate, hazardous, location} = this.props.can;
        return (
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Can ID: {id}</h5>
                        <ul>
                            <li>Can Name: {name}</li>
                            <li>Can Serial No: {serial}</li>
                            <li>Can Size: {size}</li>
                            <li>Client Name: {source}</li>
                            <li>Can Start Date: {this.convertDate(startDate)}</li>
                        </ul>
                        <h5 className='card-title'>Can Location:</h5>
                        <ul>
                            <li>Location Id: {location.id}</li>
                            <li>Location Address: {location.name}</li>
                            <li>Created By: {location.createdBy}</li>
                            <li>Created On: {this.convertDate(location.createdDate)}</li>
                            <li>Last Modified By: {location.modifiedBy}</li>
                            <li>Last Modified On: {this.convertDate(location.modifiedDate)}</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default Card;
