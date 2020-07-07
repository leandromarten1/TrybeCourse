import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
    <button type="button" onClick={() => this.props.onclick}>{this.props.name}</button>
    );
  }
}

export default Button;