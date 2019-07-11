import React from "react";
import { NavLink } from "react-router-dom";

const NavComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            </div>
        )
    }
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active"> Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null}
            </div>
            <div className="right-side">
                MAL BARNARD
                </div>
        </div>
    )
}
export default NavComponent;