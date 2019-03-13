import React, { Component } from 'react';
import './Home.css';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
import { withRouter } from 'react-router-dom';
import { getParameterByName, params } from '../../modules/utils';

class Home extends Component {
    state = { 
        from: '',
        to: '',
        date: '',
        passengers: '',
    }
    componentDidMount(){
        for(const param of params){
            const val = getParameterByName(param);
            this.setState({ [param]: val ? val : '' });
            this.props.setError(false, '');
        }
    }
    onInputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        if(Object.values(this.state).some(el => el === '')) 
            this.props.setError(true, 'Please fill required fields');
        let url = '/result?';
        for(let stateParam in this.state) url += `&${stateParam}=${this.state[stateParam]}`;
        this.props.history.push(url);
    }
    render(){
        return(
            <div className="form-wrapper">
                <form onSubmit={this.onFormSubmit}>
                
                    <AutoComplete placeholder="Start Point" 
                    label="Start Point"
                    required={true}
                    value={this.state.from}
                    onChange={this.onInputHandler}
                    name="from"/>
                    
                    <AutoComplete placeholder="End Point" 
                    label="End Point"
                    required={true}
                    value={this.state.to}
                    onChange={this.onInputHandler}
                    name="to"/>
                    
                    <div className="input-wrapper">
                        <label htmlFor="date">Date</label>
                        <input type="date" 
                        required 
                        name="date"
                        onChange={this.onInputHandler}
                        value={this.state.date}/>
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="passengers">
                            Number of Passengers
                        </label>
                        <input type="number" 
                        required 
                        name="passengers"
                        value={this.state.passengers}
                        onChange={this.onInputHandler}/>
                    </div>
                    
                    <input type="submit" className="submit"/>
                </form>
            </div>
            );
    }
}

export default withRouter(Home);