import React, {Component} from 'react';
//import PortfolioContainer from './portfolio/portfolio-container';
import NavContainer from './navigation/navContainer';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NoMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavContainer />
            <Switch> {/*`this is a switch, goes down until it finds a match`*/}
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path="/admin-login" component={Auth} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}