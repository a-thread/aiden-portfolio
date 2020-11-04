import * as React from "react";
import "./style.css";
import headshot from "../../images/aiden.png";



class Intro extends React.Component {
    render() {
        return (
            <div className="intro-background">
                <div className="headshot-image col-md-6 col-sm-12">
                    <img src={headshot} className="headshot-round img-fluid animate__animated animate__rollIn"
                        alt="Headshot of Aiden" />
                </div>
                <div className="col-md-6 col-sm-12 intro">
                    <h1 className="intro-title animate__animated animate__backInLeft">Hi, I'm <span className="green">Aiden.</span></h1>
                    <h2 className="typing">
                        <span className="typewrite" data-period="2000"
                            data-type='[ "Full Stack Developer", "Graphic Designer", "Dog Dad", "Trans Rights Activist", "Communications Specialist"]'>
                            <span className="wrap"> </span>
                        </span>
                    </h2>
                    <a href="index.html#portfolio"><button type="button" className="btn btn-outline-light">Recent
                Projects</button></a>
                </div>
            </div>
        )
    }
}

export default Intro;