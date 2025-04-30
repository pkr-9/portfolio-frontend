import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projects from '../../../data/projects.json';
import ProjectCard from '../../specific/projectcard/ProjectCard';
import './VerticalProjectsSection.scss';

const VerticalProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="vertical-projects-section">
      <Container>
        <h2 className="section-heading">Projects</h2>
        <Row className="project-row">
          {projects.map((project) => {
            const imgFile = project.img.split('/').pop();
            const isHovered = hoveredId === project.id;

            return (
              <Col
                key={project.id}
                xs={12}
                md={6}
                lg={4}
                className={`project-col ${isHovered ? 'expanded' : ''}`}
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
