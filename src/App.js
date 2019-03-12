import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField } from './store/actions/actions';

const mapStateToProps = state => ({
  searchField: state.searchReducer.searchField
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});


class App extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
