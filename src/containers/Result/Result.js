/* global google */
import React, { Component } from 'react';

class Result extends Component {
    constructor(props){
        super(props);
        this.directionsService = new google.maps.DirectionsService;
    }
    componentDidMount(){
        this.calculateDistance();
    }
    calculateDistance = () => {
        this.directionsService.route({
            origin: 'Chicago, IL',
            destination: 'Los Angeles, CA',
            travelMode: 'DRIVING',
        }, (response, status) => {
            console.log("response: ", response, "****");
            console.log("status: ", status, "****");
        });
    }
    render(){
        return(
            <div>
            </div>
            );
    }
}

export default Result;