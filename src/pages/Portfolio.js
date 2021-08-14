import React from "react";
import Project from "../components/Project";
import projectArr from "../utils/projects";

export default function Portfolio() {
    return (
        <div className="row justify-content-around main-component">
            {projectArr.map((project, id) => (
                <Project
                    key={id}
                    title={project.title}
                    description={project.description}
                    imgLink={project.imgLink}
                    repoLink={project.repoLink}
                    deployLink={project.deployLink}
                />
            ))}
        </div>
    )
}