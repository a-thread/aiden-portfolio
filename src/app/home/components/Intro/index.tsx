import React from "react";
import Typical from 'react-typical';
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import headshot from "./aiden.png";
import "./style.scss";



class Intro extends React.Component {

    render() {
        return (
            <>
                <Box className="intro-background">
                    <div className="container">

                        <div className="headshot-image">
                            {/* image */}
                            <img src={headshot} className="img-fluid animate__animated animate__rollIn shadow" alt="Headshot of Aiden" />
                        </div>
                        <div className="intro">
                            {/* Intro title */}
                            <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                            {/* Typing */}
                            <Typical
                                // subtitles
                                steps={[2000, 'Full Stack Engineer', 1000, 'Artist', 1000, 'Dog Dad', 1000, 'Trans Rights Activist']}
                                // timing
                                loop={Infinity}
                                // setting size/type
                                wrapper="h2"
                                // className for Css
                                className="typewrite"
                            />
                            {/* Project button */}
                            <Link to="/projects">
                                <Button className="shadow projects animate__animated animate__backInRight" aria-label="projects">recent projects</Button>
                            </Link>
                        </div>
                    </div>
                    {/* Bouncing arrow */}
                    <a href="#bio" aria-label="bio">
                        <div className="arrow">
                            <i className="fas fa-chevron-down"/>
                        </div>
                    </a>
                </Box>
            </>
        )
    }
}

export default Intro;