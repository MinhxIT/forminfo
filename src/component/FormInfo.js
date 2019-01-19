import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
class FormInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRedirect:false,
            fName:"",
            fAddress:"",
            fPhone:""
        }
    }
    submitForm = (event)=>{
        event.preventDefault();
        const { updateData, history } = this.props;
        const { fName, fAddress, fPhone } = this.state;
        updateData({ fName, fAddress, fPhone });
        history.push("/display");
    }
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    
    render() {
        
        return (
            <div>
                <div className="container">  
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Họ và tên</label>
                            <input name="fName" onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Họ và tên" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Địa chỉ</label>
                            <input name="fAddress" onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Địa chỉ" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput3">Số điện thoại</label>
                            <input name="fPhone" onChange={(event)=>this.isChange(event)} type="text" className="form-control" id="formGroupExampleInput3" placeholder="Số điện thoại" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(event)=>this.submitForm(event)}>Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}
export default withRouter(FormInfo);