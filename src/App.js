import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation'
import Homepage from './Components/Homepage'
import Welcome from './Components/Welcome'
import Menu from './Components/Menu'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'>
          <Navigation />
        </Route>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/' exact>
          <Welcome />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
      </div>
    </Router>

  );
}

export default App;
