import React, { Component } from "react";
import "./style.css";

class Testimonials extends Component {
    render() {
        return (
            <main id="feedback">
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-3 ">
                            FEEDBACK
            </h2>

                        <article className="col-md-9">
                            <p className="feedback">
                                "Aiden is always in a good mood making him a pleasure to work with. Would gladly work with
                                him again."
                    <br />
                                <br />
                    "Always cheerful, asks questions, never seems to give up. Great to have in groups for className
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
                    "Aiden is always friendly, warm and welcoming."
                </p>
                        </article>
                    </div>
                </div>
            </main>
        )
    }
}

export default Testimonials;