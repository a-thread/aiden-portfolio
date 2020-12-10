import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.scss";

class Contact extends Component {
    render() {
        return (
            <Box id="contact">
                <h3 className="title">Contact</h3>

                <article>
                    <div className="contact-info">
                        <a className="contact-item" href="https://github.com/a-thread" rel="noreferrer" target="_blank"><strong><i
                            className="fab fa-github"></i>
                            Github:</strong> github.com/a-thread</a>
                        <a className="contact-item" href="https://www.linkedin.com/in/a-thread" rel="noreferrer" target="_blank"><strong><i
                            className="fab fa-linkedin"></i> LinkedIn: </strong>
                            linkedin.com/in/aiden-threadgoode/</a>
                        <a className="contact-item" href="mailto:aiden.threadgoode@gmail.com"><strong><i
                            className="fas fa-paper-plane"></i>
                            Email: </strong>
                            aiden.threadgoode@gmail.com</a>
                        <a className="contact-item" href="tel:2077491341"><i className="fas fa-phone"></i><strong>
                            Phone:</strong>
                            207-749-1341</a>
                    </div>
                </article>
            </Box>
        )
    }
}

export default Contact;