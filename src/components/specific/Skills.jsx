import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/global.scss';

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

const Skills = () => (
  <section id="skills" className="skills-section">
    <Container>
      <h2 className="skill-section-title">Tech Stack</h2>
      <Row className="justify-content-center">
        {techSkills.map((skill, idx) => (
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
    </Container>
  </section>
);

export default Skills;
