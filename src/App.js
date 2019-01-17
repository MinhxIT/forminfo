import React, { Component } from 'react';
import FormInfo from  './component/FormInfo';
import DirectURL from './router/DirectURL';
class App extends Component {
  render() {
    return (   
      <div className="App">
        <DirectURL/>
      </div>
    );
  }
}

export default App;
