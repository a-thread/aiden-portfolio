import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import "./style.scss";

class Skills extends Component {
    render() {
        return (
            <Box className="skillsContainer">
                <h3>Tools, Technologies<br /> & Skills</h3>

                <div className="skillsSection">
                    <div>
                        <span><i className="fas fa-laptop-code"></i></span>
                        <h2>Front End</h2>
                        <p>Angular, React, HTML5, CSS, jQuery, Bootstrap, Material</p>
                    </div>
                    <div>
                        <span><i className="fas fa-terminal"></i></span>
                        <h2>Back End</h2>
                        <p>Typescript, Javascript, NestJs, Mongoose, Express, NodeJs, SQL, NoSQL, MongoDB</p>
                    </div>
                </div>
                <div className="skillsSection">
                    <div>
                        <span className="blue"><i className="fas fa-code-branch"></i></span>
                        <h2>Tools</h2>
                        <p>Github, VSCode, Git, Jira, Hubspot, Slack</p>
                    </div>
                    <div>
                        <span className="blue"><i className="fas fa-users-cog"></i></span>
                        <h2>Soft Skills</h2>
                        <p>Critical Thinking, Communication, Resourcefulness, Organization, Flexibility</p>
                    </div>
                </div>
            </Box>
        )
    }
}

export default Skills;