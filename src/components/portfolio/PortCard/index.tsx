import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import "./style.scss";

function PortCard(
  props: {
    id: number;
    key: number;
    image: string;
    title: string;
    email: string;
    password: string;
    description: string;
    tech: string;
    deployed: string;
    github: string;
  }
) {
  return (
    <article className="portfolio-item shadow" id={`${props.id}`}>

      {/* Media */}
      <div className="image">

        {/* image */}
        <img className="shadow" src={`${props.image}`} alt={props.title} />

        {/* Buttons Row */}
        <div className="btnsRow">

          {/* Deployed */}
          <Link className="link" href={props.deployed} target="_blank">
            <Button className="site shadow">App</Button>
          </Link>

          {/* Repo */}
          <Link className="link" href={props.github} target="_blank">
            <Button className="site shadow">Repo</Button>
          </Link>
        </div>
      </div>

      {/* Text */}
      <div className="text">

        {/* Project Name */}
        <h2>{props.title}</h2>
        <div>

          {/* Description */}
          <p>{props.description}</p>

          {/* Guest Login, if any */}
          {(props.email && props.password) &&
            <div className="login">

              {/* title */}
              <span><strong>Guest Login:</strong></span>

              {/* email */}
              {props.email && <p><strong>email:</strong> {props.email}</p>}

              {/* password */}
              {props.password && <p><strong>password:</strong> {props.password}</p>}
            </div>}

          {/* Tech Used */}
          <p><strong>Tech Used:</strong> {props.tech}</p>
        </div>
      </div>
    </article >
  );
};

export default PortCard;