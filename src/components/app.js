import React from 'react';

import PortfolioContainer from './portfolio/portfolio-container';
import NavContainer from './navigation/navContainer';
import Home from './pages/home';
import About from './pages/about';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <div>
          <NavContainer />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about-me' component={About} />
          </Switch>
        </div>
      </Router>

      <h1>Dev Camp React JS</h1>
      <h2>React Redux Router</h2>

      <PortfolioContainer />
    </div>
  )
}