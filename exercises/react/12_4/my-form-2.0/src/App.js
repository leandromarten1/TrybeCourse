import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
    }
  }

  handlerChange = event => {
    const { name, value } = event.target
    this.setState((state) => ( 
      {
        [name]: value,        
      }
    ))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <h1>FORM With React</h1>
        <form>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <p>
                Nome:
                <input name="name" type="text" value={this.state.name} onChange={this.handlerChange} maxLength="40" />
              </p>
              <p>
                Email:
                <input name="email" type="text" value={this.state.email} onChange={this.handlerChange} />
              </p>
              <p>
                CPF:
                <input name="cpf" type="text" value={this.state.cpf} onChange={this.handlerChange} />
              </p>
              <p>
                Endereço:
                <input name="adress" type="text" value={this.state.adress} onChange={this.handlerChange} />
              </p>
              <p>
                Cidade:
                <input name="city" type="text" value={this.state.city} onChange={this.handlerChange} />
              </p>
              <p>
                Estado:
                <select>
                  <option>SC</option>
                  <option>MG</option>
                  <option>SP</option>
                </select>
              </p>
              Tipo da residencia:
                <input type="radio" name="type" value="casa" checked={this.state.type === 'casa'} onChange={this.handlerChange} />Casa
                <input type="radio" name="type" value="apartamento" checked={this.state.type === 'apartamento'} onChange={this.handlerChange} />Apartamento
            </fieldset>
            <button type="submit" onClick={this.handleSubmit}>Enviar Formulário</button>
          </form>
      </div>
    );
  }
}

export default App;
