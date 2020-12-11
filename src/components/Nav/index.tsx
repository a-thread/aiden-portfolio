import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div>
                    <h1><span className="green">Aiden</span> Threadgoode</h1>
                </div>
                <div>
                    <NavLink activeClassName="active" className={"tab"} to="/">home</NavLink>
                    <NavLink activeClassName="active" className={"tab"} to="/recent">projects</NavLink>
                    <NavLink activeClassName="active" className={"tab"} to="/resume">resume</NavLink>
                </div>
            </nav>
        )
    }
}

export default Nav;