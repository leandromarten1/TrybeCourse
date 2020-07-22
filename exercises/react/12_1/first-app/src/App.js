import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  clearForms = () => {
    this.validateEmail();
    this.setState({
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      cv: '',
      cargo: '',
      descricao: '',
    });
  };

  validateEmail = () => {
    const emailRegex = /^\w{1,15}@\w{1,15}\.\w{1,15}/;
    console.log(emailRegex.test(this.state.email));
    return emailRegex.test(this.state.email);
  };

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <label>
              name:
              <input
                type="text"
                name="name"
                maxLength={40}
                value={this.state.name}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              email:
              <input
                type="text"
                name="email"
                maxLength={50}
                value={this.state.email}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              CPF:
              <input
                type="text"
                name="cpf"
                minLength={11}
                maxLength={11}
                value={this.state.cpf}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Endereço:
              <input
                type="text"
                name="endereco"
                maxLength={200}
                value={this.state.endereco}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                name="cidade"
                maxLength={20}
                value={this.state.cidade}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Estado:
              <input
                type="text"
                name="estado"
                maxLength={20}
                value={this.state.estado}
                required
                onChange={this.handleInputChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              CV:
              <textarea
                type="text"
                name="cv"
                maxLength={1000}
                required
                value={this.state.cv}
                onChange={this.handleInputChange}
              ></textarea>
            </label>
            <label>
              Cargo:
              <input
                type="text"
                name="cargo"
                maxLength={20}
                value={this.state.cargo}
                required
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Descrição:
              <textarea
                type="text"
                name="descricao"
                maxLength={500}
                required
                value={this.state.descricao}
                onChange={this.handleInputChange}
              ></textarea>
            </label>
          </fieldset>
          <input onClick={this.clearForms} type="reset" />
        </form>
      </div>
    );
  }
}

export default App;