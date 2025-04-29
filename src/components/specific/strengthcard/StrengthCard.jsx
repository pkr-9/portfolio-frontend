import React from 'react';
import './StrengthCard.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const strengths = [
  {
    title: 'Problem Solving',
    description:
      'Strong analytical skills to debug, optimize, and deliver scalable backend solutions.',
  },
  {
    title: 'Clean Code',
    description:
      'Focus on writing maintainable, readable, and testable code following SOLID principles.',
  },
  {
    title: 'Spring Boot Mastery',
    description:
      'Hands-on experience building RESTful APIs, integrating databases, and configuring microservices.',
  },
  {
    title: 'Team Collaboration',
    description:
      'Excellent communication and collaboration skills in agile development environments.',
  },
];

const StrengthCard = () => {
  return (
    <section className="strength-section">
      <Container>
        <h2 className="section-heading">My Strengths</h2>
        {strengths.map((item, index) => (
          <Row key={index} className="strength-card align-items-center">
            <Col md={2} className="icon-col">
              <FaCheckCircle className="strength-icon" />
            </Col>
            <Col md={10}>
              <h4 className="strength-title">{item.title}</h4>
              <p className="strength-desc">{item.description}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default StrengthCard;
