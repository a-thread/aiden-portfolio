import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.css";

class Feedback extends Component {
    render() {
        return (
            <Box id="feedback">
                <h3 className="feedbackTitle">Testimonials</h3>
                <div className="feedback">
                    <p className="feedback">
                        "Aiden is always in a good mood making him a pleasure to work with. Would gladly work with
                        him again."
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
            </Box >
        )
    }
}

export default Feedback;