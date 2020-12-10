import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import "./style.scss";

function PortCard(props: { id: number; key: number; image: string; title: string; description: string; tech: string; deployed: string; github: string; }) {
  return (
    <article className="portfolio-item">
      <div className="image">
        <img src={`${props.image}`} alt={props.title} />
        <div className="btnsRow">
          <Link className="link" href={props.deployed} target="_blank">
            <Button className="site" variant="contained">App</Button>
          </Link>
          <Link className="link" href={props.github}  target="_blank">
            <Button className="site" variant="contained">Repo</Button>
          </Link>
        </div>
      </div>
      <div className="text">
        <h2>{props.title}</h2>
        <div>
          <p>{props.description}</p>
          <p><strong>Tech Used:</strong> {props.tech}</p>
        </div>
      </div>
    </article >
  );
};

export default PortCard;