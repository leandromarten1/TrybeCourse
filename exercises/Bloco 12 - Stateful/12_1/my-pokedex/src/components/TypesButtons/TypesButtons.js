import React from 'react';
import TypeButton from './TypeButton/TypeButton';

class TypesButtons extends React.Component {
  render() {
    const typesArray = this.props.pokemons.reduce((typeArr, {type}) => {
      if (!typeArr.includes(type)) typeArr.push(type);
      return typeArr;
    }, ['All'])
    console.log(typesArray)
    return (
      <>
        {typesArray.map(type => <TypeButton handleClick={this.props.handleClick} type={type} />)}
      </>
    );
  }
}

export default TypesButtons;
