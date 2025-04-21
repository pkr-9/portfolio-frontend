import React from "react";
import ProjectCard from "./ProjectCard";

const WideProjectCard = (props) => (
  <ProjectCard
    {...props}
    className="wide-project-card"
    imgStyle={{ height: "280px", objectFit: "cover" }}
    bodyStyle={{ textAlign: "center" }}
  />
);

export default WideProjectCard;
