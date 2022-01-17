import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.scss";

class Bio extends Component {
    render() {
        return (
            <Box className="about-me" id="bio">
                <h3 className="about-title blue">BIO</h3>

                <article>
                    <p className="bio-content">
                        Full Stack Engineer with 3+ years of hands on experience designing, building, and implementing applications
                        using a wide range of technologies and programming languages. Check out my projects page to see a few of my 
                        personal projects!
                        <br />
                        <br />
                        Coming from the nonprofit sector with a focus upon peer support and social justice, I am
                        passionate about accessibility and approach programming challenges from fresh perspectives 
                        to create collaborative and meaningful web applications.
                        <br />
                        <br />
                        When I'm not hard at work, you can find me making art (quilting, drawing, or refinishing furniture) with my spouse,
                        CJ, and great dane, Bonito.
                        </p>
                </article>
            </Box>
        )
    }
}

export default Bio;