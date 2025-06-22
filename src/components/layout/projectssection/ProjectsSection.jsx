import React from 'react';
import projects from '../../../data/projects.json';
import ProjectCard from '../../specific/projectcard/ProjectCard';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  return (
    <section className="projects">
      {/* <h2 className="section-heading">My Projects</h2> */}
      <div className="projects-grid">
        {projects.slice(1, 4).map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              imgName={project.img}
              majorTechStack={project.majorTechStack}
              repo={project.repo}
              live={project.live}
              documentation={project.documentation}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
