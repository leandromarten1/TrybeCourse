import React, { Component } from 'react';
import Picture from './Picture';
import propTypes from 'prop-types';

class PicturesList extends Component {  
  render() {
    const children = this.props.children;
    return (
      <ul className="images">
        {children.map((child, i) => {
        return <li key={i}><Picture src={child.url} alt={child.alt} height={child.height}  /></li>;
        
      })}
      </ul>
    );
  }
}

PicturesList.propTypes = {

}

export default PicturesList;