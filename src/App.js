import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, requestResults } from './store/actions/actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Result from './containers/Result/Result';

const mapStateToProps = state => ({
  searchField: state.searchReducer.searchField,
  isLoading: state.searchReducer.loading,
  results: state.searchReducer.results,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestResult: () => dispatch(requestResults()),
});

class App extends Component{
  selectPlaceFrom = (data) => { console.log(data); }
  selectPlaceTo = (data) => { console.log(data); }
  onFormSubmit = (e) => { e.preventDefault(); console.log('form sent'); }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"
          render={() => (<Home onFormSubmit={this.onFormSubmit}/>)}/>
          <Route exact path="/result" 
          component={Result} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
