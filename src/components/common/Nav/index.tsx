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
                    <a href="https://drive.google.com/file/d/1C4IvGw7hGOexXuyiZfb2u0yhdMKgvxxe/view?usp=sharing" target="blank">resume</a>
                </div>
            </nav>
        )
    }
}

export default Nav;