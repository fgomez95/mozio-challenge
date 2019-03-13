/* global google */
import React, { Component } from 'react';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autocompleteInput.current
            );
        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }

    handlePlaceChanged = () => {
        const place = this.autocomplete.getPlace();
        const fullAddress = `${place.name} ${place.formatted_address}`;
        this.props.onChange({ target: { 
            name: this.props.name, 
            value: fullAddress
        }});
    }

  render() {
    return (
        <div className="input-wrapper">
            <label htmlFor={this.props.label}>
                {this.props.label}
            </label>
            
            <input ref={this.autocompleteInput}
            placeholder={this.props.placeholder}
            type="text" 
            name={this.props.name}
            required={this.props.required} 
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
    );
  }
}

export default AutoComplete;