/* global google */
import React, { Component } from 'react';
import { getParameterByName, params } from '../../modules/utils';
import { Link } from 'react-router-dom';
import './Result.css';

class Result extends Component {
    state = {
        result: '',
        date: '',
        passengers: '',
        from: '',
        to: ''
    } 
    componentDidMount(){
        let queryParams = {};
        for(const param of params){
            const val = getParameterByName(param);
            queryParams[param] = val ? val : '';
        }
        this.directionsService = new google.maps.DirectionsService();
        this.calculateDistance(queryParams);
    }
    calculateDistance = (queryParams) => {
        this.props.setLoading(true);
        const dateNow = new Date(Date.now() + 10000);
        let depDate = new Date(Date(queryParams['date']) + dateNow.getMilliseconds());
        this.directionsService.route({
            origin: queryParams['from'],
            destination: queryParams['to'],
            travelMode: 'DRIVING',
            drivingOptions:{
                departureTime: depDate,
            }
        },(response, status) => {
            if(status === "OK"){
                this.props.setLoading(false);
                this.setState({
                    result: response.routes[0].legs[0].distance.text,
                    date: queryParams['date'],
                    passengers: queryParams['passengers'],
                    destination: queryParams['to'],
                    starting: queryParams['from'],
                });
            }else {
                this.props.setLoading(false);
                this.props.setError(true, status);
            }
        });
    }
    render(){
        let result = null;
        if(this.state.result){
            result = (
                        <div className="result"> 
                            <div><b>Distance:</b> {this.state.result}</div>
                            <div><b>Starting From:</b> {this.state.starting}</div>
                            <div><b>Destination:</b> {this.state.destination}</div>
                            <div><b>Date:</b> {this.state.date}</div>
                            <div><b>Passengers:</b> {this.state.passengers}</div>
                        </div>
                    );
        }
        return(
            <div className="distance-wrapper">
                <div>
                    <Link to="/"
                    className="home-link">Return to Home</Link>
                </div>
                {result}
            </div>
            );
    }
}

export default Result;