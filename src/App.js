import React, { Component } from 'react';
import DirectURL from './router/DirectURL';
import Email from './component/Email';
import EmailUsePackage from './component/EmailUsePackage';
class App extends Component {
  render() {
    return (   
      <div className="App">
        {/* <DirectURL/> */}
        <Email/>
        {/* <EmailUsePackage/>  */}
      </div>
    );
  }
}

export default App;
