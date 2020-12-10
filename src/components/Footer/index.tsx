import React, { Component } from "react";
import "./style.scss";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="btnsRow">
                    <a href="https://github.com/a-thread" aria-label="github" rel="noreferrer" target="_blank"><span className="footer-btns"><i className="fab fa-github"></i></span></a>
                    <a href="https://www.linkedin.com/in/a-thread" aria-label="linkedin" rel="noreferrer" target="_blank"><span className="footer-btns"><i className="fab fa-linkedin-in"></i></span></a>
                    <a href="mailto:aiden.threadgoode@gmail.com" aria-label="email"><span className="footer-btns"><i className="far fa-paper-plane"></i></span></a>
                </div>
            </div>
        )
    }
}

export default Footer;