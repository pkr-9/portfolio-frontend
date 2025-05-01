import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projects from '../../../data/projects.json';
import ProjectCard from '../../specific/projectcard/ProjectCard';
import './VerticalProjectsSection.scss';

const VerticalProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="vertical-projects-section">
      <Container fluid>
        {' '}
        <h2 className="section-heading text-center mb-5">Projects</h2>{' '}
        <Row className="project-row justify-content-center">
          {projects.map((project) => {
            const imgFile = project.img.split('/').pop();
            const isHovered = hoveredId === project.id;

            return (
              <Col
                key={project.id}
                xs={12} // Full width on extra small
                sm={10} // Wider on small
                md={6} // Two per row on medium
                lg={4} // Three per row on large
                xl={4} // Keep three per row on extra large
                className={`project-col ${isHovered ? 'expanded' : ''}`}
                // Apply listeners to the Col still, as it defines the hover area boundary
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  imgName={imgFile}
                  isExpanded={isHovered}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default VerticalProjectsSection;
