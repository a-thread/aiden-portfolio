import React from "react";
import { Link, Button } from "@mui/material";
import "./style.scss";
import Project from "../../../models/project.model";

export default function PortfolioCard(props: { project: Project }) {
  return (
    <article className="portfolio-item shadow" id={`${props.project.id}`}>
      {/* Media */}
      <div className="image">
        {/* image */}
        <img
          className="shadow"
          src={`${props.project.image}`}
          alt={props.project.title}
        />

        {/* Buttons Row */}
        <div className="btnsRow">
          {/* Deployed */}
          <Link className="link" href={props.project.deployed} target="_blank">
            <Button className="site shadow">App</Button>
          </Link>

          {/* Repo */}
          <Link className="link" href={props.project.github} target="_blank">
            <Button className="site shadow">Repo</Button>
          </Link>
        </div>
      </div>

      {/* Text */}
      <div className="text">
        {/* Project Name */}
        <h2>{props.project.title}</h2>
        <div>
          {/* Description */}
          <p>{props.project.description}</p>

          {/* Guest Login, if any */}
          {props.project.email && props.project.password && (
            <div className="login">
              {/* title */}
              <span>
                <b>Guest Login:</b>
              </span>

              {/* email */}
              {props.project.email && (
                <p>
                  <b>email:</b> {props.project.email}
                </p>
              )}

              {/* password */}
              {props.project.password && (
                <p>
                  <b>password:</b> {props.project.password}
                </p>
              )}
            </div>
          )}

          {/* Tech Used */}
          <p>
            <b>Tech Used:</b> {props.project.tech}
          </p>
        </div>
      </div>
    </article>
  );
}
