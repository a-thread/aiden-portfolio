import React, { Component } from "react";
import Portfolio from "../../utils/portfolio.json";
import PortCard from "../PortCard";
import "./style.scss";

class PortContainer extends Component {

    state = {
        Portfolio
    }

    render() {
        return (
            <div className="body">
                <header>
                    <h1>Recent Projects</h1>
                </header>
                <div className="portfolio">
                {this.state.Portfolio.map(project => {
                    return (
                        <PortCard
                            id={project.id}
                            key={project.key}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            email={project.email}
                            password={project.password}
                            tech={project.tech}
                            github={project.github}
                            deployed={project.deployed}
                        />
                    )
                })}
                </div>
            </div>
        )
    }

}


export default PortContainer;
