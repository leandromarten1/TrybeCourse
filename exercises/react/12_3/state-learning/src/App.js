import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends React.Component {
  render () {
    return (
      <button onClick={() => {this.props.handleClick(this.props.label);}}>{this.props.label}</button>
    )
  }
}

class MyLabel extends React.Component {
  render () {
    return (
    <p>Cliquei no: {this.props.text}</p>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      labelText: 'Um Botão',
    }
  }

setLabelText = (labelText) => {
  this.setState({labelText})
}

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyLabel text={this.state.labelText} />
          <MyButton handleClick={this.setLabelText} label="Botão 1"/>
          <MyButton handleClick={this.setLabelText} label="Botão 2"/>
          <MyButton handleClick={this.setLabelText} label="Botão 3"/>
          <MyButton handleClick={this.setLabelText} label="Botão 4"/>
        </header>
      </div>
    );
  }
}

export default App;
