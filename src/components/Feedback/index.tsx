import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.css";

class Feedback extends Component {
    render() {
        return (
            <Box id="feedback">
                <h2 className="col-md-3 title">FEEDBACK</h2>

                <article className="col-md-9">
                    <div className="contact-info">
                        <p className="feedback">
                            "Aiden is always in a good mood making him a pleasure to work with. Would gladly work with
                            him again."
                        <br />
                            <br />
                    "Always cheerful, asks questions, never seems to give up. Great to have in groups for class
                    activities!"
                        <br />
                            <br />
                    "Aiden is an activist and a very compassionate individual."
                        <br />
                            <br />
                    "He is always on the lookout for someone not feeling good about themselves and not letting
                    them put themselves down - looking out for the diginity of each human being, for sure."
                        <br />
                            <br />
                    "Aiden is just incredibly kind and patient with everything toward everyone."
                        <br />
                            <br />
                    "Aiden is always friendly, warm and welcoming."</p>
                    </div>
                </article>
            </Box >
        )
    }
}

export default Feedback;