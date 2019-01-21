import React, { Component } from 'react';
function FormError(props) {
  if (props.isHidden) {return null;}
  return (
    <div className="form-warning">
        <span className="form-text text-danger">{props.errorMessage}</span>
    </div>
  )
}
const validateInput = (checkingText) => {
  const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i; 
  if(checkingText!==""){
    if (regexp.exec(checkingText) !== null) {
      return {
          isInputValid: true,
          errorMessage: ''
      };
    } else {
        return {
            isInputValid: false,
            errorMessage: 'Sai định dạng email'
        };
    }
  }else{
    return {
      isInputValid: false,
      errorMessage: 'Không được để trống'
  };
  }
  
}
export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",
      isInputValid: true,
      errorMessage: ''
      }
    }
    handleInputValidation = () => {
      const { isInputValid, errorMessage } = validateInput(this.state.value);
      this.setState({
        isInputValid: isInputValid,
        errorMessage: errorMessage
      })
      
    }
  handleUserInput(e){
    const value = e.target.value;
    this.setState({value});
  }
  render() {
    return (
      <div>
          <div className="container">
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                      onChange={(event) => this.handleUserInput(event)} 
                      onBlur={this.handleInputValidation}
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="Enter email" 
                      value = {this.state.email}
                      />
                      <FormError
                      isHidden={this.state.isInputValid} 
                      errorMessage={this.state.errorMessage} />
                </div>
              
            </form>
          </div>
      </div>
    )
  }
}
