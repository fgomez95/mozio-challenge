import React from 'react';
import './Home.css';
import AutoComplete from '../AutoComplete/AutoComplete';

const home = ({ onFormSubmit }) => {
    return(
        <div className="form-wrapper">
            <form onSubmit={onFormSubmit}>
            <AutoComplete placeholder="Start Point" 
            label="Start Point"
            required={true}/>
            
            <AutoComplete placeholder="End Point" 
            label="End Point"
            required={true}/>
            
            <div className="input-wrapper">
                <label htmlFor="Date">Date</label>
                <input type="date" required/>
            </div>
            
            <div className="input-wrapper">
                <label htmlFor="num passengers">
                    Number of Passengers
                </label>
                <input type="number" required/>
            </div>
            
            <input type="submit" className="submit"/>
            
            </form>
        </div>
        );
};

export default home;