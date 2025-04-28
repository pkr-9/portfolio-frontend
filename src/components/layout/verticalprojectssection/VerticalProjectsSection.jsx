import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projects from '../../../data/projects.json';
import VerticalProjectCard from '../../specific/verticalprojectcard/VerticalProjectCard';
import '../../../styles/global.scss';
import './VerticalProjectsSection.scss';

const VerticalProjectsSection = () => (
  <section className="pt-5 pb-5">
    <Container>
      <Row>
        {projects.slice(0, 4).map((project) => {
          const imgFile = project.img.split('/').pop();
          return (
            <Col md={4} key={project.id}>
              <VerticalProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                imgName={imgFile}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default VerticalProjectsSection;
