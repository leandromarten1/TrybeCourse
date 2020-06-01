import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight:{value, measurementUnit}, image  } = this.props.pokemon
    return (
    <div className="pokemon">
      <div className="poke-info">
        <h3>{name}</h3>
        <h5>{type}</h5>
        <p>Average Weight: {value} {measurementUnit}</p>
      </div>
      <img className="poke-image" src={image} alt={name}/>
    </div>
    )
  }
}

export default Pokemon;