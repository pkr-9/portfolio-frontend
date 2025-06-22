import React from 'react';
import { Container } from 'react-bootstrap';
import projects from '../../../data/projects.json';
import WideProjectCard from '../../specific/wideprojectcard/WideProjectCard';
import './WideProjectsSection.scss';

const WideProjectsSection = () => {
  return (
    <section className="wide-projects-section">
      <Container>
        <h2 className="section-heading">Featured Project</h2>
        {projects.slice(0, 1).map((project) => {
          return (
            <WideProjectCard
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
      </Container>
    </section>
  );
};

export default WideProjectsSection;
