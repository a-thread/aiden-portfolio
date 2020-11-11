import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH } from "../../utils/pathNames";

import "./style.css";

class Nav extends Component {
    render() {
        return (
            <nav role='navigation' >
                <ul>
                    <li><Link to={HOME_PATH}>Home</Link></li>
                    <li><Link to={PORTFOLIO_PATH}>Projects</Link></li>
                    <li><Link to={RESUME_PATH}>Resume</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;