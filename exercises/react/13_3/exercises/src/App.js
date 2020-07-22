import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import User from './User';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/user" render={(props) => <User greetingMessage="Good Morning" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;