import React from 'react';
import projects from '../../../data/projects.json';
import ProjectCard from '../../specific/projectcard/ProjectCard';
import './VerticalProjectsSection.scss';

const VerticalProjectsSection = () => {
  return (
    <section className="vertical-projects">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => {
          const imgFile = project.img.split('/').pop();

          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              imgName={imgFile}
            />
          );
        })}
      </div>
    </section>
  );
};

export default VerticalProjectsSection;
