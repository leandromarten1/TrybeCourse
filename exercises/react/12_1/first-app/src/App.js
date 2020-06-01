import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myArr = ['Estudar React', 'Todo dia', 'Até virar', 'NINJA', '#GOTRYBE'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leandro Marten - React Learn
        </a>
        <div className="tasks" >
          <ul>
            {task('New Task')}
            {
              myArr.map(e => task(e))
            }
          </ul>
        </div>
      </header>     
    </div>
  );
}

export default App;
