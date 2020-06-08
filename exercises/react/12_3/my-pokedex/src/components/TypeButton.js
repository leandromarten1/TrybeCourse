import React from 'react';

class TypeButton extends React.Component {
  render () {
    return (
      <button>{this.props.type}</button>
    )
  }
}

export default TypeButton;