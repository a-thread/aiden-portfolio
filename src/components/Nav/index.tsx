import React, { Component } from "react";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH } from "../../pathNames";
import "./style.css";

class Nav extends Component {

    render() {
        return (
            <nav role='navigation'>
                <div className="toggle">
                    menu <i className="fa fa-bars"></i>
                </div>
                <ul>
                    <li><a className="active" href={HOME_PATH}>Home</a></li>
                    <li><a href={PORTFOLIO_PATH}>Projects</a></li>
                    <li><a href={RESUME_PATH}>Resume</a></li>
                    <li><a className="close-nav"><i className="fa fa-times"> <span className="visible-xs"></span></i></a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;