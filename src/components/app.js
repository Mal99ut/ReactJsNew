import React from 'react';

import PortfolioContainer from './portfolio/portfolio-container';
import NavContainer from './navigation/navContainer';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import PortfolioDetail from "./portfolio/portfoio-detail"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='app'>
      <Router>
        <div>
          <h1>Dev Camp React JS</h1>
          <h2>React Redux Router</h2>
          <NavContainer />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about-me' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route path="/portfolio/:slug" component={PortfolioDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}