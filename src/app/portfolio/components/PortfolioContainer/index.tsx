import React, { Component } from "react";
import Data from "./portfolio.json";
import PortfolioCard from "../PortfolioCard";
import "./style.scss";

export default class PortfolioWrapper extends Component {
  state = {
    portfolio: Data,
  };

  render() {
    return (
      <div className="body">
        <header>
          <h1>Recent Projects</h1>
        </header>
        <div className="portfolio">
          {this.state.portfolio.map((value) => {
            return <PortfolioCard project={value} />;
          })}
        </div>
      </div>
    );
  }
}
