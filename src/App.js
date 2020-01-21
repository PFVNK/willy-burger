import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './Components/Navigation'
import Homepage from './Components/Homepage'
import Welcome from './Components/Welcome'
import GetToUs from './Components/GetToUs'
import Menu from './Components/Menu'
import Promotion from './Components/Promotion'
import Burger from './Components/Burgers'
import Footer from './Components/Footer'

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
        <Route path='/gettous' exact>
          <GetToUs />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/' exact>
          <Promotion />
        </Route>
        <Route path='/burgers' exact>
          <Burger />
        </Route>
        <Route path='/' exact>
          <Footer />
        </Route>
      </div>
    </Router>

  );
}

export default App;
