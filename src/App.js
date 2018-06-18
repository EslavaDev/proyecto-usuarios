import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom' 


import './App.css';

import Home from './views/Home';
import Login from './views/Login';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
