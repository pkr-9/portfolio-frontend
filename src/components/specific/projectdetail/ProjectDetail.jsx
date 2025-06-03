// src/components/pages/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data/projectsDetail.json';
import { Container, Badge, Button, Carousel } from 'react-bootstrap';
import './Projects.scss';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = data.find((p) => p.slug === slug);

  if (!project) return <p className="text-center py-5">❌ Project not found</p>;

  return (
    <section className="project-detail-section py-5">
      <Container>
        <h2 className="mb-3">{project.name}</h2>
        <Badge bg="info" className="mb-2">
          {project.category}
        </Badge>
        <p className="text-muted">
          {project.start} – {project.end || 'Present'}{' '}
          {project.status === 'ongoing' && (
            <Badge bg="warning" text="dark" className="ms-2">
              Ongoing
            </Badge>
          )}
        </p>

        <p>{project.description}</p>

        <div className="mb-3">
          <strong>Tech Stack:</strong>{' '}
          {project.techStack.map((tech, i) => (
            <Badge key={i} bg="dark" className="me-1">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mb-3">
          <strong>Key Features:</strong>
          <ul>
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>
        </div>

        {project.live && project.demoLink && (
          <Button
            variant="primary"
            href={project.demoLink}
            target="_blank"
            className="me-2"
          >
            View Demo
          </Button>
        )}
        {project.repoLink && (
          <Button
            variant="outline-secondary"
            href={project.repoLink}
            target="_blank"
          >
            View Code
          </Button>
        )}

        {project.images?.length > 0 && (
          <Carousel className="mt-4">
            {project.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100 project-image"
                  src={require(`../../../assets/images/${img
                    .split('/')
                    .pop()}`)}
                  alt={`Screenshot ${i + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  );
};

export default ProjectDetail;
