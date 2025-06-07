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
              duration={project.duration}
              link={project.slug}
              imgName={project.img}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default WideProjectsSection;
