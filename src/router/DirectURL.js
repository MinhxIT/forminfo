import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormDisplay from '../component/FormDisplay';
import FormInfo from '../component/FormInfo';

class DirectURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={FormInfo} /> 
                    <Route exact path="/display/:number" component={FormDisplay} />
                </div>
            </Router>
        );
    }
}

export default DirectURL;