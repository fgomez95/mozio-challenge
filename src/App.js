import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, requestResults } from './store/actions/actions';

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
  componentWillMount(){
    this.props.onRequestResult();
  }
  render() {
    const results = this.props.results.map((el, i) => <p key={i}>{ el }</p>);
    const loading = this.props.isLoading ? <p>Loading...</p> : null;
    return (
      <div className="App">
        <input onChange={(e) => this.props.onSearchChange(e)}
        value={this.props.searchField}/>
        {results}
        {loading}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
