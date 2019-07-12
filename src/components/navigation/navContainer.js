import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { withRouter } from "react-router-dom";

const NavComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to="/create-blog-post" activeClassName="nav-link-active">Blog Manager</NavLink>
            </div>
        )
    }
    //sign out function
    const handleSignOut = () => { //semding request to delete session and then after that and checks if it did
        Axios.delete("https://api.devcamp.space/logout", { withCredentials: true }).then(Response => {
            if (Response.status === 200) { //reroute, change logStatus
                props.history.push('/');
                props.handleSuccesfulLogout();
            }
            return Response.data;
        }).catch(error => {
            console.error("An error has occured...", error);
        })
    };
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active"> Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/create-blog-post", "BlogPost") : null}
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/create-blog-post", "BlogPost") : null}

            </div>
            <div className="right-side">
                MAL BARNARD
                {/* Only need to use this in a class component */}
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut} href="">Sign Out</a> : null}
                </div>
        </div>
    )
}
export default withRouter(NavComponent);