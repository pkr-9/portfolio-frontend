// Experience.jsx
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Collapse,
} from 'react-bootstrap';
import './Experience.scss';

const experiences = [
  {
    company: 'Ashwamedh Motors Pvt. Ltd.',
    role: 'FullStack – Software Developer Intern',
    start: 'Dec 2024',
    end: 'Apr 2025',
    skills: [
      'MERN Stack',
      'Python',
      'REST API',
      'RBAC',
      'SQL',
      'Jest',
      'Agile',
    ],
    responsibilities: [
      'Automated tender data ingestion pipeline with Python and REST APIs.',
      'Built secure role-based access control (RBAC) system with hierarchical role enforcement (Super Admin, Admin, Sub-Admin) using MERN stack.',
      'Practiced secure coding principles, optimized SQL queries, and applied unit testing using JUnit.',
      'Participated in Agile sprints and collaborated with QA, BA, and product stakeholders.',
    ],
  },
  // {
  //   company: 'Dummy_Data 1',
  //   role: 'Full Stack Developer',
  //   start: 'Jun 2020',
  //   end: 'Dec 2022',
  //   skills: ['Angular', 'Spring Boot', 'MySQL', 'Docker'],
  //   responsibilities: [
  //     'Developed and maintained full-stack applications using Angular and Spring Boot.',
  //     'Designed database schemas and optimized MySQL queries.',
  //     'Implemented CI/CD pipelines with Docker and Jenkins.',
  //   ],
  // },
];

const extraExperiences = [
  // {
  //   company: 'Dummy_Data 2.',
  //   role: 'Software Developer',
  //   start: 'Mar 2018',
  //   end: 'May 2020',
  //   skills: ['Java', 'Hibernate', 'Oracle DB', 'Jenkins'],
  //   responsibilities: [
  //     'Implemented backend logic using Java and Hibernate.',
  //     'Managed Oracle DB and wrote optimized SQL scripts.',
  //     'Built CI pipelines with Jenkins.',
  //   ],
  // },
  // {
  //   company: 'Dummy_Data 3',
  //   role: 'Junior Developer',
  //   start: 'Jul 2016',
  //   end: 'Feb 2018',
  //   skills: ['PHP', 'Laravel', 'MySQL', 'Git'],
  //   responsibilities: [
  //     'Assisted in web development using Laravel framework.',
  //     'Maintained version control using Git and GitHub.',
  //     'Wrote modular PHP code and integrated third-party APIs.',
  //   ],
  // },
];

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleDetails = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const displayed = showAll
    ? [...experiences, ...extraExperiences]
    : experiences;

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="experience-title">Professional Experience</h2>
        <Row>
          {displayed.map((exp, idx) => (
            <Col key={idx} md={12} className="mb-4">
              <Card className="experience-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <Card.Title className="company-name">
                        {exp.company}
                      </Card.Title>
                      <Card.Subtitle className="role-name mb-2 text-muted">
                        {exp.role}
                      </Card.Subtitle>
                    </div>
                    <div className="date-range">
                      <span>
                        {exp.start} – {exp.end}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 skills-wrapper">
                    {exp.skills.map((skill, i) => (
                      <Badge
                        bg="secondary"
                        key={i}
                        className="me-2 mb-2 skill-badge"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => toggleDetails(idx)}
                    >
                      {expanded[idx] ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Collapse in={expanded[idx]}>
                      <ul className="mt-3 ps-3 responsibility-list">
                        {exp.responsibilities.map((res, i) => (
                          <li key={i}>{res}</li>
                        ))}
                      </ul>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-end mt-3">
          <Button
            variant="outline-primary"
            className="view-toggle-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View More'}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
