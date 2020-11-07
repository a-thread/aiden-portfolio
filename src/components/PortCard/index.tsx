import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import "./style.css";

function PortCard(props: { id: number; image: string; title: string; description: string; tech: string; deployed: string; github: string; }) {
  const preventDefault = (event: { preventDefault: () => any; }) => event.preventDefault();
  return (
    <article className="portfolio-item">
      <div className="image">
        <img className="port-img" src={props.image} alt={props.title} />
      </div>
      <div className="text">
        <h2>{props.title}</h2>
        <div className="description">
          <p className="description">{props.description}
            <br />
            <br />
            <strong>Tech Used:</strong> {props.tech}</p>
          <div className="row btnsRow">
            <Link href={props.deployed} onClick={preventDefault}>
              <Button className="btn site" variant="contained">App</Button>
            </Link>
            <Link href={props.github} onClick={preventDefault}>
              <Button className="btn site" variant="contained">Repo</Button>
            </Link>
          </div>
        </div>
      </div>
    </article >
  );
};

export default PortCard;