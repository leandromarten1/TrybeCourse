import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const content = [
    {id: 1, item: 'O Monge e o Executivo'},
    {id: 2, item: 'CSS 3'},
    {id: 3, item: 'React is Awesome'},
    {id: 4, item: 'XABLAU!'},
  ];

  return (
    <div className="App">
      <Dropdown content={content}>DropDown</Dropdown>
    </div>
  );
}

export default App;
