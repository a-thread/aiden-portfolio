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
                            <img src={headshot} className="img-fluid animate__animated animate__rollIn shadow"
                                alt="Headshot of Aiden" />
                        </div>
                        <div className="intro">
                            <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                            <Typical
                                steps={[1000, 'Full Stack Developer', 2000, 'Graphic Designer', 1000, 'Dog Dad', 1000, 'Trans Rights Activist']}
                                loop={Infinity}
                                wrapper="h2"
                                className="typewrite"
                            />
                            <Link to="/recent">
                                <Button className="shadow projects animate__animated animate__backInRight" aria-label="projects">Recent Projects</Button>
                            </Link>
                        </div>
                    </div>
                    <a href="#bio" aria-label="bio"><div className="arrow"><i className="fas fa-chevron-down"></i></div></a>
                </Box>
            </>
        )
    }
}

export default Intro;