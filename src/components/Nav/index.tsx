import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div>
                <NavLink to="/"><h1><span className="green">Aiden</span> Threadgoode</h1></NavLink>
                </div>
                <div>
                    <NavLink activeClassName="active" className={"tab"} exact={true} to="/">home</NavLink>
                    <NavLink activeClassName="active" className={"tab"} exact={true} to="/recent">projects</NavLink>
                    <NavLink activeClassName="active" className={"tab"} exact={true} to="/resume">resume</NavLink>
                </div>
            </nav>
        )
    }
}

export default Nav;