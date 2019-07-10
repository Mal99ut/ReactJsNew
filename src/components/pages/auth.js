import React from 'react'
import Login from '../auth/login'
import LoginImage from "../../images/programming-bg.png"

export default class Auth extends React.Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column-auth"
                    style={{ //the image won't show until styling
                        backgroundImage: `url(${LoginImage})`
                    }}
                />
                <div className="right-column-auth">
                    <Login />
                </div>
            </div>
        );
    }
}