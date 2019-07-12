import React, { Component } from 'react';
import Axios from 'axios';
//import PortfolioContainer from './portfolio/portfolio-container';
import NavContainer from './navigation/navContainer';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NoMatch from './pages/no-match';
import BlogPost from './pages/blog-post.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
    this.handleUnSuccesfulLogin = this.handleUnSuccesfulLogin.bind(this)
    this.handleSuccesfulLogout = this.handleSuccesfulLogout.bind(this)
  }
  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnSuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  handleSuccesfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return Axios.get("https://api.devcamp.space/logged_in",
      {
        withCredentials: true
      })
      .then(Response => {
        this.setState({
          loggedInStatus: Response.data.logged_in ? "LOGGED_IN" : 'NOT_LOGGED_IN'
        })
      })
      .catch(error =>
        console.log("error", error)
      );
  }
  componentDidMount() {
    this.checkLoginStatus();
  }
  authorizedPages() {
    return [
      <Route path='/create-blog-post' component={BlogPost} />
    ]
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavContainer 
            loggedInStatus={this.state.loggedInStatus} //passing in these functions as props directly
            handleSuccesfulLogout={this.handleSuccesfulLogout}
            />
            <Switch> {/*`this is a switch, goes down until it finds a match`*/}
              <Route exact path='/' component={Home} />
              <Route exact path='/blog' component={Blog} />
              <Route path='/about-me' component={About} />
              {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizedPages()) : null};
              <Route
                path="/admin-login"
                render={props => (  //rendering is advanced for a first react course, instead of passing a normal prop, we are doing a normal prop, rendering it, telling it to call auth and render that and allow it access to everyting it should have and ovveride it and pass in your own functions
                  <Auth
                    {...props} //passing in the props in auth
                    handleSuccesfulLogin={this.handleSuccesfulLogin}
                    handleUnSuccesfulLogin={this.handleUnSuccesfulLogin}
                  />

                )

                  //render allows us to use the render process and render the prop 
                }
              />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}