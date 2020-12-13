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
                        <h4>Front End</h4>
                        <p>Angular, React, HTML5, CSS, SCSS, jQuery, Bootstrap, Material</p>
                    </div>
                    <div>
                        <span><i className="fas fa-terminal"></i></span>
                        <h4>Back End</h4>
                        <p>Typescript, Javascript, NestJs, Mongoose, Express, NodeJs, SQL, NoSQL, MongoDB</p>
                    </div>
                </div>
                <div className="skillsSection">
                    <div>
                        <span className="blue"><i className="fas fa-code-branch"></i></span>
                        <h4>Tools</h4>
                        <p>Git, Github, Jira, Confluence, VSCode, Hubspot, Slack</p>
                    </div>
                    <div className="soft">
                        <span className="blue"><i className="fas fa-users-cog"></i></span>
                        <h4>Soft Skills</h4>
                        <p>Critical Thinking, Communication, Resourcefulness, Organization, Flexibility</p>
                    </div>
                </div>
            </Box>
        )
    }
}

export default Skills;