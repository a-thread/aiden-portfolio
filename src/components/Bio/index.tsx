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
                        Full stack web developer with graphic design background educated at University of
                        Southern Maine. Recently earned a certificate in full stack development from
                        University
                        of New Hampshire in JavaScript, Jquery, CSS, and responsive web design.
                        <br />
                        <br />
                        Coming from the nonprofit sector with a focus upon peer support and social justice, I am
                        passionate about
                        accessibility and approach programming challenges from fresh perspectives to create
                        collaborative and meaningful web applications.
                        <br />
                        <br />
                        When I am not at work or volunteering, you will find me at home or in the woods with my great
                        dane, Bonito, and my incredible partner, CJ.
                        </p>
                </article>
            </Box>
        )
    }
}

export default Bio;