import React from "react";
import ProjectCard from "./ProjectCard";

const VerticalProjectCard = (props) => (
  <ProjectCard
    {...props}
    className="vertical-project-card"
    imgStyle={{ height: "220px", objectFit: "cover" }}
  />
);

export default VerticalProjectCard;
