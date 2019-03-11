import React, { Component } from 'react';
import './App.css';

type TestProps = {
  name: string,  
}

class Test extends Component <TestProps> {
  render(){ return <div>{ this.props.name }</div>; }
}

class App extends Component <{}> {
  render() {
    return (
      <div className="App">
        <Test name="Fernando" />
      </div>
    );
  }
}

export default App;
