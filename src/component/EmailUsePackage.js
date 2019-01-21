import React, { Component } from 'react'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import { isEmail, isEmpty } from 'validator';
    const required = (value) => {
        if (isEmpty(value)) {
            return <small className="form-text text-danger">This field is required</small>;
        }
    }

    const email = (value) => {
        if (!isEmail(value)) {
            return <small className="form-text text-danger">Invalid email format</small>;
        }
    }
export default class EmailUsePackage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : ''
        };
    }
    render() {
        return (
            <div className="container">
                <div className="login-container">  
                    <div className="form-box">
                        <Form>
                            <Input 
                                name="email" 
                                onChange={this.onChangeHandler}
                                type="text" 
                                placeholder="Email"
                                className="form-control" 
                                validations={[required, email]}
                            />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
