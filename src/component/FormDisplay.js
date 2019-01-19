import React, { Component } from 'react';

class FormDisplay extends Component {
  render() {
    if(!this.props.data) {
      return "No data in form!";
    }
    const { fName, fAddress, fPhone } = this.props.data;
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{fName}</td>
              <td>{fAddress}</td>
              <td>{fPhone}</td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default FormDisplay;
