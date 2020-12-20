import React, { Component } from "react";
import "./style.scss";

class Sticky extends Component {
    render() {
        return (
            <nav role='navigation' >
                <ul>
                    {/* Github */}
                    <li><a href="https://github.com/a-thread" aria-label="github" rel="noreferrer" target="_blank"><i className="fab fa-github"/></a></li>

                    {/* LinkedIn */}
                    <li><a href="https://www.linkedin.com/in/a-thread" aria-label="linkedin" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"/></a></li>

                    {/* Email */}
                    <li><a href="mailto:aiden.threadgoode@gmail.com" aria-label="email"><i className="far fa-paper-plane"/></a></li>
                </ul>
            </nav>
        )
    }
}

export default Sticky;