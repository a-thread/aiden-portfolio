import React, { Component } from "react";
import "./style.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="btnsRow">
                    {/* Github */}
                    <a href="https://github.com/a-thread" aria-label="github" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/a-thread" aria-label="linkedin" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    {/* Email */}
                    <a href="mailto:aiden.threadgoode@gmail.com" aria-label="email"><i className="far fa-paper-plane"></i></a>
                </div>
            </div>
        )
    }
}

export default Footer;