import React from 'react';
import { Container } from 'react-bootstrap';
import projects from '../../../data/projects.json';
import WideProjectCard from '../../specific/wideprojectcard/WideProjectCard';
import './WideProjectsSection.scss';

const WideProjectsSection = () => (
  <section className="wide-projects-section">
    <Container>
      <h2 className="section-heading">Featured Project</h2>
      {projects.slice(0, 1).map((project) => {
        const imgFile = project.img.split('/').pop();
        return (
          <WideProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            imgName={imgFile}
          />
        );
      })}
    </Container>
  </section>
);

export default WideProjectsSection;
