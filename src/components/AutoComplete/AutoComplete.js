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
        console.log('triggered');
        const place = this.autocomplete.getPlace();
        this.props.onPlaceChanged(place);
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
        required={this.props.required}/>
        </div>
    );
  }
}

export default AutoComplete;