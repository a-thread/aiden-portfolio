import React, { Component } from "react";
import Portfolio from "../../portfolio.json";
import PortCard from "../PortCard";
import "./style.css";

class PortContainer extends Component {

    state = {
        Portfolio
    }

    render() {
        return (
            <div>
            {this.state.Portfolio.map(project => {
                return (
                <PortCard 
                id={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                github={project.github}
                deployed={project.deployed}
                />
                )
            })}
            </div>
        )
    }

}


export default PortContainer;
