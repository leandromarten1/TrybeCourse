import React from 'react';
import './AddPokeButton.css'

class AddPokeButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
        disabled={this.props.buttonDisabled}
      >
        Next Poke
      </button>
    );
  }
}

export default AddPokeButton;
