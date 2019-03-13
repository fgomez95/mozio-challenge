import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setLoading, setError } from './store/actions/actions';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Result from './containers/Result/Result';
import Errors from './components/Errors/Errors';
import Loading from './components/Loading/Loading';

const mapStateToProps = state => ({
  loading: state.mainReducer.loading,
  error: state.mainReducer.error,
  errorInfo: state.mainReducer.errorInfo
});

const mapDispatchToProps = dispatch => ({
  onSetLoading: (isLoading) => dispatch(setLoading(isLoading)),
  onSetError: (isError, errorInfo) => dispatch(setError(isError, errorInfo))
});

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"
          render={() => (<Home setError={this.props.onSetError}/>)}/>
          
          <Route exact path="/result" 
          render={() => (<Result setError={this.props.onSetError} 
                         setLoading={this.props.onSetLoading}/>)} />
          
          <Loading isLoading={this.props.loading}/>
          <Errors errorInfo={this.props.errorInfo}
          show={this.props.error} 
          close={this.props.onSetError}/>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
