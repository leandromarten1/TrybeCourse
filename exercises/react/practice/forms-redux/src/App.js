import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Form from './Form';
import Lista from './Lista';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <Lista />
      </Provider>
    </div>
  );
}

export default App;
