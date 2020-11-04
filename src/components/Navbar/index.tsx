import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="nav navbar navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="index.html">
                <h2 className="logo">AIDEN <span className="lastname">THREADGOODE</span></h2>
            </a>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse"
                data-target="#navbarNav" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <i className="brgr fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse navLinks" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/#portfolio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/resume"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/#bio"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Bio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/#contact"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;