import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HOME_PATH, RESUME_PATH, PORTFOLIO_PATH } from "../../utils/pathNames";

import "./style.css";

class Nav extends Component {
    render() {
            return(
            <nav role = 'navigation' >
                <div className="toggle">
                        menu <i className="fa fa-bars"></i>
                </div>
                <ul>
                    <li><Link to={HOME_PATH} className="active">Home</Link></li>
                    <li><Link to={PORTFOLIO_PATH}>Projects</Link></li>
                    <li><Link to={RESUME_PATH}>Resume</Link></li>
                    <li><a className="close-nav"><i className="fa fa-times"> <span className="visible-xs"></span></i></a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;