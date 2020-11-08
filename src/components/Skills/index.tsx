import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.css";

class Skills extends Component {
    render() {
        return (
            <Box className="skillsContainer">
                <h3 className="skillsTitle blue">Tools, Technologies, and Skills</h3>

                <div className="skillsSection">
                    <div className="skillsList border">
                        <span className="blue"><i className="fas fa-laptop-code"></i></span>
                        <h2>Front End</h2>
                        <p>HTML5, CSS, Javascript, jQuery TypeScript, Bootstrap, Material, React</p>
                    </div>
                    <div className="skillsList border">
                        <span className="blue"><i className="fas fa-terminal"></i></span>
                        <h2>Back End</h2>
                        <p>Mongoose, Express, Node, MySQL, NoSQL, MongoDB</p>
                    </div>
                </div>
                <div className="skillsSection">
                    <div className="skillsList">
                        <span className="blue"><i className="fas fa-code-branch"></i></span>
                        <h2>Tools</h2>
                        <p>Github, VSCode, Git, Jira, Hubspot, Slack</p>
                    </div>
                    <div className="skillsList">
                        <span className="blue"><i className="fas fa-users-cog"></i></span>
                        <h2>Soft Skills</h2>
                        <p>Critical Thinking, Communication, Resourcefulness, Organization, Flexibility </p>
                    </div>
                </div>
            </Box>
        )
    }
}

export default Skills;