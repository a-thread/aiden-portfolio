import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";

class Contact extends Component {
    render() {
        return (
            <main id="contact">
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-3 contact-title">
                            Contact
                </h2>
                        <article className="col-md-9">
                            <div className="contact-info">
                                <a className="contact-item" href="https://github.com/a-thread" rel="noreferrer" target="_blank"><strong><i
                                    className="fab fa-github"></i>
                            Github:</strong> github.com/a-thread</a>
                                <a className="contact-item" href="https://www.linkedin.com/in/a-thread" rel="noreferrer" target="_blank"><strong><i
                                    className="fab fa-linkedin"></i> LinkedIn:</strong>
                        linkedin.com/in/aiden-threadgoode/</a>
                                <a className="contact-item" href="mailto:aiden.threadgoode@gmail.com"><strong><i
                                    className="fas fa-paper-plane"></i>
                            Email:</strong>
                        aiden.threadgoode@gmail.com</a>
                                <a className="contact-item" href="tel:2077491341"><i className="fas fa-phone"></i><strong>
                                    Phone:</strong>
                        207-749-1341</a>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        )
    }
}

export default Contact;