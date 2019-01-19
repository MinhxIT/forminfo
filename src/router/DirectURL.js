import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import FormDisplay from '../component/FormDisplay';
import FormInfo from '../component/FormInfo';
class DirectURL extends Component {
    state = {
        data: null
    }
    updateData = (data) => {
        this.setState({ data });
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={() => {
                        return <FormInfo updateData={this.updateData} />
                    }} /> 
                    <Route exact path="/display" render={() => {
                        return <FormDisplay data={this.state.data} />
                    }} />
                </div>
            </Router>
        );
    }
}
export default DirectURL;