import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lista extends Component {
  render() {
    return (
      <div>
       {console.log(this.props.data)}
       <p>Nome: {this.props.data.name}</p>
       <p>Email: {this.props.data.email}</p>
       <p>CPF: {this.props.data.cpf}</p>
       <p>Endereço: {this.props.data.address}</p>
       <p>Cidade: {this.props.data.city}</p>
       <p>Estado: {this.props.data.countryState}</p>
       <p>Resumo: {this.props.data.resume}</p>
       <p>Cargo: {this.props.data.role}</p>
       <p>Descrição do cargo: {this.props.data.roleDescription}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.listReducer
})
export default connect(mapStateToProps)(Lista);