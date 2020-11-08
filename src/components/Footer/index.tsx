import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="btnsRow">
                    <a href="https://github.com/a-thread" rel="noreferrer" target="_blank"><h2 className="footer-btns"><i className="fab fa-github"></i></h2></a>
                    <a href="https://www.linkedin.com/in/a-thread" rel="noreferrer" target="_blank"><h2 className="footer-btns"><i className="fab fa-linkedin-in"></i></h2></a>
                    <a href="mailto:aiden.threadgoode@gmail.com"><h2 className="footer-btns"><i className="far fa-paper-plane"></i></h2></a>
                </div>
                <p className="footer-name">© Aiden Threadgoode</p>
            </div>
        )
    }
}

export default Footer;