import React from 'react'
import Login from '../auth/login'
import LoginImage from "../../images/programming-bg.png"

export default class Auth extends React.Component {
    constructor(props) { //does accept props, getting it from Auth component in app.js
        super(props);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
        this.handleUnSuccesfulAuth = this.handleUnSuccesfulAuth.bind(this)  //binding gives access
    }
    handleSuccesfulAuth() { //primary goal is to update the props in auth in app.js
        this.props.handleSuccesfulLogin() //this is passing the props 
        this.props.history.push("/") //this gives history of the first page that the user landed on in the site, pushing to the route route
    };
    handleUnSuccesfulAuth() {
        this.props.handleUnSuccesfulLogin()
    };
    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column-auth"
                    style={{ //the image won't show until styling
                        backgroundImage: `url(${LoginImage})`
                    }}
                />
                <div className="right-column-auth">
                    <Login 
                        handleSuccesfulAuth = {this.handleSuccesfulAuth}
                        handleUnSuccesfulAuth = {this.handleUnSuccesfulAuth}
                    />
                </div>
            </div>
        );
    }
}