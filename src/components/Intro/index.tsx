import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { PORTFOLIO_PATH } from "../../utils/pathNames";
import Typical from 'react-typical';
import headshot from "../../images/aiden.png";
import "./style.css";



class Intro extends React.Component {

    render() {
        return (
            <>
                <Box className="intro-background">
                    <div className="container">
                        <div className="headshot-image">
                            <img src={headshot} className="headshot-round img-fluid animate__animated animate__rollIn"
                                alt="Headshot of Aiden" />
                        </div>
                        <div className="intro">
                            <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                            <Typical
                                steps={[ 1000, 'Full Stack Developer', 2000, 'Graphic Designer', 1000, 'Dog Dad', 1000, 'Trans Rights Activist']}
                                loop={Infinity}
                                wrapper="h2"
                                className="typewrite"
                            />
                            <Link to={PORTFOLIO_PATH}>
                                <Button className="projects animate_animated animate__fadeIn" variant="contained" aria-label="projects">Recent Projects</Button>
                            </Link>
                        </div>
                    </div>
                </Box>
                <div className="icon arrowContainer"><a href="#bio" aria-label="bio"><i className="fas fa-chevron-down arrow bounce"></i></a></div>
            </>
        )
    }
}

export default Intro;