// Skills.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../../styles/global.scss';
import './Skills.scss';

const techSkills = [
  { title: 'React', icon: '⚛️' },
  { title: 'Node.js', icon: '🟩' },
  { title: 'Java', icon: '☕' },
  { title: 'Spring Boot', icon: '🌱' },
  { title: 'Oracle DB', icon: '🛢️' },
  { title: 'PostgreSQL', icon: '🐘' },
  { title: 'Git', icon: '🐙' },
  { title: 'Docker', icon: '🐳' },
];

const extraSkills = [
  { title: 'Kubernetes', icon: '☸️' },
  { title: 'TypeScript', icon: '📘' },
  { title: 'Redux', icon: '🔁' },
  { title: 'Jenkins', icon: '🧰' },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll
    ? [...techSkills, ...extraSkills]
    : techSkills;

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skill-section-title">Tech Stack</h2>
        <Row className="justify-content-center">
          {displayedSkills.map((skill, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-end mt-4">
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

export default Skills;
