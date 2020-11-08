import React, { Component } from "react";
import "./style.css";

class Nav extends Component {

    render() {
        return (
            <nav role='navigation'>
                <div className="toggle">
                    menu <i className="fa fa-bars"></i>
                </div>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/portfolio">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a className="close-nav"><i className="fa fa-times"> <span className="visible-xs"></span></i></a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;