import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lista extends Component {
  render() {
    const {name, email, address, cpf} = this.props.list;
    return (
      <div>
       {console.log(this.props.list)}
       <p>Nome: {name}</p>
       <p>Email: {email}</p>
       <p>CPF: {cpf}</p>
       <p>Endereço: {address}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer
})
export default connect(mapStateToProps)(Lista);