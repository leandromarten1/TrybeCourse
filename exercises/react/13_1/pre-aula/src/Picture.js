import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Picture extends Component {
  render() {
    return (
      <img src={this.props.src} height={this.props.height} alt={this.props.alt} legenda={this.props.legenda} />
    );
  }
}

Picture.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  children: PropTypes.element.isRequired,
}

Picture.defaulProps = {
  height: 400,
}

export default Picture;