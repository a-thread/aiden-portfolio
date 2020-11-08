import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./style.css";
import headshot from "../../images/aiden.png";



class Intro extends React.Component {
    render() {
        return (
            <>
                <Box className="intro-background">
                    <div className="container">
                        <div className="headshot-image col-md-4 col-sm-12">
                            <img src={headshot} className="headshot-round img-fluid animate__animated animate__rollIn"
                                alt="Headshot of Aiden" />
                        </div>
                        <div className="col-md-8 col-sm-12 intro">
                            <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                            <h2 className="typing">
                                <span className="typewrite" data-period="2000"
                                    data-type='[ "Full Stack Developer", "Graphic Designer", "Dog Dad", "Trans Rights Activist", "Communications Specialist"]'>
                                    <span className="wrap"> </span>
                                </span>
                            </h2>
                            <a href="/portfolio">
                                <Button className="projects" variant="contained">Recent Projects</Button>
                            </a>
                        </div>
                    </div>
                </Box>
                <div className="icon arrowContainer"><a href="#bio"><i className="fas fa-chevron-down fa-10x arrow bounce"></i></a></div>
            </>
        )
    }
}

export default Intro;