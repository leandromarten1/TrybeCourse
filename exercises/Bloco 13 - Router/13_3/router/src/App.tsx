import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Users from './component/Users';
import User from './component/User';
import StrictAcess from './component/StrictAcess';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route path="/users/:id" component={User} />
          <Route
            path="/strict-acess"
            render={(props) => <StrictAcess {...props} username={'João'} password={'1234'} />}
          />
          <Route
            render={(props) => <Users {...props} greetingMessage={'Good Morning'} />}
            path="/users"
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
