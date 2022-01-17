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
                    <NavLink activeClassName="active" className={"tab"} exact={true} to="/projects">projects</NavLink>
                    {/* <NavLink activeClassName="active" className={"tab"} exact={true} to={this.anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Contact</NavLink> */}
                    <a href="https://docs.google.com/document/d/e/2PACX-1vR1o9CtXLcDJ5kTHn792dfyEz5sO1wgRULfRU3F8_cEXwaMxfhVLvTkmwWXZ7J_nCi_5NzSXQkWaZTX/pub" target="blank">resume</a>
                </div>
            </nav>
        )
    }
}

export default Nav;