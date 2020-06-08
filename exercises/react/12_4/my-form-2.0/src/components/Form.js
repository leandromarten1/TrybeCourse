import React from 'react';

class Form extends React.Component {
  render () {
    return(
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <p>
              <label for="name">Nome: </label>
              <input name="name" type="text" value="" onChange="" />
            </p>
            <p>
              <label for="email">Email: </label>
              <input name="email" type="text" />
            </p>
            <p>
              <label for="cpf">CPF: </label>
              <input name="cpf" type="text" />
            </p>
            <p>
              <label for="adress">Endereço: </label>
              <input name="adress" type="text" />
            </p>
            <p>
              <label for="city">Cidade: </label>
              <input name="city" type="text" />
            </p>
            <p>
              <label for="state">Estado: </label>
              <select>
                <option>SC</option>
                <option>MG</option>
                <option>SP</option>
              </select>
            </p>
              <input type="radio" name="tipo" value="casa" />
              <input type="radio" name="tipo" value="apartamento" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;