import React, { Component } from "react";
import Data from "./portfolio.json";
import PortfolioCard from "./portfolio-card";
import "./style.scss";
import Nav from "../nav";
import Footer from "../footer";

export default class Portfolio extends Component {
  state = {
    portfolio: Data,
  };

  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <header>
            <h1>Recent Projects</h1>
          </header>
          <div className="portfolio">
            {this.state.portfolio.map((value) => {
              return <PortfolioCard key={value.id} project={value} />;
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
