import React from 'react';
import { Link } from "react-router-dom";

export default function Project({ title, description, imgLink, repoLink, deployLink }) {

    const imageAlt = title + " homepage";

    return (
        <div className="card col-md-5 col-sm-10">
            <h4>{title}</h4>
            <h6>{description}</h6>
            <img id="project-img" src={imgLink} alt={imageAlt} />
            <div className="row justify-content-around">
                <Link to={{pathname: repoLink}} target="_blank" rel="noreferrer" className="btn btn-primary col-5">GitHub</Link>
                <Link to={{pathname: deployLink}} target="_blank" rel="noreferrer" className="btn btn-success col-5">Deployed App</Link>
            </div>
        </div>
    );
}