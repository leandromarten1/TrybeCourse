import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <p><strong>{type}</strong></p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

export default Pokemon
